import React, { createContext, useContext, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { HomeScreen } from './screens/home/HomeScreen';
import { SecondScreen } from './screens/SecondScreen';
import { CoffeeDetails } from './screens/coffeeDetails/CoffeeDetails';

import { AnimatedIcon } from './AnimatedIcon';
import { RootStackParamList } from './stacks/RootStackParamList';

import { ThemeProvider } from '@shopify/restyle';
import theme from './designsystem/theme';
import Text from './designsystem/components/Text';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

const TAB_CONFIG: Record<
  string,
  {
    label: string;
    iconFocused: string;
    iconUnfocused: string;
  }
> = {
  HomeTab: {
    label: 'Brew',
    iconFocused: 'cafe',
    iconUnfocused: 'cafe-outline',
  },
  SecondTab: {
    label: 'Orders',
    iconFocused: 'basket',
    iconUnfocused: 'basket-outline',
  },
  ThreeTab: {
    label: 'More',
    iconFocused: 'person-circle',
    iconUnfocused: 'person-circle-outline',
  },
};

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="CoffeeDetails" component={CoffeeDetails} />
    </Stack.Navigator>
  );
}

function SimpleStack({ component }: { component: React.ComponentType<any> }) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Second" component={component} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => {
              const tab = TAB_CONFIG[route.name];

              return {
                headerShown: false,
                tabBarIcon: ({ focused, size }) => (
                  <AnimatedIcon
                    name={focused ? tab.iconFocused : tab.iconUnfocused}
                    size={size}
                    color={
                      focused ? theme.colors.secondary : theme.colors.primary
                    }
                  />
                ),
                tabBarLabel: ({ focused }) => (
                  <Text
                    variant="subbody"
                    style={{
                      color: focused
                        ? theme.colors.secondary
                        : theme.colors.primary,
                    }}
                  >
                    {tab.label}
                  </Text>
                ),
                tabBarActiveTintColor: theme.colors.secondary,
                tabBarInactiveTintColor: theme.colors.primary,
              };
            }}
          >
            <Tab.Screen name="HomeTab" component={HomeStack} />
            <Tab.Screen
              name="SecondTab"
              component={() => <SimpleStack component={SecondScreen} />}
            />
            <Tab.Screen
              name="ThreeTab"
              component={() => <SimpleStack component={SecondScreen} />}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
