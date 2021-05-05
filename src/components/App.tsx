import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {ThemeProvider} from '../utils/theme';
import * as screens from '.';
import {Provider} from 'react-redux';
import {store} from '../redux/store';

const Stack = createStackNavigator();

export const routes: Record<string, string> = {
  HOME: 'Home',
  COUNTER: 'Counter',
  COUNTER_REDUX: 'Counter Uses Redux',
  LOGIN: 'Login',
  EASYBUTTON: 'EasyButton',
  VIDEO: 'Video',
  MODAL: 'Modal',
  FLATLIST: 'FlatList',
  LIST_WITH_FETCH: 'ListWithFetch',
  TAB_NAVIGATOR: 'TabNavigator',
};
export default () => {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider initialTheme={'dark'}>
          <NavigationContainer>
            <Stack.Navigator initialRouteName={routes.HOME}>
              <Stack.Screen name={routes.HOME} component={screens.Home} />
              <Stack.Screen
                name={routes.LOGIN}
                component={screens.LoginSubmission}
              />
              <Stack.Screen
                name={routes.EASYBUTTON}
                component={screens.EasyButton}
              />
              <Stack.Screen name={routes.COUNTER} component={screens.Counter} />
              <Stack.Screen
                name={routes.COUNTER_REDUX}
                component={screens.CounterUsesRedux}
              />
              <Stack.Screen name={routes.VIDEO} component={screens.Video} />
              <Stack.Screen name={routes.MODAL} component={screens.Modal} />
              <Stack.Screen
                name={routes.FLATLIST}
                component={screens.FlatList}
              />
              <Stack.Screen
                name={routes.LIST_WITH_FETCH}
                component={screens.ListWithFetch}
              />
              <Stack.Screen
                name={routes.TAB_NAVIGATOR}
                component={screens.TabNavigator}
                options={{headerShown: false}}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </ThemeProvider>
      </Provider>
    </>
  );
};
