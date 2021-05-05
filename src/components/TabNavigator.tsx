import * as React from 'react';
import {Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

function HomeScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Main Tab First Screen!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings Tab First Screen!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MainStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="TabNavigator"
      component={HomeScreen}
      options={{headerTitle: 'MainTabHeader'}}
    />
  </Stack.Navigator>
);

const SettingsStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="TabNavigator"
      component={SettingsScreen}
      options={{headerTitle: 'SettingsTabHeader'}}
    />
  </Stack.Navigator>
);

export default function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="TabNavigator"
      tabBarOptions={{
        activeTintColor: 'green',
        inactiveTintColor: 'black',
      }}
    >
      <Tab.Screen
        name="TabNavigator"
        component={MainStack}
        options={{tabBarLabel: 'Main Tab Label'}}
      />
      <Tab.Screen
        name="TabTwo"
        component={SettingsStack}
        options={{tabBarLabel: 'Settings Tab Label'}}
      />
    </Tab.Navigator>
  );
}
