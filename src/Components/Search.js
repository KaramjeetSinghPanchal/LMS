import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {rS, vR, rMS} from './Responsive';

const Search = ({onPress, style, calender,width}) => {
  return (
    <TouchableOpacity style={[styles.box, style, calender,style={bottom:width>390?rMS(120): rMS(200)}]} onPress={onPress}>
      {calender ? (
        <Image
          source={require('../assets/Images/filter-sharp.png')}
          style={{top: 15, left: 18}}
        />
      ) : (
        <Icon size={35} name="search" style={{left: 10, top:  10}} />
      )}
    </TouchableOpacity>
  );
};

export default Search;

const styles = StyleSheet.create({
  box: {
    height: 58,
    width: 58,
    borderRadius: 100,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    position: 'absolute',
    right: rMS(40),
    // borderWidth:1
  },
});
