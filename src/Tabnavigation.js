import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, Text, View} from 'react-native';
import Leaderboard from './Screens/Leaderboard';
import Courses from './Screens/Courses';
import Rewardss from './Screens/Rewardss';
const Tab = createBottomTabNavigator();

const Tabnavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'black', // Active tab color
        tabBarInactiveTintColor: 'gray', // Inactive tab color
        
      }}>
      <Tab.Screen
        name="Courses" 
        component={Courses}
        
        options={{
          tabBarIcon: ({color, size}) => (
            <Image source={require('../src/assets/Images/book.png')} />
          ),
        }}
        
      />

      <Tab.Screen
        name="Leaderboard"
        component={Leaderboard}
        options={{
        
          tabBarIcon: ({color, size}) => (
            <Image source={require('../src/assets/Images/chart.png')} />
          ),
        }}
      />
      <Tab.Screen
        name="Rewardss"
        component={Rewardss}
        options={{
          tabBarIcon: ({color, size}) => (
            <Image source={require('../src/assets/Images/gift.png')} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabnavigation;
