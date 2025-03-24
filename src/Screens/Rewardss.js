import {StyleSheet, Text, View, useWindowDimensions} from 'react-native';
import React from 'react';
import Header from '../Components/Header';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Achivments from './Achivments';
import RedeemPoints from './RedeemPoints';
import Navigation from '../Navigation';
const Rewardss = ({navigation}) => {
  const Tab = createMaterialTopTabNavigator();

  const {width, height} = useWindowDimensions();
  console.warn(width, height, 'width, height');
  return (  
    <View style={{flex: 1}}>
      <Header
        name={'Rewards'}
        onPress={navigation}
      
      />
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name="Achivments" component={Achivments} />
        <Tab.Screen name="Redeem Points" component={RedeemPoints} />
      </Tab.Navigator>
    </View>
  );
};

export default Rewardss;

const styles = StyleSheet.create({});
