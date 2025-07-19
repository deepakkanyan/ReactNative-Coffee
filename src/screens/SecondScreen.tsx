import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../stacks/RootStackParamList';
import Box from '../designsystem/components/Box';
import { AnimatedIcon } from '../AnimatedIcon';
import Text from '../designsystem/components/Text';

type SecondScreenProps = NativeStackScreenProps<RootStackParamList, 'Second'>;

export const SecondScreen: React.FC<SecondScreenProps> = ({ route }) => {
  return (
    <Box flex={1} alignItems="center" justifyContent="center" padding="m">
      <AnimatedIcon name="basket" size={100} color="#4B2E2B" />
      <Text variant="body" marginTop="s" textAlign="center" color="text">
        You don’t have any orders yet.
      </Text>
      <Text variant="caption" color="muted" marginTop="xs" textAlign="center">
        Start browsing and add your favorites!
      </Text>
    </Box>
  );
};
