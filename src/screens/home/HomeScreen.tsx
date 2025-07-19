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
import { useCoffeeData } from './useCoffeeData';
import Box from '../../designsystem/components/Box';
import Text from '../../designsystem/components/Text';
import FastImage from 'react-native-fast-image';

export const HomeScreen: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const coffeeData = useCoffeeData();

  if (coffeeData.loading) {
    return (
      <Box alignItems="center" justifyContent="center" flex={1}>
        <Text>Loading...</Text>
      </Box>
    );
  }

  if (coffeeData.error) {
    return <Text>Error: {coffeeData.error}</Text>;
  }

  if (!coffeeData.data) {
    return <Text>No coffee data available</Text>;
  }

  return (
    <ScrollView contentContainerStyle={styles.scroll}>
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

      {coffeeData.data.map(coffee => (
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
                <Text style={styles.name} variant="body">
                  {coffee.title}
                </Text>
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

const styles = StyleSheet.create({
  scroll: {},
  headerBox: {
    height: 50,
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  card: {
    marginBottom: 4,
    backgroundColor: '#eee',
    padding: 12,
  },
  name: {
    fontWeight: 'bold',
  },
});
