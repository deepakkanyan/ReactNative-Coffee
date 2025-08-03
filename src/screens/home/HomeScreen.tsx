import { useNavigation } from '@react-navigation/native';
import {
  Button,
  View,
  ScrollView,
  StyleSheet,
  Touchable,
  TouchableOpacity,
  Image,
} from 'react-native';
import { RootStackParamList } from '../../stacks/RootStackParamList';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Box from '../../designsystem/components/Box';
import Text from '../../designsystem/components/Text';
import FastImage from 'react-native-fast-image';
import { useCoffeeData } from '../../api/fire/GetFamousCoffee';
import { AnimatedIcon } from '../../AnimatedIcon';

export const HomeScreen: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const { loading, data, error } = useCoffeeData();

  if (loading) {
    return (
      <Box alignItems="center" justifyContent="center" flex={1}>
        <Text>Loading...</Text>
      </Box>
    );
  }

  if (error) {
    return (
      <Box>
        <AnimatedIcon name="error" />
        <Text>Error: {error}</Text>
      </Box>
    );
  }

  if (!data) {
    return <Text>No coffee data available</Text>;
  }

  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <Box
        backgroundColor="primary"
        height={200}
        alignItems="center"
        justifyContent="center"
      >
        <Image
          source={require('../../../assets/images/banner.png')}
          style={{ width: '108%', height: '100%' }}
          resizeMode="cover" // or "stretch"
        />
      </Box>

      {data.map(coffee => (
        <Box
          key={coffee.id}
          backgroundColor="white"
          elevation={1}
          mt="lN"
          borderTopLeftRadius="xl"
          borderTopRightRadius="xl"
          flex={1}
          p="l"
        >
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('CoffeeDetails', {
                ...coffee,
              })
            }
          >
            <Box flexDirection="row" flex={1}>
              <FastImage
                style={{ width: 100, height: 100, borderRadius: 25 }}
                source={{ uri: coffee.image }}
                resizeMode={FastImage.resizeMode.cover}
              />
              <Box flexDirection="column" flex={1} ml="m">
                <Text variant="body">{coffee.title}</Text>
                <Text numberOfLines={2} mt="xs">
                  {coffee.description}
                </Text>
                <Text mt="s" variant="subbody">
                  Ingredients: {coffee.ingredients.join(', ')}
                </Text>
              </Box>
            </Box>
          </TouchableOpacity>
          <Box height={1} backgroundColor={'muted'} mt="m" opacity={0.2} />
        </Box>
      ))}
    </ScrollView>
  );
};
