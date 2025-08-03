import { CoffeeModel } from '../api/getCoffeelist/CoffeeModel';

// stacks/RootStackParamList.ts
export type RootStackParamList = {
  Home: undefined;
  Second: CommonParamList;
  HookListScreen: undefined;
  ReducerExampleScreen: undefined;
  CoffeeDetails: CoffeeModel; // Fixed typo from CoffeeDtails
};

export type CommonParamList = {
  title: string;
  subtitle: string;
};
