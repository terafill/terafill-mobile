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

const IconBase3 = memo(({ style }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.iconbase, style]}
      onPress={() => navigation.navigate("Sync")}
    >
      <Image
        style={styles.vectorIcon}
        resizeMode="cover"
        source={require("../assets/vector10.png")}
      />
    </Pressable>
  );
});

const styles = StyleSheet.create({
  vectorIcon: {
    width: 29,
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

export default IconBase3;
