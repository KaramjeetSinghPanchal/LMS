import { Image, StyleSheet, Text, View, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import InputBox from './InputBox'
import Button from './Button'
import Courses from './Courses'
const OTPScreen = ({navigation}) => {
  return (
    <SafeAreaView>
    <View style={{justifyContent:'center',alignSelf:'center',marginTop:20}}>
     <Image source={require('../assets/Images/phonelink_lock.png')}/>
    </View>

    <View><Text style={{fontWeight:'400',fontSize:26,justifyContent:'center',alignSelf:'center',marginTop:20}}>Enter OTP</Text></View>
    
      <View><Text style={{fontSize:17,justifyContent:'center',alignSelf:'center',margin:20}}>Please enter the verification code we’ve sent you on +91 987654321  <TouchableOpacity style={{marginTop:20}}><Text style={{color:'blue',fontSize:17}}>Edit</Text></TouchableOpacity> </Text> </View>

      <InputBox style={{marginTop:80,marginLeft:20}}/>
      <View><Text style={{marginLeft:55,color:'gray',marginTop:10}}>Trying to Auto Capture</Text></View>
      <Button text='Verify' style={{marginLeft:20}} onPress={()=>navigation.navigate('Tabs')} navigation={navigation}/>
      <View style={{justifyContent:'center',flexDirection:'row'}}><Text style={{marginLeft:55,color:'gray',marginTop:10}}>Resend in</Text><Text style={{color:'black',marginLeft:5,marginTop:10}}>0:29</Text></View>
    </SafeAreaView>
  )
}

export default OTPScreen

const styles = StyleSheet.create({})
