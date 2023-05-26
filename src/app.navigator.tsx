import {AppStack, AppRoutes} from '@src/types/routes.types';

import MainListScreen from './screens/main-list.screen';
import DetailsScreen from './screens/details.screen';
import AdvancedScreen from './screens/advanced-search.screen';

const AppNavigator = (): React.ReactElement => {
  return (
    <AppStack.Navigator screenOptions={{headerShown: false}}>
      <AppStack.Screen name={AppRoutes.Main} component={MainListScreen} />
      <AppStack.Screen name={AppRoutes.Details} component={DetailsScreen} />
      <AppStack.Screen name={AppRoutes.Advanced} component={AdvancedScreen} />
    </AppStack.Navigator>
  );
};

export default AppNavigator;
