import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';
import React from 'react';
import {amazon} from '../Components/Amazoncart';
const Achivments = () => {
  return (
    <ScrollView>
      <FlatList
        data={amazon}
        renderItem={({item}) => (
          <View
            style={{
              marginTop: 10,
              width: '95%',
              marginLeft: 10,
              height: 156,
              backgroundColor: '#EBEBEB',
            }}>
            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                borderRadius: 10,
                justifyContent: 'center',
                backgroundColor: '#EBEBEB',
              }}>
              <Image source={require('../assets/Images/amazon.png')} />
              <View style={{marginLeft: 20, height: 80}}>
                <Text style={{fontSize: 16}}>{item.mss1}</Text>{' '}
                <Text style={{marginTop: 15, fontSize: 14, color: 'gray'}}>
                  {item.mss2}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 15,
                  }}>
                  <Text style={{color: 'grey'}}>{item.mss3}</Text>
                  <Text
                    style={{
                      color: 'green',
                      fontSize: 19,
                      fontWeight: 'bold',
                      marginLeft: 50,
                    }}>
                    {item.mss4}
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                justifyContent: 'center',
                flexDirection: 'row',
                width: '100%',
                marginLeft: 30,
                marginTop: 50,
              }}>
              <Text>{item.mss5}</Text>{' '}
              <Text style={{marginLeft: 80, marginRight: 100, color: 'blue'}}>
                {item.mss6}
              </Text>
            </View>
            <View>
              <Text></Text>
            </View>
          </View>
        )}
        //  keyExtractor={item => item.no.toString()} // Add a keyExtractor
      />
    </ScrollView>
  );
};

export default Achivments;

const styles = StyleSheet.create({});
