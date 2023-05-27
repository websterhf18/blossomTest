// @ts-ignore

jest.mock('@react-navigation/native', () => ({
  useRoute: () => ({
    params: {},
  }),
  NavigationContainer: () => null,
  createNavigationContainerRef: () => {},
  useIsFocused: () => true,
  useNavigationState: () => ({}),
  useNavigation: () => ({
    navigate: jest.fn(),
    popToTop: jest.fn(),
    getState: jest.fn(() => ({routes: [{}], index: 0})),
  }),
  useFocusEffect: (cb?: any) => !!cb,
  useScrollToTop: () => undefined,
  StackActions: {
    pop: jest.fn(),
  },
}));

jest.mock('@react-navigation/stack', () => ({
  createStackNavigator: () => null,
  TransitionPresets: {},
}));

jest.mock('@react-navigation/bottom-tabs', () => ({
  createBottomTabNavigator: () => null,
}));
