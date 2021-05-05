import React, {ComponentType} from 'react';
import {render as rtlRender} from '@testing-library/react-native';
import {ThemeProvider} from '../utils/theme';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import {rootReducer} from '../redux/store';

function render(ui: any, {theme = 'light', ...options} = {}) {
  // @ts-ignore
  const Wrapper = ({children}): ComponentType => (
    <ThemeProvider initialTheme={theme}>{children}</ThemeProvider>
  );
  // @ts-ignore
  return rtlRender(ui, {wrapper: Wrapper, ...options});
}

export * from '@testing-library/react-native';
// override React Testing Library's render with our own
export {render};

const Stack = createStackNavigator();

export const renderWithNavigation = ({
  screens = {},
  navigatorConfig = {},
} = {}) =>
  render(
    <NavigationContainer>
      <Stack.Navigator {...navigatorConfig}>
        {Object.keys(screens).map(name => (
          // @ts-ignore
          <Stack.Screen key={name} name={name} component={screens[name]} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>,
  );

export const renderWithRedux = (
  ui: any,
  {
    // @ts-ignore
    initialState,
    store = configureStore({
      reducer: rootReducer,
      // @ts-ignore
      middleWare: [],
      devTools: false,
      preloadedState: initialState, // undefined initialState will result in the store using default initialState values
    }),
    ...renderOptions
  } = {},
) => {
  // @ts-ignore
  const Wrapper = ({children}): ComponentType => (
    <Provider store={store}>{children}</Provider>
  );

  // @ts-ignore
  const queries = rtlRender(ui, {wrapper: Wrapper, ...renderOptions});
  return {
    ...queries,
    store,
  };
};
