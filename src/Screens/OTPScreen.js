import React, {useState, useRef, useEffect} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
  SafeAreaView,
  TouchableOpacity, 
  Platform,
} from 'react-native';
import Button from './Button';
import LoaderKit from 'react-native-loader-kit';
import {useRoute, useNavigation} from '@react-navigation/native';
import Courses from './Courses';
import Toast from 'react-native-simple-toast';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CustomToast from '../Components/CustomToast';
import {resendOtp} from '../apiclient/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Otpset } from '../apiclient/api';
import { getCourses } from '../apiclient/api';
const OTPScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {otp, phoneNumber, fullPhoneNumber} = route.params || {};
  const [otpDigits, setOtpDigits] = useState(['', '', '', '', '', '']);
  const [isVerifying, setIsVerifying] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);
  const [showResend, setShowResend] = useState(false);
  const [resend, setresend] = useState();
  const [toastVisible, setToastVisible] = useState(false);

  const inputs = useRef([]);


  const authotp = async (fullPhoneNumber,otp) => {

   const getotpdata =await Otpset({fullPhoneNumber,otp})
   console.warn('==========>getotpdatgetotpdatagetotpdataa',getotpdata);
       if (getotpdata.status_code === 200) {
   
         navigation.navigate('Tabnavigation')
     
       } else {
        Alert.alert('Error:', getotpdata.message);
       }
   
  };
  

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setShowResend(true);
    }
  }, [timeLeft]);

  const showToast = () => {
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 2000);
  };


  const handleChange = (text, index) => {
    const numericValue = text.replace(/[^0-9]/g, '');
    const newOtp = [...otpDigits];
    newOtp[index] = numericValue;
    setOtpDigits(newOtp);

    if (numericValue && index < 5) {
      const nextInput = inputs.current[index + 1];
      if (nextInput) {
        nextInput.focus();
      }
    }
  };

  const handleKeyPress = ({nativeEvent: {key}}, index) => {
    if (key === 'Backspace' && !otpDigits[index] && index > 0) {
      inputs.current[index - 1].focus();
    }
  };


  const handleResendOTP = async () => {
    try {
      setTimeLeft(60);
      setShowResend(false);
      setOtpDigits(['', '', '', '', '', '']);
      inputs.current[0]?.focus();

      setIsVerifying(true);

      const data = await resendOtp(fullPhoneNumber);
      console.log('Resend OTP response:', data);

      showToast();

      if (data?.data?.otp) {
        navigation.setParams({otp: data.data.otp});
      }
    } catch (error) {
      console.error('Resend OTP failed:', error);
      Alert.alert('Error','Failed to resend OTP');
      setShowResend(true); 
    } finally {
      setIsVerifying(false);
    }
  };

  const formatTime = seconds => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../assets/Images/phonelink_lock.png')} />
      </View>

      <Text style={styles.title}>Enter OTP</Text>

      <View style={styles.instructionContainer}>
        <Text style={styles.instructionText}>
          Please enter the verification code we've sent you on +91{' '}
          {phoneNumber || '987654321'}
          <Text style={styles.editText} onPress={() => navigation.goBack()}>
            {' '}
            Edit
          </Text>
        </Text>
      </View>

      <View style={styles.otpContainer}>
        {otpDigits.map((digit, index) => (
          <TextInput
            key={index}
            ref={ref => (inputs.current[index] = ref)}
            style={styles.otpInput}
            value={digit}
            onChangeText={text => handleChange(text, index)}
            onKeyPress={e => handleKeyPress(e, index)}
            keyboardType="number-pad"
            maxLength={1}
            autoFocus={index === 0}
          />
        ))}
      </View>

      <Button
        text="Verify"
        style={styles.verifyButton}
        // onPress={() => verifyOtp(otpDigits.join(''))}
        onPress={()=>authotp(fullPhoneNumber,otp)}
        loading={isVerifying}
      />

      {showResend ? (
        <TouchableOpacity onPress={handleResendOTP} disabled={isVerifying}>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            {isVerifying ? (
              <ActivityIndicator
                color="blue"
                style={{marginTop: Platform.OS === 'ios' ? 20 : 21}}
              />
            ) : (
              <>
                <View style={{marginTop: Platform.OS === 'ios' ? 20 : 21}}>
                  <Icon size={20} name="refresh" style={{color: 'blue'}} />
                </View>
                <Text style={styles.resendButton}>Resend OTP</Text>
              </>
            )}
          </View>
        </TouchableOpacity>
      ) : (
        <View style={styles.resendContainer}>
          <Text style={styles.resendText}>Resend in</Text>
          <Text style={styles.resendTimer}>{formatTime(timeLeft)}</Text>
        </View>
      )}

      {toastVisible && <CustomToast message="OTP sent Successfully" />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  logoContainer: {
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },
  title: {
    fontWeight: '400',
    fontSize: 26,
    textAlign: 'center',
    marginTop: 20,
  },
  instructionContainer: {
    padding: 20,
  },
  instructionText: {
    fontSize: 17,
  },
  editText: {
    color: 'blue',
    fontSize: 17,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
  otpInput: {
    height: 50,
    width: 45,
    borderWidth: 1,
    borderColor: '#EAEAEA',
    borderRadius: 8,
    color: 'black',
    textAlign: 'center',
    textAlignVertical: 'center',
    includeFontPadding: false,
    padding: 0,
    fontSize: 20,
    marginHorizontal: 5,
    backgroundColor: '#FFF',
  },
  verifyButton: {
    marginHorizontal: 20,
  },
  resendContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  resendText: {
    color: 'gray',
  },
  resendTimer: {
    color: 'black',
    marginLeft: 5,
  },
  resendButton: {
    color: 'blue',
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    flexDirection: 'row',
    // fontWeight: 'bold',
  },
});

export default OTPScreen;
