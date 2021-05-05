import React from 'react';
import {fireEvent, render, waitFor} from '@testing-library/react-native';
import App from '../src/components/App';
//mocking async storage module
const mockedSetItem = jest.fn();

jest.mock('@react-native-community/async-storage', () => ({
  setItem: mockedSetItem,
}));

it('renders/navigates throughout app screens', async () => {
  const {getByText} = render(<App />);
  const homeText = getByText(/home/i);
  expect(homeText).toBeDefined();
  fireEvent.press(getByText('Counter'));

  await waitFor(() => {
    const counterText = getByText(/Current count:/i);
    expect(counterText).toHaveProp('children', ['Current count: ', 0]);
  });
});
