import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useDispatch, useSelector} from 'react-redux';
import {increment, decrement, selectCount} from '../redux/counterSlice';

export default () => {
  const dispatch = useDispatch();
  const count = useSelector(selectCount);

  return (
    <View style={styles.body}>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Current count: {count}</Text>
        <Pressable style={styles.button} onPress={() => dispatch(decrement())}>
          <Text>Decrement</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => dispatch(increment())}>
          <Text>Increment</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    padding: 24,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  button: {
    borderRadius: 12,
    padding: 6,
    margin: 6,
    backgroundColor: '#9e9ef8',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
