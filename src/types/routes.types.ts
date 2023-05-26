import {createStackNavigator} from '@react-navigation/stack';

export const AppStack: any = createStackNavigator();

export enum AppRoutes {
  Main = 'Main',
  Details = 'Details',
  Advanced = 'Advanced',
}
