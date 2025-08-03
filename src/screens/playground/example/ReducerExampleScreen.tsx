// ReducerExampleScreen.tsx
import React from 'react';
import { Button, ScrollView } from 'react-native';
import Box from '../../../designsystem/components/Box';
import Text from '../../../designsystem/components/Text';
import { useDispatch, useSelector } from 'react-redux';
import store from '../../../utils/store';

const ReducerExampleScreen = () => {
  const count = useSelector(state => store.getState().counter.count);

  return (
    <Box flex={1} backgroundColor="mainBackground" padding="m">
      <ScrollView>
        <Text variant="header" marginBottom="l">
          🎯 useReducer Example
        </Text>

        <Box
          backgroundColor="cardBackground"
          padding="xl"
          borderRadius="m"
          alignItems="center"
          justifyContent="center"
          shadowColor="black"
          shadowOffset={{ width: 0, height: 2 }}
          shadowOpacity={0.1}
          shadowRadius={4}
          elevation={3}
        >
          <Text variant="body" marginBottom="s">
            Count: {store.getState().counter.count}
          </Text>

          {/* <Box flexDirection="row" justifyContent="space-between" marginTop="m">
            <Button
              title="➖"
              onPress={() => store.dispatch(count.decrement())}
            />
            <Button
              title="🔁 Reset"
              onPress={() => store.dispatch(count.reset())}
            />
            <Button
              title="➕"
              onPress={() => store.dispatch(count.increment())}
            />
          </Box> */}
        </Box>
      </ScrollView>
    </Box>
  );
};

export default ReducerExampleScreen;
