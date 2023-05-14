import React, { memo } from "react";
import {
  StyleProp,
  ViewStyle,
  Image,
  StyleSheet,
  View,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const IconBase4 = memo(({ style }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.iconbase, style]}
      onPress={() => navigation.navigate("AppHome")}
    >
      <Image
        style={styles.vectorIcon}
        resizeMode="cover"
        source={require("../assets/vector.png")}
      />
    </Pressable>
  );
});

const styles = StyleSheet.create({
  vectorIcon: {
    width: 39,
    height: 39,
  },
  iconbase: {
    overflow: "hidden",
    flexDirection: "row",
    padding: 0,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default IconBase4;
