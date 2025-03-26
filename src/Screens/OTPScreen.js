import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import InputBox from './InputBox';
import Button from './Button';
import Courses from './Courses';
import LoaderKit from 'react-native-loader-kit';
const OTPScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <View
        style={{justifyContent: 'center', alignSelf: 'center', marginTop: 20}}>
        <Image source={require('../assets/Images/phonelink_lock.png')} />
      </View>

      <View>
        <Text
          style={{
            fontWeight: '400',
            fontSize: 26,
            justifyContent: 'center',
            alignSelf: 'center',
            marginTop: 20,
          }}>
          Enter OTP
        </Text>
      </View>

      <View style={{padding: 20}}>
        <View
          style={{
            // flexDirection: 'row',
            // justifyContent: 'space-between',
            // alignItems: 'center',
          }}>
          <Text style={{fontSize: 17}}>
            Please enter the verification code we've sent you on +91 987654321 <Text style={{color: 'blue', fontSize: 17}} onPress={()=>Alert.alert('hii')}>Edit</Text>
          </Text>
         
        </View>
      </View>

      {/* <InputBox style={{marginTop:80,marginLeft:20}}/> */}
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <TextInput
          style={{
            height: 45,
            width: 59,
            borderWidth: 1,
            borderColor: '#EAEAEA',
          }}></TextInput>
        <TextInput
          style={{
            height: 45,
            width: 59,
            borderWidth: 1,
            borderColor: '#EAEAEA',
            marginLeft: 10,
          }}></TextInput>
        <TextInput
          style={{
            height: 45,
            width: 59,
            borderWidth: 1,
            borderColor: '#EAEAEA',
            marginLeft: 10,
          }}></TextInput>
        <TextInput
          style={{
            height: 45,
            width: 59,
            borderWidth: 1,
            borderColor: '#EAEAEA',
            marginLeft: 10,
          }}></TextInput>
        <TextInput
          style={{
            height: 45,
            width: 59,
            borderWidth: 1,
            borderColor: '#EAEAEA',
            marginLeft: 10,
          }}></TextInput>
      </View>

      <View style={{flexDirection: 'row'}}>
        <LoaderKit
          style={{width: 25, height: 25, left: 50}}
          name={'BallRotateChase'}
          color={'blue'}
        />
        <Text style={{marginLeft: 55, color: 'gray'}}>
          Trying to Auto Capture
        </Text>
      </View>
      <Button
        text="Verify"
        style={{marginLeft: 20}}
        onPress={() => navigation.navigate('Tabs')}
        navigation={navigation}
      />
      <View style={{justifyContent: 'center', flexDirection: 'row'}}>
        <Text style={{marginLeft: 55, color: 'gray', marginTop: 10}}>
          Resend in
        </Text>
        <Text style={{color: 'black', marginLeft: 5, marginTop: 10}}>0:29</Text>
      </View>
    </SafeAreaView>
  );
};

export default OTPScreen;

const styles = StyleSheet.create({});
