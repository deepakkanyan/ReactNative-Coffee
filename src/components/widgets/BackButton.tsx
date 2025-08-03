import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../stacks/RootStackParamList';
import Box from '../../designsystem/components/Box';
import Ionicons from 'react-native-vector-icons/Ionicons';

type BackButtonProps = {
  onBackPress?: () => void;
};

export const BackButton: React.FC<BackButtonProps> = ({ onBackPress }) => {
  return (
    <TouchableOpacity onPress={onBackPress}>
      <Box padding="m" m="m" borderRadius="m">
        <Ionicons name="arrow-back" size={24} color="black" />
      </Box>
    </TouchableOpacity>
  );
};
