import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {SafeAreaView} from 'react-native-safe-area-context';
import InputBox from './InputBox';
import Navigation from '../Navigation';
import Search from '../Components/Search';
import Header from '../Components/Header';
const Searchscreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <View style={{justifyContent: 'space-between', flexDirection: 'row'}} >
        <TouchableOpacity style={{top:2}} onPress={()=>{navigation.goBack()}}>
          <Icon name="arrow-back" size={35} />
        </TouchableOpacity>
      
          <TextInput style={{width: '70%',  height: 45,backgroundColor:'rgba(248, 248, 248, 1)',borderRadius:10}} placeholder='Search Here'/>
        
        <TouchableOpacity style={{height: 38, width: 38,top:2,marginRight:8,backgroundColor:'rgba(234, 234, 234, 1)'}} >
          <Icon name='mic' size={28} style={{left:5,top:3}}/>
        </TouchableOpacity>
      </View>
     
   
      <View><Text style={styles.textform}>People are looking for</Text></View>
     
      <Search style={{ height:58,
        width:58,
        borderRadius:300,
        backgroundColor:'rgba(255, 255, 255, 1)',
        position:'absolute',
          top:700,
        right:50}}

        calender='calender'
         
         />
    
    </SafeAreaView>
  );
};

export default Searchscreen;

const styles = StyleSheet.create({
    textform:{
        marginLeft:50,
        color:'gray'
    }
});
