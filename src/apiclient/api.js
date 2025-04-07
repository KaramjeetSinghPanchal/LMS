import AsyncStorage from '@react-native-async-storage/async-storage';

const baseUrl = 'https://zmplmsapi-qa.zapbuild.in';

export const fetchUserNo = async fullPhoneNumber => {
  console.warn('fullPhoneNumberfullPhoneNumber', fullPhoneNumber);

  try {
    const response = await fetch(`${baseUrl}/gateway/v1/auth/otp/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        username: fullPhoneNumber,
      }),
    });
    console.warn('rresponsee', response);

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || `Server error (${response.status})`);
    }

    return data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

export const Otpset = async ({fullPhoneNumber, otp}) => {

  const response = await fetch(
    `https://zmplmsapi-qa.zapbuild.in/gateway/v1/auth/otp/token/`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        username: fullPhoneNumber,
        otp: otp,
      }),
    },
  );

  const getotpdata = await response.json();

  console.log('result response==', getotpdata);
  if (getotpdata.status_code === 200) {
    await AsyncStorage.setItem('access_token', getotpdata.data.access);
    await AsyncStorage.setItem('refresh_token', getotpdata.data.refresh);
    console.log('Tokens saved successfully!');
    console.warn('Access Token:', getotpdata.data.access);
    console.warn('Refresh Token:', getotpdata.data.refresh);
  }
  return getotpdata;
};

export const gettoken = async () => {
  try {
    const token = await AsyncStorage.getItem('access_token');
    if (token) {
      return token;
    } else {
      throw new Error('Token not found in "gettoken"');
    }
  } catch (error) {
    console.error('Error retrieving token:', error);
    throw error;
  }
};

// Resend OTP
export const resendOtp = async fullPhoneNumber => {
  try {
    const response = await fetch(`${baseUrl}/gateway/v1/auth/resend-otp/`, {
      // Fixed URL
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        username: fullPhoneNumber,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || `Server error (${response.status})`);
    }
    return data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

//  Logout user
export const logoutuser = async () => {
  const response = await fetch(`${baseUrl}/gateway/v1/auth/logout/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });
  console.warn('logout response', response);

  const data = await response.json();
  return data;
};

export const getCourses = async (params = {}) => {
  try {
    const baseUrl = 'https://zmplmsapi-qa.zapbuild.in';
    
    const queryString = new URLSearchParams();
    
    // Add provided parameters to query string
    Object.entries(params).forEach(([key, value]) => {
      if (value !== '' && value !== null && value !== undefined) {
        queryString.append(key, value.toString());
      }
    });

    const apiUrl = `${baseUrl}/gateway/v1/courses/?${queryString.toString()}`;
    console.log('API Request URL:', apiUrl); 

    const token = await gettoken();
    
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'accept': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('API Error Response:', errorData);
      throw new Error(`Request failed with status ${response.status}`);
    }

    return await response.json();
    
  } catch (error) {
    console.error('Courses API Error:', error);
    throw error;
  }
};

export const updateCourseSavedStatus = async (courseId, shouldSave) => {
  try {
    const token = await gettoken();
    const endpoint = `${baseUrl}/gateway/v1/courses/${courseId}/save/`;

    if (shouldSave) {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || `Request failed with status ${response.status}`);
      }

      const result = await response.json();
      console.warn('=======>0',result)
      
      return result;
    }
    
    return { success: true };
    
  } catch (error) {
    console.error('API Error updating saved status:', error);
    throw error;
  }
};
