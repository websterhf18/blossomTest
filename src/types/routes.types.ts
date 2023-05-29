import {createStackNavigator} from '@react-navigation/stack';

export const AppStack = createStackNavigator<any>();

export enum AppRoutes {
  Main = 'Main',
  Details = 'Details',
  Advanced = 'Advanced',
}
