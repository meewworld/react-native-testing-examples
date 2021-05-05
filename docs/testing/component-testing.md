# Testing A Component
When testing a component the first thing is to create a **[snapshot](https://jestjs.io/docs/en/snapshot-testing)** of the component to detect unexpected changes in UI (output of a component)

The output is stored as a string in a snapfile and if changes are made in the future that changes the output it will result in a failed snapshot test which needs to be studied carefully to determine if the change in output UI is intended.

This falls under the **rendering** category of component testing.

Furthermore the **interaction** with elements also needs to be tested. This is done by querying UI elements and firing events and then asserting on the expected behaviour.

Below is a simple snippet with examples of both:
```
import { render, fireEvent } from '@testing-library/react';
import Button from 'src/components/Button';
import { add } from 'src/helpers';

const props = {
  text: 'test',
  onPress: jest.fn(),
};

const comp = (data = props) => <Button {...data} />;

describe('Button Component', () => {
  // Example of Snapshot testing (rendering test)
  it('renders correctly', async () => {
    const { toJSON } = render(comp());
    expect(toJSON()).toMatchSnapshot();
  });

  // Component rendering test
  test('shows button text correctly', () => {
    const { getByText } = render(comp());
    const text = getByText(props.text);
    expect(text).toBeDefined();
  });

  // Component interaction test
  test('onPress is called correctly on press event', () => {
    const { getByText } = render(comp());
    fireEvent.press(getByText(props.text));
    expect(props.onPress).toHaveBeenCalledTimes(1);
  });
});
```

## Testing a redux connected component
To test a redux connected component the component must be rendered with the store. The renderWithRedux function in [test-utils.js](../../src/testing/test-utils.tsx) can be used for this. It takes 2 arguments.

- The component to render
- An object with redux configurations. Usually this is used for setting the initialState to pass to the store (this is optional). If this is undefined the default initialState values will be used. When defining the initialState remember that it must follow the structure of the actual store object. This can be found by looking at the [rootReducer](../../src/redux/store.ts) and if using [redux toolkit](https://redux-toolkit.js.org/) (recommended)
also in the **slices** which in this project is located in **src/redux/counterSlice.ts**

All the functions from **testing-library/react-native** are re-exported in **test-utils** so they can be imported directly from it.

The example below shows how to test a redux connected component with a custom store.

```
import React from 'react';
import { render } from '../../src/test-utils';
import { ConnectedComp } from '../../src/ConnectedComp';

const props = {};

const store = {
  auth: {
    loading: false,
    credentials: {
      email: 'some@mail.com',
      password: 'secretPassword',
    },
  },
};

const comp = (data = props) => <ConnectedComp {...data} />;

describe('ConnectedComp Component Tests', () => {
  it('renders correctly', () => {
    const { toJSON } = render(comp(), { initialState: store });
    expect(toJSON()).toMatchSnapshot();
  });
});
```
