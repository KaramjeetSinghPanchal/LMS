import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SignIn from './Screens/SignIn';
import OTPScreen from './Screens/OTPScreen';
import Courses from './Screens/Courses';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Tabnavigation from './Tabnavigation';
import Searchscreen from './Screens/Searchscreen';
import Coursedetails from './Screens/Coursedetails';
import Header from './Components/Header';
import ChapterWise from './Screens/ChapterWise';
import ChapterWiseVideo from './Screens/ChapterWiseVideo';
import Quiz from './Screens/Quiz';
import Quizresult from './Screens/Quizresult';
import Profile from './Screens/Profile';
const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="OTPScreen" component={OTPScreen} />
          <Stack.Screen
            name="Courses"
            component={Courses}
            options={{headerShown: false}}
          />
          <Stack.Screen name="Searchscreen" component={Searchscreen} />
          <Stack.Screen name="Header" component={Header} />
          <Stack.Screen
            name="Coursedetails"
            component={Coursedetails}
            options={{headerShown: false}}
          />
           <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="ChapterWise" component={ChapterWise} />
          <Stack.Screen name="ChapterWiseVideo" component={ChapterWiseVideo} />
          <Stack.Screen name="Quiz" component={Quiz} />
          <Stack.Screen name="Quizresult" component={Quizresult} />
          <Stack.Screen name="Tabs" component={Tabnavigation} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
