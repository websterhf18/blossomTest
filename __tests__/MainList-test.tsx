/**
 * @format
 */

import 'react-native';
import React from 'react';
import MainListScreen from '@src/screens/main-list.screen';

// Note: test renderer must be required after react-native.
import {render, screen} from '@testing-library/react-native';
import '@testing-library/jest-native/extend-expect';

test('renders list correctly', () => {
  render(<MainListScreen />);
  //renderer.create(<App />);
});
/**it('renders loading correctly', () => {
  //renderer.create(<App />);
});
it('renders card data correctly', () => {
  //renderer.create(<App />);
});
it('mark as favorite correctly', () => {
  //renderer.create(<App />);
});
it('search from list correctly', () => {
  //renderer.create(<App />);
});**/
