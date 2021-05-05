import 'react-native';
import React from 'react';
import CounterUsesRedux from '../src/components/CounterUsesRedux';
import {fireEvent, renderWithRedux} from '../src/testing/test-utils';
import {selectCount} from '../src/redux/counterSlice';

const mockStore = {
  counter: {
    value: 0,
  },
};

it('renders correctly', () => {
  const {getByText, store} = renderWithRedux(<CounterUsesRedux />, {
    initialState: mockStore,
  });

  const decrement = getByText(/decrement/i);
  const increment = getByText(/increment/i);
  const counterText = getByText(/Current count:/i);

  expect(counterText).toHaveProp('children', ['Current count: ', 0]);
  expect(selectCount(store.getState())).toEqual(0);

  fireEvent.press(increment);
  expect(counterText).toHaveProp('children', ['Current count: ', 1]);
  expect(selectCount(store.getState())).toEqual(1);

  fireEvent.press(decrement);
  expect(counterText).toHaveProp('children', ['Current count: ', 0]);
  expect(selectCount(store.getState())).toEqual(0);
});
