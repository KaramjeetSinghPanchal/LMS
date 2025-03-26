import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
} from 'react-native';
// import MapView from 'react-native-maps';
import CountryPicker from 'react-native-country-picker-modal';
import Icon from 'react-native-vector-icons/MaterialIcons';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Platform} from 'react-native';
import Textbox from './Textbox';
import InputBox from './InputBox';
import Button from './Button';
import OTPScreen from './OTPScreen';
import {useNavigation} from '@react-navigation/native';
import {useRef} from 'react';
// import PhoneInput from 'react-native-phone-input';
import {useState} from 'react';
import PhoneInput from 'react-native-phone-number-input';

const SignIn = ({navigation}) => {
  const [show, setShow] = useState(false);
  const phoneInput = useRef(null);
  const [phonenumber, setphonenumber] = useState('');
  const [value, setValue] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const [countryCode, setCountryCode] = useState('US');
  const [country, setCountry] = useState(null);
  const [visible, setVisible] = useState(false);

  const onSelect = selectedCountry => {
    setCountryCode(selectedCountry.cca2);
    setCountry(selectedCountry);
    setVisible(false);
  };

  return (
    <SafeAreaView>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 100,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../assets/Images/iconlogo.png')}
              style={{
                height: 30,
                width: 35,
                marginTop: Platform.OS == 'ios' ? 0 : 5,
                marginRight: 5,
              }}
            />
            <View>
              <Text style={{fontSize: 30, fontWeight: '600'}}>zapbuild</Text>
              <Text style={{textAlign: 'right', fontSize: 12, marginLeft: 10}}>
                LMS
              </Text>
            </View>
          </View>
        </View>
        <View>
          <Text
            style={{
              fontWeight: 400,
              fontSize: 26,
              justifyContent: 'center',
              alignSelf: 'center',
              marginTop: 30,
            }}>
            Sign in
          </Text>
        </View>
        <View
          style={{marginLeft: Platform.OS === 'ios' ? 22 : 19, marginTop: 20}}>
          <Textbox name={'Phone Number'} style={{fontWeight: 400}} />
        </View>

        <View style={styles.container}>
          <View style={{marginLeft: 10, marginTop: 2}}>
            <CountryPicker
              countryCode={countryCode}
              withFlag
              withCallingCode
              withEmoji
              withFilter
              onSelect={onSelect}
              visible={visible}
              onClose={() => setVisible(false)}
              theme={{
                primaryColor: '#1a73e0',
                fontSize: 18,
                flagSize: 20, // Add this line to increase flag size
              }}
            />
          </View>

          <View>
            <TouchableOpacity
              style={{flexDirection: 'row', marginTop: 2}}
              onPress={() => setVisible(true)}>
              <Text style={styles.flagText}>
                {country ? (
                  <>
                    <Text style={{fontSize: 15, fontWeight: 500}}>
                      +{country.callingCode[0]}
                    </Text>
                  </>
                ) : (
                  '+1'
                )}
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            {' '}
            <Image
              source={require('../assets/Images/arrow.png')}
              style={{width: 10, height: 5, top: 2, marginLeft: 5}}
            />
          </TouchableOpacity>

          
          <InputBox style={styles.inp} phone={'7015160983'}/>
        </View>
        <View
          style={{
            marginTop: 50,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}>
          <View
            style={{
              height: Platform.OS === 'ios' ? 1 : 1, // Give it some height to make it visible
              width: Platform.OS === 'ios' ? 115 : 98,
              backgroundColor: 'gray',
              marginLeft:Platform.OS==='ios'?25: 25,
            }}
          />{' '}
          {/* <Image source={require('../assets/Images/Line26.png')} style={{marginLeft:20}}/>{' '} */}
          <Text style={{marginTop: -10, color: 'gray',marginLeft:Platform.OS==='ios'?0:7,marginRight:Platform.OS==='ios'?0:7}}>or continue with</Text>{' '}
          <View
            style={{
              height: Platform.OS === 'ios' ? 1 : 1, // Give it some height to make it visible
              width: Platform.OS === 'ios' ? 115 : 98,
              backgroundColor: 'gray',
              marginRight: 35,
            }}
          />
          {/* <Image source={require('../assets/Images/Line26.png')} style={{}} />{' '} */}
        </View>
        <Button text={'Continue'}/>
        <TouchableOpacity
          style={{
            width: '85%',
            backgroundColor: 'rgba(152, 152, 152, 1)',
            height: 45,
            borderRadius: 10,
            marginTop: 50,
            marginLeft: 20,
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Image
            source={require('../assets/Images/new.png')}
            style={{marginTop: 8}}
          />{' '}
          <Text
            style={{
              color: 'white',
              justifyContent: 'center',
              alignContent: 'center',
              alignSelf: 'center',
              top: 12,
              marginBottom: 23,
              marginLeft: 15,
            }}>
            Sign in with MovinSync
          </Text>{' '}
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  texts: {
    marginLeft: 30,
    justifyContent: 'center',
    marginTop: 30,
  },
  container: {
    ...Platform.select({
      ios: {
        flexDirection: 'row',
        height: 50,
        borderWidth: 0.2,
        width: '90%',
        alignSelf: 'center',
        backgroundColor: '#EAEAEA',
        borderColor: '#555555',
        borderRadius: 8,
        marginTop: 10,
        alignItems: 'center',
      },
      android: {
        flexDirection: 'row',
        height: 50,
        borderWidth: 0.2,
        width: '90%',
        alignSelf: 'center',
        backgroundColor: '#EAEAEA',
        borderColor: '#555555',
        borderRadius: 8,
        marginTop: 10,
        alignItems: 'center',
      },
    }),
  },
  inp: {
    ...Platform.select({
      ios: {
        borderWidth: 0.2,
        bottom: 10,
        width: 302,
        marginLeft: 11,
        //  borderColor:'#555555',
        fontSize: 15,
      },
      android: {
        borderWidth: 0.2,
        bottom: 10,
        width: 235,
        marginLeft: 10,
        fontSize: 15,
        // borderColor:'#555555'
      },
    }),
  },
});
