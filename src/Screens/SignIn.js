import {Alert, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Platform} from 'react-native';
import Textbox from './Textbox';
import InputBox from './InputBox';
import Button from './Button';
import OTPScreen from './OTPScreen';
import { useNavigation } from '@react-navigation/native';

const SignIn = ({navigation}) => {
  return (
    <SafeAreaView >
        <ScrollView showsHorizontalScrollIndicator={false}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          marginTop: 50,
        }}>
        {' '}
        <Text>
          {' '}
          <Image source={require('../assets/Images/Frame.png')} />
        </Text>
      </View>
      <View>
        <Text
          style={{
            fontWeight: 400,
            fontSize: 26,
            justifyContent: 'center',
            alignSelf: 'center',
            marginTop: 30,
          }}>
          Sign in
        </Text>
      </View>
      <View style={styles.texts}>
        <Textbox />
        <InputBox />
        {/* <Button onPress={() => navigation.navigate('OTPScreen')}  navigation={navigation} text='Continue' /> */}
        <Button onPress={() => navigation.navigate('Quiz')}  navigation={navigation} text='Continue' />

      </View>

      <View
        style={{
          marginTop: 50,
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <Image source={require('../assets/Images/Line26.png')} />{' '}
        <Text style={{marginTop: -10, color: 'gray'}}>or continue with</Text>{' '}
        <Image source={require('../assets/Images/Line26.png')} />{' '}
      </View>
      <TouchableOpacity
        style={{
          width: '85%',
          backgroundColor: 'rgba(152, 152, 152, 1)',
          height: 45,
          borderRadius: 10,
          marginTop: 50,
          marginLeft: 20,
          flexDirection:'row',
          justifyContent:'center',
          
        }}>
        <Image source={require('../assets/Images/new.png')} style={{marginTop:8}}/>
        {' '}
        <Text
          style={{
            color: 'white',
            justifyContent: 'center',
            alignContent: 'center',
            alignSelf: 'center',
            top: 12,
            marginBottom:23,
            marginLeft:15
          }}>
          Sign in with MovinSync
        </Text>{' '}
      </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
    
  );
};

export default SignIn;

const styles = StyleSheet.create({
  texts: {
    marginLeft: 20,
    marginTop: 30,
  },
});
