import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { Fab } from '../components/Fab';

export const CounterScreen = () => {
  const [count, setCount] = useState(10);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter: {count}</Text>

      <Fab 
        title= "+1"
        onPress={() => setCount(count + 1)}
        position ='br'
      />
      <Fab 
        title= "-1"
        onPress={() => setCount(count - 1)}
        position='bl'
      />



    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
    top: -15,
  },
});
