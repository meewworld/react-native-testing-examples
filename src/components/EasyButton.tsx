import React from 'react';
import {StyleSheet, Text, Pressable} from 'react-native';
import {useTheme} from '../utils/theme';

export default (props: any) => {
  // @ts-ignore
  const [theme, setTheme] = useTheme();
  const {backgroundColor, color} = styles[theme];
  return (
    <Pressable
      style={{backgroundColor, padding: 8}}
      {...props}
      onPress={() => {
        if (theme === 'dark') {
          // @ts-ignore
          setTheme('light');
        } else {
          // @ts-ignore
          setTheme('dark');
        }
      }}
    >
      <Text style={{color}}>{props.children || 'Click me!'}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  dark: {
    backgroundColor: 'black',
    color: 'white',
  },
  light: {
    color: 'black',
    backgroundColor: 'white',
  },
});
