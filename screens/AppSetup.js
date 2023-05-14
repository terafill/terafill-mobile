import * as React from "react";
import { useState, useEffect } from "react";
import { Image, StyleSheet, View, Dimensions, Animated, Easing } from "react-native";

import LoginContainer from "../components/LoginContainer";
import { Color } from "../GlobalStyles";


const AppSetup = ({ navigation }) => {

  const screenHeight = Dimensions.get('window').height;
  const loginContainerHeight = screenHeight/2;
  console.log("screenHeight", screenHeight);

  const top = useState(new Animated.Value(screenHeight+1))[0];
  console.log("top", top);

  const rotationValue = useState(new Animated.Value(0))[0];

  const rotateStyle = {
    transform: [
      { rotate: rotationValue.interpolate({
        inputRange: [0, 45],
        outputRange: ['0deg', '45deg'],
      }) },
    ],
  };

  useEffect(() => {
    Animated.spring(top, {
      toValue: screenHeight/2,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

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

    Animated.parallel(
      [hideLoginContainer, rotateIcon]
      ).start(({finished}) => {
      callback();
    });
  }


  return (
    <View style={styles.appSetup}>
      <LoginContainer navigation={navigation} top={top} height={loginContainerHeight} onLogin={onLogin}/>
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
