import 'react-native';
import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import Counter from '../src/components/Counter';

it('renders correctly', () => {
  const {getByText} = render(<Counter />);

  const decrement = getByText(/decrement/i);
  const increment = getByText(/increment/i);
  const counterText = getByText(/Current count:/i);

  expect(counterText).toHaveProp('children', ['Current count: ', 0]);
  fireEvent.press(increment);
  expect(counterText).toHaveProp('children', ['Current count: ', 1]);
  fireEvent.press(decrement);
  expect(counterText).toHaveProp('children', ['Current count: ', 0]);
});
