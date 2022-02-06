import React from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Props {
  title: string;
  onPress: () => void;
//  position: 'br' | 'bl';
}

export const Fab = ( { title, onPress }:Props) => {
  return (
    <TouchableOpacity
    style={styles.fabLocationBR}
    onPress={ onPress }>
    <View style={styles.fab}>
      <Text style={styles.fabText}>+1</Text>
    </View>
  </TouchableOpacity>
)
};


const styles = StyleSheet.create({
  fabLocationBR: {
    position: 'absolute',
    bottom: 25,
    right: 25,
  },
  fabLocationBL: {
    position: 'absolute',
    bottom: 25,
    left: 25,
  },
  fab: {
    backgroundColor: '#5856D6',
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: 'center',
  },

  fabText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
  }

})