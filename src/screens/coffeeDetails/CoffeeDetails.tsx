import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScrollView, TouchableOpacity, Alert } from 'react-native';
import { useState } from 'react';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Box from '../../designsystem/components/Box';
import Text from '../../designsystem/components/Text';
import Button from '../../designsystem/components/Button';
import { BackButton } from '../../components/widgets/BackButton';
import { RootStackParamList } from '../../stacks/RootStackParamList';
import { SizeSelector } from './SizeSelector';

type Props = NativeStackScreenProps<RootStackParamList, 'CoffeeDetails'>;

export const CoffeeDetails: React.FC<Props> = ({ route, navigation }) => {
  const { title, description, image } = route.params;

  const [selectedSize, setSelectedSize] = useState<
    'Small' | 'Medium' | 'Large'
  >('Medium');

  const [quantity, setQuantity] = useState(1);

  const RATING = 4.5;
  const PRICE = 4.99;

  const handleAddToCart = () => {
    Alert.alert(
      'Added to Cart',
      `${quantity} ${selectedSize} ${title} added to your cart!`,
    );
  };

  return (
    <Box flex={1} backgroundColor="cardBackground">
      <ScrollView>
        {/* Image Header with Back Button and Gradient */}
        <Box position="relative">
          {/* Coffee Image */}
          <FastImage
            source={{ uri: image }}
            style={{ width: '100%', height: 300 }}
            resizeMode="cover"
          />

          {/* Gradient Overlay */}
          <LinearGradient
            colors={['#4B2E2B', 'transparent']}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: 120,
            }}
          />

          {/* Back Button */}
          <Box position="absolute" top={40} left={16}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back" size={28} color="#ffffff" />
            </TouchableOpacity>
          </Box>
        </Box>

        {/* Coffee Info Card */}
        <Box
          backgroundColor="cardBackground"
          borderTopLeftRadius="xl"
          borderTopRightRadius="xl"
          padding="l"
          mt="xxlN"
        >
          {/* Title & Rating */}
          <Box
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            mb="m"
          >
            <Text variant="body" color="text">
              {title}
            </Text>

            <Box flexDirection="row" alignItems="center">
              <Ionicons name="star" size={20} color="secondary" />
              <Text variant="body" color="secondary" ml="xs">
                {RATING}
              </Text>
            </Box>
          </Box>
          {/* Price */}
          <Text variant="subheader" color="success" mb="m">
            ${PRICE.toFixed(2)}
          </Text>
          {/* Description */}
          <Text variant="body" color="primary" mb="l" lineHeight={24}>
            {description}
          </Text>
          <SizeSelector
            selectedSize={selectedSize}
            onSizeChange={setSelectedSize}
          />
          <Button
            label="Add to Cart"
            variant="primary"
            onPress={handleAddToCart}
          />
        </Box>
      </ScrollView>
    </Box>
  );
};
