import counterReducer, {
  initialState,
  increment,
  decrement,
} from '../src/redux/counterSlice';

describe('CounterSlice reducer', () => {
  it('should return the initial state on first run', () => {
    // @ts-ignore
    expect(counterReducer(undefined, {})).toMatchSnapshot();
  });
  it('correctly increments counter value on action "increment"', () => {
    expect(counterReducer(initialState, increment())).toMatchSnapshot();
  });

  it('correctly decrements counter value on action "decrement"', () => {
    expect(counterReducer(initialState, decrement())).toMatchSnapshot();
  });
});
