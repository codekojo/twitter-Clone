import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import Feed from './App/screens/Feed';

function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Feed />
    </SafeAreaView>
  );
}

export default App;
