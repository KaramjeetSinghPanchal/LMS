import { StyleSheet, TextInput, View,ToastAndroid } from 'react-native';
import React from 'react';

const InputBox = ({ style, placeholder, onChangeText, value }) => {
  return (
    <View style={{ top: 10 }}>
      <TextInput
        style={[styles.input, style]}
        placeholder={placeholder || "Enter text here"}
        placeholderTextColor={style === 'black' ? 'black' : "gray"}
        onChangeText={onChangeText}
        value={value}
        keyboardType="numeric" 
      />
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'rgba(248, 248, 248, 1)',
    width: '90%',
    backgroundColor: 'rgba(234, 234, 234, 1)',
    padding: 10,
    borderRadius: 5,
    height: 45
  },
});

export default InputBox;