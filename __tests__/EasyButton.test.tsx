import 'react-native';
import React from 'react';
import EasyButton from '../src/components/EasyButton';
import {render} from '../src/testing/test-utils';
import {ReactTestInstance} from 'react-test-renderer';

it('renders with the light styles for the light theme', () => {
  const {getByText} = render(<EasyButton>Click me!</EasyButton>);
  const innerText = getByText(/click/i);
  const button = innerText.parent as ReactTestInstance;

  expect(button).toHaveStyle({backgroundColor: 'white'});
  expect(innerText).toHaveStyle({color: 'black'});
});

it('renders with the dark styles for the dark theme', () => {
  const {getByText} = render(<EasyButton>Click me!</EasyButton>, {
    theme: 'dark',
  });
  const innerText = getByText(/click/i);
  const button = innerText.parent as ReactTestInstance;

  expect(button).toHaveStyle({backgroundColor: 'black'});
  expect(innerText).toHaveStyle({color: 'white'});
});
