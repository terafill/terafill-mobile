import * as React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Color } from "../GlobalStyles";

const UnlockPageA = () => {
  return (
    <View style={styles.unlockPageA}>
      <Image
        style={styles.tiltedkeyicon}
        resizeMode="cover"
        source={require("../assets/tiltedkeyicon.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  tiltedkeyicon: {
    position: "absolute",
    height: "17.63%",
    width: "39.17%",
    top: "14%",
    right: "30.56%",
    bottom: "68.37%",
    left: "30.28%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  unlockPageA: {
    backgroundColor: Color.white,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default UnlockPageA;
