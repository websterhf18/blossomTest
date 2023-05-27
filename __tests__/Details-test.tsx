/**
 * @format
 */

import 'react-native';
import React from 'react';
import DetailsScreen from '@src/screens/details.screen';

// Note: test renderer must be required after react-native.
import {render, screen} from '@testing-library/react-native';
import '@testing-library/jest-native/extend-expect';

test('renders data correctly', async () => {
  const newProps = {
    route: {
      params: {
        image: '',
        favorite: '',
        name: 'Testing Screen',
        species: '',
        status: '',
        location: '',
      },
    },
    navigation: '',
  };
  render(<DetailsScreen {...newProps} />);
  const usernameOutput = await screen.findByTestId('detailName');
  expect(usernameOutput).toHaveTextContent('Testing Screen');
});
