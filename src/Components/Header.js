import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Header = ({onPress, name}) => {
  return (
    <View style={styles.box}>
      <TouchableOpacity style={{top: 2}} onPress={onPress}>
        <Icon name="arrow-back" size={35} />
      </TouchableOpacity>

      <View>
        <Text style={{fontSize: 21, fontWeight: '400'}}>{name}</Text>
      </View>

      {name == 'Leaderboard' ? (
        <TouchableOpacity>
          <Image source={require('../assets/Images/user.png')} />
        </TouchableOpacity>
      ) : (
        ''
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  box: {
    flexDirection: 'row',
    borderColor: '#ECECEC',
    padding: 10,
    justifyContent: 'space-between',
  },
});
