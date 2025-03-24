import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Profile from '../Screens/Profile';

const Header = ({ onPress, name, navigation }) => {
  return (
    <View style={styles.box}>
      <TouchableOpacity style={{ top: 2 }} onPress={() => onPress.goBack()}>
        <Icon name="arrow-back" size={35} />
      </TouchableOpacity>

      <View>
        <Text style={{ fontSize: 21, fontWeight: '400' }}>{name}</Text>
      </View>

      {name == 'Leaderboard' || name == 'Rewards' ? (
        <TouchableOpacity  onPress={() => onPress.navigate('Profile')}>
          <Image source={require('../assets/Images/user.png')} />
        </TouchableOpacity>
      ) : (
        ''
      )}
      {name &&  <View style={{flexDirection:'row'}}><Image source={require('../assets/Images/clue1.png')} style={{right:20}}/><Image source={require('../assets/Images/clue2.png') }/></View> }
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
    alignItems: 'center', // Ensure items are vertically centered
  },
});