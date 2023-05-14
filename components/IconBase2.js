import React, { memo } from "react";
import { StyleProp, ViewStyle, Image, StyleSheet, View } from "react-native";

const IconBase2 = memo(({ style }) => {
  return (
    <View style={[styles.iconbase, style]}>
      <Image
        style={styles.vectorIcon}
        resizeMode="cover"
        source={require("../assets/vector19.png")}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  vectorIcon: {
    width: 39,
    height: 39,
  },
  iconbase: {
    width: 40,
    height: 40,
    overflow: "hidden",
    flexDirection: "row",
    padding: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default IconBase2;
