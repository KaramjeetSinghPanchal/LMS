import { StyleSheet, Text, View,Image } from 'react-native'
import React, { useEffect } from 'react'
import * as Animatable from 'react-native-animatable';



const Splashscreen = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('SignIn')
        }, 2000);
    }, [])
  return (
    <Animatable.View style={{justifyContent:'center',flex:1,alignItems:'center',alignSelf:'center',alignContent:'center'}} duration={2000} animation={'flipInY'}>
     <Image source={require('../assets/Images/splashscreen.png')}/>
    </Animatable.View>
  )
}

export default Splashscreen

const styles = StyleSheet.create({})