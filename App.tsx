import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import Navigation from './src/Navigation';
import SplashScreen from 'react-native-splash-screen';
const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return <Navigation />;
};

export default App;

const styles = StyleSheet.create({});
