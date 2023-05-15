import * as React from "react";
import { useState, useEffect, useCallback } from "react";
import { useFocusEffect } from '@react-navigation/native';
import { Image, StyleSheet, View, Dimensions, Animated, Easing } from "react-native";

import axios from 'axios';
import Cookies from 'js-cookie';

import LoginContainer from "../components/LoginContainer";
import { Color } from "../GlobalStyles";


const AppSetup = ({ navigation }) => {

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const screenHeight = Dimensions.get('window').height;
  const loginContainerHeight = screenHeight/2;
  // console.log("screenHeight", screenHeight);

  const top = useState(new Animated.Value(screenHeight+1))[0];
  // console.log("top", top);

  const rotationValue = useState(new Animated.Value(0))[0];

  const rotateStyle = {
    transform: [
      { rotate: rotationValue.interpolate({
        inputRange: [0, 45],
        outputRange: ['0deg', '45deg'],
      }) },
    ],
  };

  useFocusEffect(
    useCallback(() => {
    Animated.spring(top, {
      toValue: screenHeight/2,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [])
  );

  const loginUser = () => {
      var data = JSON.stringify({
        email: userData.email,
        master_password: userData.password
      });

      console.log(`http://localhost:8000/api/v1/auth/login`);

      var config = {
        method: 'post',
        url: `http://localhost:8000/api/v1/auth/login`,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        data : data
      };

      return axios(config);
   }

  const onLogin = ({callback}) =>{

    const hideLoginContainer = Animated.spring(top, {
      toValue: screenHeight+1,
      duration: 1000,
      useNativeDriver: true,
    });

    const rotateIcon = Animated.spring(rotationValue, {
      toValue: 45,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    });

    loginUser().then(function (response) {
          console.log(response);
          Cookies.set(`accessToken`, response.data.accessToken, { expires: 7 });
          Cookies.set(`refreshToken`, response.data.refreshToken, { expires: 7 });
          Cookies.set(`idToken`, response.data.idToken, { expires: 7 });
          Animated.parallel(
            [hideLoginContainer, rotateIcon]
            ).start(({finished}) => {
            callback();
          });
        })
        .catch(function (error) {
          console.log(error);
          if (error.response.data.hasOwnProperty('detail')){
            const error_msg = error.response.data.detail;
            console.log(error_msg);
            alert([error_msg]);
          }
          else{
            alert([`Something went wrong: ${error}.`]);
          }
          // setErrorListVisibility(prevState => (true));
        });
  }


  return (
    <View style={styles.appSetup}>
      <LoginContainer
        navigation={navigation}
        top={top}
        height={loginContainerHeight}
        onLogin={onLogin}
        userData={userData}
        setUserData={setUserData}
      />
      <Animated.Image
        style={[rotateStyle, styles.keylanceIcon]}
        resizeMode="cover"
        source={require("../assets/tiltedKeylanceIcon.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  keylanceIcon: {
    position: "absolute",
    top: 112,
    left: 109,
    width: 141,
    height: 141,
    zIndex: 1,
  },
  appSetup: {
    backgroundColor: "white",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    flex: 1,
    flexDirection: "column",
    width: "100%",
    height: 800,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "end",
  },
});

export default AppSetup;
