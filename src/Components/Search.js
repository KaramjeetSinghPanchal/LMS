import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';

const Search = ({onPress,style,calender}) => {
  return (
    <TouchableOpacity style={[styles.box,style,calender]} onPress={onPress}>
    {calender? <Image source={require('../assets/Images/filter-sharp.png')} style={{top:15,left:18}}/>:<Icon size={35} name='search' style={{left:10,top:10}} />}
    </TouchableOpacity>
  )
}

export default Search

const styles = StyleSheet.create({
    box:{
        height:58,
        width:58,
        borderRadius:100,
        backgroundColor:'rgba(255, 255, 255, 1)',
        position:'absolute',
        bottom:200,
        right:50,
        // borderWidth:1
    }
})