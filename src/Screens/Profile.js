import {StyleSheet, Text, View, Image, ImageBase} from 'react-native';
import React, {useRef} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../Components/Header';
import Textbox from './Textbox';
import InputBox from './InputBox';
import {useState} from 'react';
import Navigation from '../Navigation';
import Button from './Button';
import RBSheet from 'react-native-raw-bottom-sheet';
import {TouchableOpacity} from 'react-native';
import Bottomsheetbar from './Bottomsheetbar';
const Profile = ({navigation}) => {
  const [namee, setnamee] = useState('Aman Sharama');
  const [email, setemail] = useState('amansharma98@gmail.com');
  const [phone, setphone] = useState('+919876543210');
  const refRBSheet = useRef();

  return (
    <SafeAreaView>
      <Header name="Profile" onPress={navigation} />

      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image source={require('../assets/Images/userbig.png')} />
        <Image
          source={require('../assets/Images/Edit.png')}
          style={{top: -40, left: 40}}
        />
        <Text style={{fontSize: 24, marginTop: 25}}>Aman Sharma</Text>
      </View>

      <View
        style={{
          alignItems: 'center',
          backgroundColor: '#0B57CF',
          height: 101,
          width: '90%',
          alignSelf: 'center',
          borderRadius: 20,
          top: 10,
        }}>
        <View style={{flexDirection: 'row', marginTop: 10}}>
          <View style={{marginRight: 75}}>
            <Image source={require('../assets/Images/starse.png')} />
            <Text style={{color: '#FFFFFF', marginTop: 10}}>POINTS</Text>
            <Text
              style={{
                color: 'white',
                top: 10,
                fontSize: 16,
                fontWeight: 'bold',
              }}>
              420
            </Text>
            <Image
              source={require('../assets/Images/Divider.png')}
              style={{marginLeft: 70, marginTop: -60}}
            />
          </View>
          <View>
            <Image source={require('../assets/Images/starse.png')} />
            <Text style={{color: '#FFFFFF', marginTop: 10}}>POINTS</Text>
            <Text
              style={{
                color: 'white',
                top: 10,
                fontSize: 16,
                fontWeight: 'bold',
              }}>
              420
            </Text>
            <Image
              source={require('../assets/Images/Divider.png')}
              style={{marginLeft: 70, marginTop: -60}}
            />
          </View>

          <View style={{marginLeft: 50}}>
            <Image source={require('../assets/Images/starse.png')} />
            <Text style={{color: '#FFFFFF', marginTop: 10}}>POINTS</Text>
            <Text
              style={{
                color: 'white',
                top: 10,
                fontSize: 16,
                fontWeight: 'bold',
              }}>
              420
            </Text>
          </View>
        </View>
      </View>

      <View style={{marginTop: 30, justifyContent: 'center', marginLeft: 30}}>
        <Textbox name={'Name'} color={'gray'} />
        <InputBox namee={namee} style={'black'} />

        <Textbox name={'Email'} color={'gray'} />
        <InputBox email={email} style={'black'} />

        <Textbox name={'Phone'} color={'gray'} />
        <InputBox phone={phone} style={'black'} />
      </View>

      <Button
        text="Log Out"
        style={{justifyContent: 'center', alignSelf: 'center', bottom: -200}}
        neww={'new'}
      />

      <View style={{flex: 1,justifyContent:'center',alignSelf:'center',width:250}}>
        <Button
          text="Choose Language"
          style={{backgroundColor: 'rgba(11, 87, 207, 1)', color: 'white'}}
          onPress={() => refRBSheet.current.open()}
        />

        <RBSheet
          ref={refRBSheet}
          useNativeDriver={true}
          customStyles={{
            wrapper: {
              backgroundColor: 'transparent',
            },
            draggableIcon: {
              backgroundColor: '#000',
            },
          }}
          customModalProps={{
            animationType: 'slide',
            statusBarTranslucent: true,
          }}
          customAvoidingViewProps={{
            enabled: false,
          }}>
          <Bottomsheetbar />
        </RBSheet>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 16,
    textAlign: 'center',
  },
  closeButton: {
    backgroundColor: '#ff4444',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});
