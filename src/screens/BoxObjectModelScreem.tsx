import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const BoxObjectModelScreem = () => {
  return (
    <View style={ styles.container }>
      <Text style={ styles.title }>BoxObjectModel</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'red',
    },
    title: {
      paddingHorizontal: 100,
      paddingVertical: 20,
      marginHorizontal: 20,
      fontSize: 20,
      //width: 250,
      borderWidth: 10 
    }
})