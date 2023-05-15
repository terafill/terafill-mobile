import { useEffect, useRef } from 'react';
import { useNavigation } from "@react-navigation/native";

import jwt_decode from 'jwt-decode';
import Cookies from 'js-cookie';
import axios from 'axios';

export function cleanupUserSession(navigate){
    Cookies.remove('accessToken');
    Cookies.remove('idToken');
    Cookies.remove('refreshToken');
    navigation.navigate('AppSetup');
    console.log("Session cleaned up!");
}

export async function isUserSessionValid(){
    const tokenCookie = Cookies.get('accessToken');
    if (!tokenCookie) {
      return false;
    }

    const decodedToken = jwt_decode(tokenCookie);
    const expirationTime = decodedToken.exp * 1000;
    const currentTime = new Date().getTime();

    if (expirationTime < currentTime) {
      return false
    }

    try {
      const response = await axios.get(`http://localhost:8000/api/v1/auth/status?token=${tokenCookie}`);
      console.log(response);
      if (response.data.logged_in) {
        console.log("User is logged in!");
        return true;
      } else {
        console.log("User is logged out!");
        return false;
      }
    } catch (error) {
      console.log(error);
      return false;
    }
}

export async function checkUserSession(navigation, context) {
  const flag = await isUserSessionValid();
  if(flag && context === "login"){
    navigation.navigate("AppSetup");
  }
  else if(!flag){
    cleanupUserSession(navigation.navigate);
  }

}


export function useTokenExpiration(context) {
  const shouldCheck = useRef(true);
  const navigation = useNavigation();

  useEffect(() => {
    if(shouldCheck.current){
      checkUserSession(navigation, context);
      shouldCheck.current = false;
    }
    const intervalId = setInterval(() => {
      checkUserSession(navigation, context);
    }, 60000);

    return () => clearInterval(intervalId);
  }, []);
}
