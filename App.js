import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabNav from './App/navigation/BottomTabNav';

function App() {
  return (
    <NavigationContainer>
      <BottomTabNav />
    </NavigationContainer>
  );
}

export default App;
