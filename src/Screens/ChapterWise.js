import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Header from '../Components/Header';
import {useRoute} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {chaptercourses} from '../Components/Chapters';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Button from './Button';
import ChapterWiseVideo from './ChapterWiseVideo';

const ChapterWise = ({navigation}) => {
  const courses = chaptercourses;

  const route = useRoute();
  const {chapter} = route.params; // Access the chapter parameter
  const {coursename} = route.params;
  const {description} = route.params;
  console.warn('you know', courses);

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
          <Text style={{fontWeight: 400, fontSize: 20, marginLeft: 20}}>
            {coursename}
          </Text>
        </View>
        {courses &&
          courses.map((itm, index) => {
            return (
              <TouchableOpacity
                key={itm.key}
                style={styles.box}
                onPress={() =>
                  navigation.navigate('ChapterWiseVideo', {
                    chapterwisesendData: courses, // Pass the entire array
                    currentIndex: index, // Pass the current index
                    mssg: itm.mss1,
                    des: itm.description,
                  })
                }>
                <Image
                  source={itm.image}
                  style={{width: '100%', height: 220, borderRadius: 20}}
                />
                <Image
                  source={require('../assets/Images/video-circle.png')}
                  style={{position: 'absolute', top: 60, left: 160}}
                  height={60}
                  width={60}
                />
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  {' '}
                  <TouchableOpacity>
                    <Text style={{fontSize: 17, top: 10, fontWeight: 400}}>
                      {itm.mss1}
                    </Text>{' '}
                  </TouchableOpacity>{' '}
                  {itm.key == 'cls1' ? (
                    <Icon
                      name="favorite"
                      color={'red'}
                      size={30}
                      style={{marginTop: 5, right: 15}}
                    />
                  ) : (
                    <Icon
                      name="favorite"
                      color={'pink'}
                      size={30}
                      style={{marginTop: 5, right: 15}}
                    />
                  )}
                </View>
              </TouchableOpacity>
            );
          })}
      </ScrollView>
      <Button
        text="Take a Quiz"
        style={{
          color: '#FFFFFF',
          fontSize: 16,
          fontWeight: 400,
          marginLeft: 20,
          bottom: 120,
        }}
        // onPress={navigation.navigate('Quiz')}
      />
    </SafeAreaView>
  );
};

export default ChapterWise;

const styles = StyleSheet.create({
  box: {
    height: 220,
    width: '90%',
    // borderWidth: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 18,
    marginTop: 50,
  },
});