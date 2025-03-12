import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Header = ({onPress,name}) => {
  return (
    <View style={styles.box}>
      <TouchableOpacity style={{top: 2}} onPress={onPress}>
        <Icon name="arrow-back" size={35} />
      </TouchableOpacity>

      <View
        style={{
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
          marginLeft: '30%',
        }}>
        <Text style={{fontSize: 21, fontWeight: '400'}}>{name}</Text>
      </View>

      
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  box: {
    flexDirection: 'row',
    borderColor: '#ECECEC',
    borderWidth: 1,
    padding: 10, // Add padding for better spacing
  },
});
