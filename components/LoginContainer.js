import React, { memo, useState } from "react";
import { Pressable, Image, StyleSheet, View, Text, Dimensions, Animated } from "react-native";

import { TextInput, Button} from 'react-native-paper';

import { Padding, FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const LoginContainer = memo(({ navigation, top, height, onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const addedStyle = {
    position: "absolute",
    height: height,
    // transform: [{ translateY: top }],
    top: top,
  };
  console.log("addedStyle", addedStyle);

  return (
    <Animated.View style={[addedStyle, styles.loginFrame]}>
      <View style={styles.loginForm}>
          <TextInput
            label="Username"
            placeholder="Enter username ..."
            value={username}
            mode={"outlined"}
            onChangeText={username => setUsername(username)}
            outlineColor="lightblue"
            activeOutlineColor="black"
          />
          <TextInput
            label="Password"
            placeholder="Enter master password ..."
            value={password}
            mode={"outlined"}
            onChangeText={password => setPassword(password)}
            outlineColor="lightblue"
            activeOutlineColor="black"
            secureTextEntry={true}
          />
        <Button
          style={{borderRadius: "8px"}}
          onPress={()=>{onLogin({callback: ()=>navigation.navigate('AppInner')})}}
          buttonColor="#3F9BF1"
          mode="elevated"
          textColor="white"
        >Login</Button>
      </View>
      <Text>OR</Text>
        <Button
          style={{borderRadius: "8px"}}
          // onPress={()=>{navigation.navigate('AppHome')}}
          buttonColor="#3F9BF1"
          mode="elevated"
          textColor="white"
        >Sync using code</Button>
    </Animated.View>
  );
});

const styles = StyleSheet.create({
  loginFrame: {
    gap: "32px",
    paddingVertical: "32px",
    backgroundColor: Color.white,
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowRadius: 10,
    elevation: 10,
    width: "100%",
    zIndex: 0,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
  loginForm: {
    flex: 1,
    flexDirection: "column",
    gap: "16px",
    justifyContent: "center",
    alignItems: "center",
  },
  usernameField: {
    fontSize: "100px",
  },
  passwordField: {
    fontSize: "32px",
  }
});

export default LoginContainer;
