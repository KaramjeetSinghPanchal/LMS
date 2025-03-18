import {StyleSheet, Text, View, useWindowDimensions} from 'react-native';
import React from 'react';
import Header from '../Components/Header';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import LeaderboardTab from './LeaderboardTab';
import Toprated from './Toprated';

const Tab = createMaterialTopTabNavigator();

const Leaderboard = () => {
  const {width, height} = useWindowDimensions();
  console.warn(width, height, 'width, height');
  return (
    <View style={{flex: 1}}>
      <Header name={'Leaderboard'} />
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name="Leaderboard" component={LeaderboardTab} />
        <Tab.Screen name="Top Rated" component={Toprated} />
      </Tab.Navigator>
    </View>
  );
};

export default Leaderboard;

const styles = StyleSheet.create({});
