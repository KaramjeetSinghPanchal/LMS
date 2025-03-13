import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
  Pressable,
  ScrollView,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../Components/Header';
import {useRoute} from '@react-navigation/native';
import Button from './Button';
import {useState} from 'react';

const Quizresult = ({navigation}) => {
  const route = useRoute();
  const {score} = route.params;
  const {quizData} = route.params;
  const [unlock, setunlock] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const unlocked = () => {
    setunlock(true);
    setModalVisible(true);
  };

  const downloadCerti = ()=>{
    setunlock(false);
    setModalVisible(true);
  }
  return (
    <SafeAreaView>
      <ScrollView>
      <Header
        name={'Quiz Result'}
        onPress={() => {
          navigation.goBack();
        }}
      />
      <View
        style={{justifyContent: 'center', alignSelf: 'center', marginTop: 50}}>
        <Image source={require('../assets/Images/resultlogo.png')} />
      </View>
      <View style={{justifyContent: 'center', alignSelf: 'center'}}>
        <Text style={{fontSize: 20, fontWeight: '400', marginTop: 20}}>
          Congratulations
        </Text>
        <Text
          style={{
            justifyContent: 'center',
            alignSelf: 'center',
            fontSize: 14,
            color: '#555555',
            fontWeight: '400',
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
          <Text style={{fontSize: 31, fontWeight: '700', color: 'green'}}>
            {score.toString()} {/* Convert score to string */}
          </Text>
          <Text style={{fontSize: 31, fontWeight: '700'}}>
            /{quizData.toString()}
          </Text>{' '}
          {/* Convert quizData to string */}
        </View>
      </View>
      <View
        style={{
          width: 280,
          justifyContent: 'center',
          alignSelf: 'center',
          marginTop: 50,
        }}>
        <Text style={{fontWeight: '400', fontSize: 14, color: '#555555'}}>
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
          Questions Attempted
        </Text>
        <Text style={{fontSize: 16}}>{quizData.toString()}</Text>{' '}
        {/* Convert quizData to string */}
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: 12,
          marginTop: 30,
        }}>
        <Text style={{fontSize: 16, color: '#555555'}}>Correct Answers</Text>
        <Text style={{fontSize: 16}}>{score.toString()}</Text>{' '}
        {/* Convert score to string */}
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

          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity>
              <Image
                source={require('../assets/Images/share.png')}
                style={{marginTop: 30, marginLeft: 120}}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => downloadCerti()}>
              <Image
                source={require('../assets/Images/Download.png')}
                style={{marginTop: 30, marginLeft: -60}}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <Button
        text="Unlock Badge"
        style={{
          color: '#FFFFFF',
          fontSize: 16,
          fontWeight: '400',
          marginLeft: 20,
          bottom: 50,
        }}
        onPress={() => unlocked()}
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={unlock ? styles.modalVieww : styles.modalView}>
            {unlock ? (
              <Image
                source={require('../assets/Images/badgewhite.png')}
                style={{width: '95%', height: '50%'}}
              />
            ) : (
              <Image
                source={require('../assets/Images/downcertificate.png')}
                style={{width: '95%', height: '50%'}}
              />
            )}

            {unlock && (
              <Image
                source={require('../assets/Images/4.png')}
                style={{
                  position: 'absolute',
                  justifyContent: 'center',
                  alignSelf: 'center',
                  top: 100,
                }}
              />
            )}
            {unlock ? (
              <Text style={{fontSize: 30, fontWeight: 700}}>
                Badge Unlocked!{' '}
              </Text>
            ) : (
              <View style={{flexDirection: 'row', marginTop: 20}}>
                <Text>
                  POSH Certificate{'\n'}
                  <Text style={{color: '#A1A1A1', fontSize: 12}}>
                    25 March, 2024
                  </Text>
                </Text>
                <TouchableOpacity>
                  <Image
                    source={require('../assets/Images/share.png')}
                    style={{marginLeft: 150}}
                  />
                </TouchableOpacity>{' '}
              </View>
            )}
            {unlock ? (
              <Button text="View My Badges" />
            ) : (
              <Button text="Download" />
            )}
            {unlock ? (
              <Button
                style={{
                  backgroundColor: 'white',
                  borderColor: 'blue',
                  borderWidth: 1,
                  color: 'blue',
                  bottom: 20,
                }}
                text="View Leaderboard"
                certificate="yes"
                onPress={() => setModalVisible(!modalVisible)}
              />
            ) : (
              <Button
                style={{
                  backgroundColor: 'white',
                  borderColor: 'blue',
                  borderWidth: 1,
                  color: 'blue',
                  bottom: 20,
                }}
                text="Cancel"
                certificate="yes"
                onPress={() => setModalVisible(!modalVisible)}
              />
            )}
          </View>
        </View>
      </Modal>
      </ScrollView>
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
  centeredView: {
    flex: 1,
    bottom: 90,
    position: 'absolute',
    alignItems: 'center',
  },
  centeredVieww: {
    flex: 1,
    bottom: 90,
    position: 'absolute',
    alignItems: 'center',
  },
  modalView: {
    width: 400,
    height: 550,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalVieww: {
    width: 400,
    height: 450,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 5,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
