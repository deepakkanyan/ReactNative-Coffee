import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { CoffeeModel } from '../../api/getCoffeelist/CoffeeModel';
import Box from '../../designsystem/components/Box';
import Text from '../../designsystem/components/Text';
import { RootStackParamList } from '../../stacks/RootStackParamList';
import FastImage from 'react-native-fast-image';
import { ScrollView, TouchableOpacity, Alert } from 'react-native';
import { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';

type CoffeeDetailsProps = NativeStackScreenProps<
  RootStackParamList,
  'CoffeeDetails'
>;

export const CoffeeDetails: React.FC<CoffeeDetailsProps> = ({
  route,
  navigation,
}) => {
  const { title, description, image } = route.params;
  const [selectedSize, setSelectedSize] = useState<
    'Small' | 'Medium' | 'Large'
  >('Medium');
  const [quantity, setQuantity] = useState(1);
  const [isPressed, setIsPressed] = useState(false);

  console.log('CoffeeDetails component rendered', description);

  const handleAddToCart = () => {
    Alert.alert(
      'Added to Cart',
      `${quantity} ${selectedSize} ${title} added to your cart!`,
    );
  };

  return (
    <ScrollView>
      {/* Header Image with Gradient Overlay */}
      <Box position="relative">
        <FastImage
          source={{ uri: image }}
          style={{ width: '100%', height: 300 }}
          resizeMode="cover"
        />
        <LinearGradient
          colors={['#4B2E2B', 'transparent']} // palette.espresso
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 120,
          }}
        />
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            position: 'absolute',
            top: 40,
            left: 16,
            backgroundColor: 'rgba(0,0,0,0.6)', // palette.black with opacity
            borderRadius: 20,
            padding: 8,
          }}
        >
          <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
          {/* palette.white */}
        </TouchableOpacity>
      </Box>

      {/* Content Card */}
      <Box
        backgroundColor="cardBackground" // palette.cream (#EFE6DD)
        borderTopLeftRadius="xl"
        borderTopRightRadius="xl"
        padding="l"
        mt="lN"
      >
        {/* Title and Rating */}
        <Box
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          marginBottom="m"
        >
          <Text variant="body" color="text">
            {/* palette.mocha (#362C2A) */}
            {title}
          </Text>
          <Box flexDirection="row" alignItems="center">
            <Ionicons name="star" size={20} color="#FFD700" />
            {/* Gold for star */}
            <Text variant="body" color="muted" marginLeft="xs">
              {/* palette.latte (#C8B6A6) */}
              {4.5} {/* Example rating */}
            </Text>
          </Box>
        </Box>

        {/* Price */}
        <Text variant="subheader" color="success" marginBottom="m">
          {/* palette.success (#2ECC71) */}${4.99} {/* Example price */}
        </Text>

        {/* Description */}
        <Text variant="body" color="muted" marginBottom="l" lineHeight={24}>
          {/* palette.latte (#C8B6A6) */}
          {description}
        </Text>

        {/* Size Selection */}
        <Box marginBottom="l">
          <Text variant="subheader" color="text" marginBottom="s">
            {/* palette.mocha (#362C2A) */}
            Size
          </Text>
          <Box flexDirection="row" justifyContent="space-between">
            {['Small', 'Medium', 'Large'].map(size => (
              <TouchableOpacity
                key={size}
                onPress={() =>
                  setSelectedSize(size as 'Small' | 'Medium' | 'Large')
                }
              >
                <Box
                  backgroundColor={
                    selectedSize === size ? 'primary' : 'mainBackground'
                  } // primary: palette.espresso (#4B2E2B), mainBackground: palette.milk (#F4ECE1 MO
                  padding="s"
                  borderRadius="m"
                  width={100}
                  alignItems="center"
                >
                  <Text
                    variant="body"
                    color={selectedSize === size ? 'white' : 'text'} // white: palette.white (#FFFFFF), text: palette.mocha (#362C2A)
                  >
                    {size}
                  </Text>
                </Box>
              </TouchableOpacity>
            ))}
          </Box>
        </Box>

        {/* Coffee Details */}
        <Box marginBottom="l">
          <Text variant="subheader" color="text" marginBottom="s">
            {/* palette.mocha (#362C2A) */}
            Details
          </Text>
          <Box flexDirection="row" justifyContent="space-between">
            <Box flex={1} alignItems="center">
              <Text variant="caption" color="muted">
                {/* palette.latte (#C8B6A6) */}
                Type
              </Text>
              <Text variant="body" color="text">
                {/* palette.mocha (#362C2A) */}
                Espresso
              </Text>
            </Box>
            <Box flex={1} alignItems="center">
              <Text variant="caption" color="muted">
                {/* palette.latte (#C8B6A6) */}
                Roast
              </Text>
              <Text variant="body" color="text">
                {/* palette.mocha (#362C2A) */}
                Medium
              </Text>
            </Box>
            <Box flex={1} alignItems="center">
              <Text variant="caption" color="muted">
                {/* palette.latte (#C8B6A6) */}
                Origin
              </Text>
              <Text variant="body" color="text">
                {/* palette.mocha (#362C2A) */}
                Colombia
              </Text>
            </Box>
          </Box>
        </Box>

        {/* Quantity Picker */}
        <Box flexDirection="row" alignItems="center" marginBottom="l">
          <Text variant="subheader" color="text" marginRight="m">
            {/* palette.mocha (#362C2A) */}
            Quantity
          </Text>
          <TouchableOpacity
            onPress={() => setQuantity(Math.max(1, quantity - 1))}
          >
            <Box
              backgroundColor="secondary" // palette.caramel (#D9A76C)
              padding="s"
              borderRadius="s"
              width={40}
              alignItems="center"
            >
              <Text variant="body" color="text">
                {/* palette.mocha (#362C2A) */}−
              </Text>
            </Box>
          </TouchableOpacity>
          <Text variant="body" color="text" marginHorizontal="m">
            {/* palette.mocha (#362C2A) */}
            {quantity}
          </Text>
          <TouchableOpacity onPress={() => setQuantity(quantity + 1)}>
            <Box
              backgroundColor="secondary" // palette.caramel (#D9A76C)
              padding="s"
              borderRadius="s"
              width={40}
              alignItems="center"
            >
              <Text variant="body" color="text">
                {/* palette.mocha (#362C2A) */}+
              </Text>
            </Box>
          </TouchableOpacity>
        </Box>

        {/* Add to Cart Button */}
        <TouchableOpacity
          onPressIn={() => setIsPressed(true)}
          onPressOut={() => setIsPressed(false)}
          onPress={handleAddToCart}
        >
          <Box
            backgroundColor={isPressed ? 'secondary' : 'primary'} // secondary: palette.caramel (#D9A76C), primary: palette.espresso (#4B2E2B)
            paddingVertical="m"
            borderRadius="l"
            alignItems="center"
          >
            <Text variant="subheader" color="white">
              {/* palette.white (#FFFFFF) */}
              Add to Cart
            </Text>
          </Box>
        </TouchableOpacity>
      </Box>
    </ScrollView>
  );
};
