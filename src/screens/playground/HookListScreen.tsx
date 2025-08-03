// HookListScreen.tsx
import React from 'react';
import { ScrollView, Touchable, TouchableOpacity } from 'react-native';
import Box from '../../designsystem/components/Box';
import Text from '../../designsystem/components/Text';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../stacks/RootStackParamList';

const hookList = [
  'useState',
  'useEffect',
  'useContext',
  'useRef',
  'useCallback',
  'useMemo',
  'useReducer',
  'useLayoutEffect',
  'useImperativeHandle',
  'useDebugValue',
  'useTransition',
  'useDeferredValue',
  'useInsertionEffect',
  'useId',
  'useSyncExternalStore',
  'useOptimistic',
];

const HookListScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <Box flex={1} backgroundColor="white">
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <Box height={100} alignItems={'center'} justifyContent="center" mb="m">
          <Text variant="body" color="text" textAlign="center">
            React Hooks List
          </Text>
          <Text variant="subbody" color="muted" textAlign="center">
            A collection of commonly used React hooks
          </Text>
        </Box>
        {hookList.map((hook, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => navigation.navigate('ReducerExampleScreen')} // Assuming you have a HookDetails screen
          >
            <Box
              key={index}
              mb="s"
              p="m"
              backgroundColor="cardBackground"
              borderRadius="m"
              shadowColor="black"
              shadowOffset={{ width: 0, height: 1 }}
              shadowOpacity={0.1}
              shadowRadius={2}
              elevation={2}
            >
              <Text variant="body" color="text">
                {hook}
              </Text>
            </Box>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </Box>
  );
};

export default HookListScreen;
