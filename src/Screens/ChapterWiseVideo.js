import React, {useState} from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../Components/Header';
import {useRoute} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Button from './Button';
import Quiz from './Quiz';

const ChapterWiseVideo = ({navigation}) => {
  const route = useRoute();
  const [buttondata, setbuttondata] = useState('Watch next video');
  const {chapterwisesendData, currentIndex, mssg, des} = route.params;

  const [currentVideoIndex, setCurrentVideoIndex] = useState(currentIndex);
  const handleNextVideo = () => {
    if (currentVideoIndex < chapterwisesendData.length - 1) {
      setCurrentVideoIndex(currentVideoIndex + 1);
    } else {
      setbuttondata('Next Chapter');
      navigation.navigate('Coursedetails',{chapterdata:chapterwisesendData});
    }
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <Header
          name={'Chapter 1'}
          onPress={() => {
            navigation.goBack();
          }}
        />

        <View>
          <Image
            source={chapterwisesendData[currentVideoIndex].image} // Use current video index
            style={{
              height: Platform.select({ios: 560, android: 460}),
              borderRadius: 20,
              justifyContent: 'center',
              alignSelf: 'center',
              width: Platform.select({ios: '100%', android: '90%'}),
              padding: Platform.select({ios: 30, android: 10}),
            }}
          />
          <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
            <Image
              source={require('../assets/Images/playbutton.png')}
              style={{
                position: 'absolute',
                bottom: Platform.select({ios: 60, android: 35}),
                left: Platform.select({ios: 70, android: 40}),
              }}
            />
            <Text
              style={{
                position: 'absolute',
                bottom: Platform.select({ios: 60, android: 35}),
                left: Platform.select({ios: 300, android: 250}),
                color: 'white',
              }}>
              4:30 / 5:00
            </Text>
          </View>
          <Image
            source={require('../assets/Images/Videobar.png')}
            style={{
              position: 'absolute',
              bottom: Platform.select({ios: 40, android: 10}),
              left: Platform.select({ios: 70, android: 40}),
            }}
          />
        </View>
        <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
          <Text
            style={{
              justifyContent: 'center',
              fontWeight: '400',
              fontSize: 17,
              marginLeft: 60,
              marginTop: 15,
            }}>
            {chapterwisesendData[currentVideoIndex].mss1}{' '}
            {/* Use current video data */}
          </Text>
          <TouchableOpacity>
            <Icon
              name="favorite"
              color={'red'}
              size={30}
              style={{marginTop: 5, right: 60}}
            />
          </TouchableOpacity>
        </View>
        <View>
          <Text
            style={{
              justifyContent: 'center',
              fontWeight: '400',
              fontSize: 14,
              marginLeft: 60,
              marginTop: 15,
            }}>
            {chapterwisesendData[currentVideoIndex].description}{' '}
            {/* Use current video data */}
          </Text>
        </View>
      </ScrollView>
      <Button
        text={buttondata}
        style={{
          color: '#FFFFFF',
          fontSize: 16,
          fontWeight: '400',
          marginLeft: 20,
          bottom: 120,
          top: 50,
        }}
        onPress={handleNextVideo} // Call handleNextVideo on button press
      />
    </SafeAreaView>
  );
};

export default ChapterWiseVideo;

const styles = StyleSheet.create({});
