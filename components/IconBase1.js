import React, { memo } from "react";
import { StyleProp, ViewStyle, Image, StyleSheet } from "react-native";

const IconBase1 = memo(({ style }) => {
  return (
    <Image
      style={[styles.iconbase, style]}
      resizeMode="cover"
      source={require("../assets/iconbase3.png")}
    />
  );
});

const styles = StyleSheet.create({
  iconbase: {
    width: 40,
    height: 40,
    overflow: "hidden",
  },
});

export default IconBase1;
