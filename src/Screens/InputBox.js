import {StyleSheet, Text, View,TextInput} from 'react-native';
import React from 'react';

const InputBox = ({style,namee,phone,email,number}) => {
  
  return (
    <View style={{top:10}}>
      <TextInput
        style={[styles.input,style]}
        placeholder={
          namee ? namee 
          : phone ? phone 
          : email ? email 
          
          : "Enter text here"
        }
        placeholderTextColor={style=='black'?'black':"gray"}
      />   
    </View>
  );
};

export default InputBox;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'rgba(248, 248, 248, 1)',
    width: '90%',
    backgroundColor: 'rgba(234, 234, 234, 1)',
    padding: 10,
    borderRadius: 5,
    height:45
  },
});
