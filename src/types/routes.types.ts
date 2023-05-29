import {createStackNavigator} from '@react-navigation/stack';

export const AppStack = createStackNavigator<AppStackParamList>();

export enum AppRoutes {
  Main = 'Main',
  Details = 'Details',
  Advanced = 'Advanced',
}

export type AppStackParamList = {
  Main: undefined;
  Details: undefined;
  Advanced: undefined;
};
