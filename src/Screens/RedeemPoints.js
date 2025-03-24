import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {rewards} from './Rewardspoints';

const RedeemPoints = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
        }}>
        <Text style={{fontSize: 16}}>All Coupons</Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={require('../assets/Images/coins.png')}
            style={styles.coinImage}
          />
          <Text style={{marginLeft: 10, fontSize: 12}}>420 Points</Text>
        </View>
      </View>

      <FlatList
        data={rewards}
        // keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => (
          <View style={styles.card}>
            <View style={{justifyContent: 'center', marginLeft: 10}}>
              <Image source={item.image} style={styles.image} />
            </View>
            <View style={styles.leftSection}>
              <Text style={styles.title}>{item.mss1}</Text>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.code}>{item.mss2}</Text>
                <Text style={styles.points}>{item.mss5}</Text>
              </View>
              <Text style={styles.expire}>
                {item.mss3} <Text style={{color: 'red'}}>{item.mss4}</Text>
              </Text>
            </View>
            <View style={styles.rightSection}>
              <Text style={styles.discountText}>50% Off</Text>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  card: {
    marginTop: 10,
    marginHorizontal: 20,
    height: 89,
    backgroundColor: '#fff',
    borderRadius: 20,
    flexDirection: 'row',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  leftSection: {
    flex: 1,
    padding: 15,
    justifyContent: 'center',
  },
  rightSection: {
    width: 50, // Increased width to accommodate rotated text
    backgroundColor: '#0B57CF',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 5,
  },
  code: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  points: {
    fontSize: 14,
    color: '#555',
  },
  expire: {
    fontSize: 12,
    color: '#888',
  },
  discountText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
    transform: [{rotate: '-90deg'}], // Rotate text vertically
    textAlign: 'center',
  },
  image: {
    width: 40,
    height: 40,
  },
  coinImage: {
    width: 20,
    height: 20,
  },
});

export default RedeemPoints;
