import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {scoringusers} from '../Components/scoringusers';
const LeaderboardTab = () => {
  const {width, height} = useWindowDimensions();
  console.warn(width, height, 'width, height');

  const filteredUsers = scoringusers.filter(user => user.main !== 'yes');


  console.warn('jjjjtteeee', filteredUsers);
  const shouldHideList = scoringusers.some(item => item.main == 'yes');

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={[styles.box, {marginTop: height > 950 ? -5 : 10}]}>
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

        <View
          style={{
            justifyContent: 'center',
            flexDirection: 'row',
            marginTop: 35,
            width: '100%',
          }}>
          <View style={{marginTop: 35}}>
            <Image
              source={require('../assets/Images/Avatar.png')}
              style={{left: 20}}
            />
            <View style={[styles.margins, {left: 25}]}>
              <Text>{scoringusers[1].name}</Text>
            </View>
            <View
              style={{
                height: 34,
                width: 64,
                backgroundColor: '#FBBB00',
                borderRadius: 10,
                marginTop: 10,
                left: 15,
              }}>
              <Text
                style={{
                  color: 'white',
                  justifyContent: 'center',
                  alignSelf: 'center',
                  alignContent: 'center',
                  textAlign: 'center',
                  marginTop: 8,
                }}>
                420
              </Text>
            </View>
            <View style={styles.margins}>
              <Image source={require('../assets/Images/two.png')} />
            </View>
          </View>

          <View>
            <Image
              source={require('../assets/Images/Avatar.png')}
              style={{left: 20}}
            />
            <Image
              source={require('../assets/Images/Medal.png')}
              style={{position: 'absolute', top: -30, left: 25}}
            />
            <View style={[styles.margins, {left: 25}]}>
              <Text>{scoringusers[0].name}</Text>
            </View>
            <View
              style={{
                height: 34,
                width: 64,
                backgroundColor: '#FBBB00',
                borderRadius: 10,
                marginTop: 10,
                left: 15,
              }}>
              <Text
                style={{
                  color: 'white',
                  justifyContent: 'center',
                  alignSelf: 'center',
                  alignContent: 'center',
                  textAlign: 'center',
                  marginTop: 8,
                }}>
                420
              </Text>
            </View>
            <View style={styles.margins}>
              <Image source={require('../assets/Images/one.png')} />
            </View>
          </View>

          <View style={{marginTop: 35}}>
            <Image
              source={require('../assets/Images/Avatar.png')}
              style={{left: 20}}
            />
            <View style={[styles.margins, {left: 25}]}>
              <Text>{scoringusers[2].name}</Text>
            </View>
            <View
              style={{
                height: 34,
                width: 64,
                backgroundColor: '#FBBB00',
                borderRadius: 10,
                marginTop: 10,
                left: 15,
              }}>
              <Text
                style={{
                  color: 'white',
                  justifyContent: 'center',
                  alignSelf: 'center',
                  alignContent: 'center',
                  textAlign: 'center',
                  marginTop: 8,
                }}>
                420
              </Text>
            </View>
            <View style={styles.margins}>
              <Image source={require('../assets/Images/three.png')} />
            </View>
          </View>
        </View>

        {shouldHideList && (
          <FlatList
            data={filteredUsers}
            renderItem={({item}) => (
              <TouchableOpacity
                style={{
                  width: '90%',
                  // borderWidth: 1,
                  // justifyContent: 'space-evenly',
                  alignSelf: 'center',
                  height: 92,
                  borderRadius: 20,
                  marginTop: 10,
                  flexDirection: 'row',
                  backgroundColor: '#FFFFFF',
                }}>
                <View
                  style={{
                    height: 24,
                    width: 24,
                    backgroundColor: '#FFFFFF',
                    borderRadius: 10,
                    borderWidth: 0.1,
                    borderColor: 'gray',
                    marginTop: 20,
                    marginLeft: 50,
                  }}>
                  <Text
                    style={{
                      justifyContent: 'center',
                      alignSelf: 'center',
                      top: 3,
                      color: 'gray',
                    }}>
                    {item.no}
                  </Text>
                </View>
                <View style={{marginLeft: 30, marginTop: 5}}>
                  <Image source={item.image} />
                </View>
                <View style={{top: 15, marginLeft: 30}}>
                  <Text style={{fontSize: 16}}>{item.name}</Text>
                  <Text style={{fontSize: 14, color: 'gray'}}>390 Points</Text>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={item => item.no.toString()} // Add a keyExtractor
          />
        )}
      </ScrollView>
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
  margins: {
    marginTop: 10,
  },
});
