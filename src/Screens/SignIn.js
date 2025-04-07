import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
  ToastAndroid,
  ActivityIndicator,
  Platform
} from 'react-native';
import CustomToast from '../Components/CustomToast';
import CountryPicker from 'react-native-country-picker-modal';
import React, {useState, useRef, useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Textbox from './Textbox';
import InputBox from './InputBox';
import Button from './Button';
import {useNavigation} from '@react-navigation/native';
import {fetchUserNo} from '../apiclient/api';
import { resendOtp } from '../apiclient/api';
const SignIn = ({navigation}) => {
  const [show, setShow] = useState(false);
  const phoneInput = useRef(null);
  const [numb, setNumb] = useState('7017674512');
  const [countryCode, setCountryCode] = useState('IN');
  const [country, setCountry] = useState(null);
  const [visible, setVisible] = useState(false);
  const [code, setcode] = useState('91');
  const [toastVisible, setToastVisible] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
    const [otp, setOtp] = useState(null); // 5-digit OTP
  
 
  const onSelect = selectedCountry => {
    setCountryCode(selectedCountry.cca2);
    setCountry(selectedCountry);
    setVisible(false);
  };


  const handlesignup = async () => {
    try {
      setIsLoading(true);
      const fullPhoneNumber = country ? `${country.callingCode[0]}${numb}` : `91${numb}`;
      const response = await fetchUserNo(fullPhoneNumber);
      console.warn("API Response:", response);
      
      if (response.status_code === 200) {
        if (response.data?.access) {
          await AsyncStorage.multiSet([
            ['access_token', response.data.access],
            ['refresh_token', response.data.refresh]
          ]);
          console.log('Tokens stored successfully!');
        }
  
        const receivedOtp = response?.data?.otp;
        setTimeout(() => {
          navigation.navigate('OTPScreen', { 
            otp: receivedOtp,
            phoneNumber: numb,
            fullPhoneNumber: fullPhoneNumber
          });
        }, 1000);
        showToast();
      }
    } catch (error) {
      console.error('Signup error:', error);
      Alert.alert('Error', error.message || 'Failed to send OTP');
    } finally {
      setIsLoading(false);
    }
  };   


  const showToast = () => {
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 2000);
  };
  return (
    <SafeAreaView>
      <ScrollView showsHorizontalScrollIndicator={false}>
        {/* Logo and Header Section */}
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
              fontWeight: '400',
              fontSize: 26,
              justifyContent: 'center',
              alignSelf: 'center',
              marginTop: 30,
            }}>
            Sign in
          </Text>
        </View>

        {/* Phone Input Section */}
        <View
          style={{marginLeft: Platform.OS === 'ios' ? 22 : 30, marginTop: 20}}>
          <Textbox name={'Phone Number'} style={{fontWeight: '400'}} />
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
                flagSize: 20,
              }}
            />
          </View>

          <View>
            <TouchableOpacity
              style={{flexDirection: 'row', marginTop: 2}}
              onPress={() => setVisible(true)}>
              <Text style={styles.flagText}>
                {country ? (
                  <Text style={{fontSize: 15, fontWeight: '500'}}>
                    +{country.callingCode[0]}
                  </Text>
                ) : (
                  '+91'
                )}
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <Image
              source={require('../assets/Images/arrow.png')}
              style={{width: 10, height: 5, top: 2, marginLeft: 5}}
            />
          </TouchableOpacity>

          <InputBox
            style={styles.inp}
            placeholder={'7015160983'} // Changed from 'phone' to 'placeholder' for clarity
            onChangeText={setNumb} // More standard naming than 'state'
            value={numb} // Current value
          />
        </View>

        {/* Divider Section */}
        <View
          style={{
            marginTop: 50,
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <View style={styles.divider} />
          <Text style={styles.dividerText}>or continue with</Text>
          <View style={styles.divider} />
        </View>

   

        <View style={{justifyContent: 'center', alignItems: 'center'}}>
        {isLoading ? (
    <ActivityIndicator size="large" color="blue" />
    
  ) : (
    <Button text={'Continue'} onPress={handlesignup} />
  )}
        </View>



        {/* MovinSync Button */}
        <TouchableOpacity style={styles.movinSyncButton}>
          <Image
            source={require('../assets/Images/new.png')}
            style={{marginTop: 8}}
          />
          <Text style={styles.movinSyncText}>Sign in with MovinSync</Text>
        </TouchableOpacity>

       

      </ScrollView>
      {toastVisible && <CustomToast message="OTP sent Successfully" />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
        width: '85%',
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
        width: 250,
        marginLeft: 11,
        fontSize: 15,
      },
      android: {
        borderWidth: 0.2,
        bottom: 10,
        width: 200,
        marginLeft: 10,
        fontSize: 15,
      },
    }),
  },
  divider: {
    height: 1,
    width: Platform.OS === 'ios' ? 115 : 80,
    backgroundColor: 'gray',
    marginLeft: 10,
    marginRight: 10,
  },
  dividerText: {
    marginTop: -10,
    color: 'gray',
    // marginHorizontal: Platform.OS === 'ios' ? 0 : 0,
  },
  movinSyncButton: {
    width: '85%',
    backgroundColor: 'rgba(152, 152, 152, 1)',
    height: 45,
    borderRadius: 10,
    marginTop: 50,
    alignSelf: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  movinSyncText: {
    color: 'white',
    alignSelf: 'center',
    marginTop: 12,
    marginBottom: 15,
    marginLeft: 15,
  },
  flagText: {
    fontSize: 15,
    fontWeight: '500',
  },
});

export default SignIn;
