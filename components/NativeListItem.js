import * as React from "react";
import {
  Pressable,
  StyleProp,
  ViewStyle,
  Image,
  StyleSheet,
  View,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const NativeListItem = ({ label, destination, params, style }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.nativelistitem, style]}
      onPress={() => navigation.navigate(destination, params)}
    >
      <View style={[styles.iconframe, styles.iconframeFlexBox]}>
        <View style={[styles.iconsmall, styles.iconframeFlexBox]}>
          <Image
            style={styles.vectorIcon}
            resizeMode="cover"
            source={require("../assets/vector16.png")}
          />
        </View>
      </View>
      <Text style={styles.usernameAndPassword}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  iconframeFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  vectorIcon: {
    height: 28,
    width: 32,
  },
  iconsmall: {
    height: 32,
    overflow: "hidden",
    width: 32,
  },
  iconframe: {
    display: "none",
    flexDirection: "row",
    justifyContent: "center",
  },
  usernameAndPassword: {
    fontSize: FontSize.labelLargeMedium_size,
    lineHeight: 24,
    textTransform: "capitalize",
    fontWeight: "500",
    fontFamily: FontFamily.labelMediumMedium,
    color: Color.fontDark,
    textAlign: "center",
    marginLeft: 8,
  },
  nativelistitem: {
    alignSelf: "stretch",
    borderStyle: "solid",
    borderColor: "#d9d9d9",
    borderBottomWidth: 1,
    height: 88,
    padding: Padding.p_base,
    alignItems: "center",
    flexDirection: "row",
  },
});

export default NativeListItem;
