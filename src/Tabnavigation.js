import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Leaderboard from './Screens/Leaderboard';
import Rewardss from './Screens/Rewardss';
import { Image } from 'react-native';
import Courses from './Screens/Courses';

const Tab = createBottomTabNavigator();

const Tabnavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconSource;
          if (route.name === 'Courses') {
            iconSource = require('./assets/Images/book.png');
          } else if (route.name === 'Leaderboard') {
            iconSource = require('./assets/Images/chart.png');
          } else if (route.name === 'Rewards') {
            iconSource = require('./assets/Images/gift.png');
          }
          return (
            <Image 
              source={iconSource} 
              style={{ 
                width: 24, 
                height: 24,
                tintColor: focused ? '#0B57CF' : 'gray'
              }} 
            />
          );
        },
        tabBarActiveTintColor: '#0B57CF',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
        tabBarStyle: {
          paddingBottom: 5,
          height: 60,
        },
      })}
    >
      <Tab.Screen 
        name="Courses" 
        component={Courses} 
        options={{ title: 'Courses' }}
      />
      <Tab.Screen 
        name="Leaderboard" 
        component={Leaderboard} 
        options={{ title: 'Leaderboard' }}
      />
      <Tab.Screen 
        name="Rewards" 
        component={Rewardss} 
        options={{ title: 'Rewards' }}
      />
    </Tab.Navigator>
  );
};

export default Tabnavigation;