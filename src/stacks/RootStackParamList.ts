import { CoffeeModel } from '../api/getCoffeelist/CoffeeModel';

// stacks/RootStackParamList.ts
export type RootStackParamList = {
  Home: undefined;
  Second: CommonParamList;
  CoffeeDetails: CoffeeModel; // Fixed typo from CoffeeDtails
};

export type CommonParamList = {
  title: string;
  subtitle: string;
};
