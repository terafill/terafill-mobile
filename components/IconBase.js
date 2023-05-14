import React, { memo } from "react";
import { StyleProp, ViewStyle, Image, StyleSheet, View } from "react-native";

const IconBase = memo(({ style }) => {
  return (
    <View style={[styles.iconbase, style]}>
      <Image
        style={styles.vectorIcon}
        resizeMode="cover"
        source={require("../assets/vector9.png")}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  vectorIcon: {
    height: 36,
    width: 40,
  },
  iconbase: {
    height: 40,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    width: 40,
  },
});

export default IconBase;
