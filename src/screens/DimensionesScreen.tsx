import React from 'react';
import {Dimensions, StyleSheet, Text, useWindowDimensions, View} from 'react-native';

//const {height, width} = Dimensions.get('window');

export const DimensionesScreen = () => {
    const {width, height} = useWindowDimensions();
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.cajaMorada}>DimensionesScreen</Text>
        <Text style={styles.cajaNaranja}>DimensionesScreen</Text>
      </View>
      <Text>W: {width}, H: {height}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 600,
    backgroundColor: 'red',
  },
  cajaMorada: {
    backgroundColor: '#5856D6',
    width: '50%',
    height: 50,
  },
  cajaNaranja: {
    backgroundColor: '#F0A23B',
    width: 50,
  },
});
