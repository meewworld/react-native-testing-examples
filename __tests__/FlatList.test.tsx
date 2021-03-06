import 'react-native';
import React from 'react';
import {
  fireEvent,
  render,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react-native';
import SectionList from '../src/components/FlatList';

const eventData = {
  nativeEvent: {
    contentOffset: {
      x: 0,
      y: 425,
    },
    contentSize: {
      // Dimensions of the scrollable content
      height: 885,
      width: 328,
    },
    layoutMeasurement: {
      // Dimensions of the device
      height: 469,
      width: 328,
    },
  },
};

it('scrolls to top and refreshes all items', async () => {
  const {getByText, getByTestId, queryByText} = render(<SectionList />);

  getByText(/pizza/i);
  expect(queryByText(/the impossible burger/i)).toBeNull();

  //intially not shown
  fireEvent.scroll(getByTestId('flat-list'), eventData);
  await waitForElementToBeRemoved(() => getByText(/loading more dishes/i));
  await waitFor(() => expect(getByText(/the impossible burger/i)));
  //2 awaits results in a warning at the moment see https://github.com/callstack/react-native-testing-library/issues/379
});
