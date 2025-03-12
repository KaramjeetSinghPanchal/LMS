import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../Components/Header';
import {useRoute} from '@react-navigation/native';
import Button from './Button';
import { Tooltip } from 'react-native-paper';
const Quizresult = ({navigation}) => {
  const route = useRoute();
  const {score} = route.params;
  const {quizData} = route.params;

  return (
    <SafeAreaView>
      <Header
        name={'Quiz Result'}
        onPress={() => {
          navigation.goBack();
        }}
      />
      <View
        style={{justifyContent: 'center', alignSelf: 'center', marginTop: 50}}>
        {' '}
        <Image source={require('../assets/Images/resultlogo.png')} />
      </View>
      <View style={{justifyContent: 'center', alignSelf: 'center'}}>
        <Text style={{fontSize: 20, fontWeight: 400, marginTop: 20}}>
          Congratulations
        </Text>
        <Text
          style={{
            justifyContent: 'center',
            alignSelf: 'center',
            fontSize: 14,
            color: '#555555',
            fontWeight: 400,
            marginTop: 20,
          }}>
          Your Score
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignSelf: 'center',
            marginTop: 20,
          }}>
          <Text style={{fontSize: 31, fontWeight: 700, color: 'green'}}>
            {score}
          </Text>
          <Text style={{fontSize: 31, fontWeight: 700}}>/{quizData}</Text>
        </View>
      </View>
      <View
        style={{
          width: 280,
          justifyContent: 'center',
          alignSelf: 'center',
          marginTop: 50,
        }}>
        <Text style={{fontWeight: 400, fontSize: 14, color: '#555555'}}>
          You did a great job, Learn more by taking another course.
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: 12,
          marginTop: 50,
        }}>
        <Text style={{fontSize: 16, color: '#555555'}}>
          Questions Attempted{' '}
        </Text>{' '}
        <Text style={{fontSize: 16}}>{quizData}</Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: 12,
          marginTop: 30,
        }}>
        <Text style={{fontSize: 16, color: '#555555'}}>Correct Answers </Text>{' '}
        <Text style={{fontSize: 16}}>{score}</Text>
      </View>

      <View style={styles.box}>
        <View style={{marginTop: 30, width: 140}}>
          <Image
            source={require('../assets/Images/Certificate.png')}
            style={{width: 140, height: 100}}
          />
        </View>
        <View style={{marginTop: 50}}>
          <Text style={{color: '#1D1D1D', fontSize: 18}}>POSH Certificate</Text>
          <Text style={{color: '#A1A1A1', fontSize: 14}}>25 March, 2024</Text>

          <Image source={require('../assets/Images/sharedown.png')} style={{marginTop:30,marginLeft:90}}/>
        </View>
      </View>

      <Button
        text="Take a Quiz"
        style={{
          color: '#FFFFFF',
          fontSize: 16,
          fontWeight: 400,
          marginLeft: 20,
         bottom:50
        }}
        // onPress={navigation.navigate('Quiz')}
      />
    </SafeAreaView>
  );
};

export default Quizresult;

const styles = StyleSheet.create({
  box: {
    width: '95%',
    height: 170,
    marginTop: 30,
    margin: 10,
    backgroundColor: '#F5F9FC',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
