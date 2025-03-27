import axios from 'axios';


const baseUrl= 'https://zmplmsapi-qa.zapbuild.in'


export const fetchUserNo = async (fullPhoneNumber) => {
    console.warn('fullPhoneNumberfullPhoneNumber',fullPhoneNumber);
    
    try {
      const response = await fetch(`${baseUrl}/gateway/v1/auth/otp/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({ 
          username: fullPhoneNumber 
        }),
      });
      console.warn('rresponsee',response);
      
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