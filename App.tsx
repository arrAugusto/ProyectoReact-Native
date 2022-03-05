import React from 'react';
import {SafeAreaView} from 'react-native';
import {DimensionesScreen} from './src/screens/DimensionesScreen';
import { FlexScreen } from './src/screens/FlexScreen';
import { PositionScreen } from './src/screens/PositionScreen';

DimensionesScreen;
const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/*/<CounterScreen />*/}
      {/*<BoxObjectModelScreem />*/}
      {/*      <DimensionesScreen />*/}
      {/*<PositionScreen />*/}
      <FlexScreen />
    </SafeAreaView>
  );
};

export default App;
