import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import React from 'react';
import {scoringusers} from '../Components/scoringusers';
import Search from '../Components/Search';
const Toprated = () => {
  return (
    <View>
      <View
        style={{
          marginLeft: 30,
          width: 47,
          height: 20,
          backgroundColor: '#FFFFFF',
          marginTop: 20,
        }}>
        <Text style={{fontSize: 16}}>Top 10</Text>
      </View>
      <FlatList
        data={scoringusers}
        renderItem={({item}) => (
          <TouchableOpacity
            style={{
              width: '90%',
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
              <Image
                source={require('../assets/Images/starmedal.png')}
                style={{left: 45, top: -55}}
              />
            </View>
            <View style={{top: 15, marginLeft: 30}}>
              <Text style={{fontSize: 16}}>{item.name}</Text>
              <View style={{flexDirection: 'row', marginTop: 10}}>
                <Image source={require('../assets/Images/userrating.png')} />{' '}
                <Text style={{marginLeft: 15}}>{item.rating}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />

      <Search
        onPress={() => navigation.navigate('Searchscreen')}
       calender='calender'

       style={{bottom:150}}
      />
    </View>
  );
};

export default Toprated;

const styles = StyleSheet.create({});
