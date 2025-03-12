import {
  FlatList,
  Image,
  ImageBase,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../Components/Header';
import {chaptersData, chapterslisting} from '../Components/Chapters';
import Button from './Button';
const Coursedetails = ({navigation}) => {
  const data = chaptersData;
  
  const getdata = chapterslisting;

  return (
    <SafeAreaView style={{padding: 10}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header
          onPress={() => {
            navigation.goBack();
          }}
          name={'Course Details'}
        />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            top: 20,
          }}>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{fontSize: 20, fontWeight: 400}}>POSH</Text>{' '}
            <Image source={require('../assets/Images/getstar.png')} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 76,
              height: 29,
              backgroundColor: '#F5F9FC',
              borderColor: '#E1E6F0',
              alignContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
              top: 5,
            }}>
            <Text>15 Videos</Text>
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 50}}>
          <Image
            source={require('../assets/Images/Frame5.png')}
            style={{width: '100%'}}
          />
        </View>
        <View>
          <Image
            source={require('../assets/Images/car.png')}
            style={{position: 'absolute', bottom: 75, left: 60}}
          />

          <View
            style={{
              width: '100%',
              borderWidth: 1,
              borderColor: '#E1E1E1',
              marginTop: 20,
            }}></View>
          <Image
            source={require('../assets/Images/Polygon.png')}
            style={{left: 95}}
          />
          <View style={{position: 'absolute', bottom: 75, left: 60}}></View>

          <View style={{marginTop: 15}}>
            <FlatList
              data={data}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={item => item.key}
              renderItem={({item}) => (
                <TouchableOpacity
                  style={{alignItems: 'center', marginHorizontal: 10}}>
                  <Image source={item.image} style={styles.image} />
                  {item.videoInfo && (
                    <Text style={styles.videoText}>{item?.videoInfo}</Text>
                  )}
                </TouchableOpacity>
              )}
            />
          </View>
        </View>

        <View>
          <Text
            style={{fontSize: 20, fontWeight: 400, color: '#555555', top: 15}}>
            Chapters
          </Text>
        </View>

        {getdata.map(itm => {
          return (
            <TouchableOpacity
              style={{
                backgroundColor: '#EBEBEB',
                height: 110,
                width: '100%',
                // borderWidth: 1,
                // justifyContent: 'space-evenly',
                alignSelf: 'center',
                top: 40,
                flexDirection: 'row',
                marginTop: 15,
              }}
              onPress={() => {
                navigation.navigate('ChapterWise', {
                  chapter: itm.mss1,
                  coursename: itm.mss2,
                  des: itm.description,
                });
              }}>
              <View
                style={{
                  width: 100,
                  height: 93,
                  borderRadius: 16,
                  marginLeft: 10,
                  marginTop: 0,
                }}>
                <Image
                  source={itm.image}
                  style={{width: '100%', height: '100%', borderRadius: 16}}
                />
                {itm.mss1 !== 'Chapter1' && (
                  <Image
                    source={require('../assets/Images/lock.png')}
                    style={{position: 'absolute', top: 25, left: 28}}
                  />
                )}
              </View>
              <View style={{marginLeft: 50, marginTop: 10}}>
                <Text style={{fontSize: 14}}>{itm.mss1}</Text>
                <Text style={{fontWeight: 400, fontSize: 17}}>{itm.mss2}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
      <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Quiz',{chapter:data})} // Correct usage
      >
        <Text style={styles.buttonText}>Take a quiz</Text>
      </TouchableOpacity>
    </View>
    </SafeAreaView>
  );
};

export default Coursedetails;

const styles = StyleSheet.create({
  play: {marginLeft: 23, alignContent: 'center', alignSelf: 'center'},
  image: {},
  videoText: {
    marginTop: 5,
    fontSize: 14,
    color: '#333',
  },
  button:{
    width:'90%',
    backgroundColor:'rgba(11, 87, 207, 1)',
    height:45,
    // borderWidth:1,
    borderRadius:10,
    bottom:70,
    left:25,
    justifyContent:'center',
    alignContent:'center',
    alignSelf:'center',
    marginRight:50
},
buttonText:{
 color:'white',
 justifyContent:'center',
 alignSelf:'center'
}
});
