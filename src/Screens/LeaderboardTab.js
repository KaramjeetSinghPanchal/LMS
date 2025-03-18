import {StyleSheet, Text, View, useWindowDimensions, Image} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const LeaderboardTab = () => {
  const {width, height} = useWindowDimensions();
  console.warn(width, height, 'width, height');
  return (
    <SafeAreaView>
      <View style={[styles.box, {marginTop: height > 950 ? -50 : 10}]}>
        <View
          style={{
            width: 56,
            height: 56,
            backgroundColor: 'green',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
          }}>
          <Text style={{fontWeight: 600, color: '#FFFFFF', fontSize: 24}}>
            #2
          </Text>
        </View>
        <View style={{width: 223}}>
          <Text>You are doing better than 90% others leaners!</Text>
        </View>
      </View>

      <View style={[styles.price, {justifyContent: 'space-evenly'}]}>
        <Image source={require('../assets/Images/Avatar.png')} />
        <Image source={require('../assets/Images/Avatar.png')} />
        <Image source={require('../assets/Images/Avatar.png')} />
      </View>
      <Image
        source={require('../assets/Images/Medal.png')}
        style={{
          justifyContent: 'center',
          alignSelf: 'center',
          position: 'absolute',
          top: 120,
        }}
      />

      <View style={[styles.price, {justifyContent: 'space-evenly'}]}>
        <Text
          style={{
            // color: 'white',
            justifyContent: 'space-between',
            left:15,
            top: 30,
          }}>
          Aman
        </Text>
        <Text
          style={{
            // color: 'white',
            justifyContent: 'center',
            alignSelf: 'center',
            alignContent: 'center',
            textAlign: 'center',
            top: 28,
          }}>
          Aman
        </Text>
        <Text
          style={{
            // color: 'white',
            justifyContent: 'center',
            alignSelf: 'center',
            alignContent: 'center',
            textAlign: 'center',
            top: 8,
          }}>
          Aman
        </Text>
      </View>
      <View
        style={{
          height: 34,
          width: 64,
          backgroundColor: '#FBBB00',
          borderRadius: 10,
          top: 50,
          left: 90,
        }}>
        <Text
          style={{
            color: 'white',
            justifyContent: 'center',
            alignSelf: 'center',
            alignContent: 'center',
            textAlign: 'center',
            top: 8,
          }}>
          420
        </Text>
      </View>
      <View style={[styles.price, {marginTop: 60}]}>
        <Image source={require('../assets/Images/two.png')} />
        <Image
          source={require('../assets/Images/one.png')}
          style={{bottom: 50}}
        />
        <Image source={require('../assets/Images/three.png')} />
      </View>
    </SafeAreaView>
  );
};

export default LeaderboardTab;

const styles = StyleSheet.create({
  box: {
    width: '100%',
    height: 88,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#F5F9FC',
  },
  price: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 50,
  },
});
