import React, { useState } from "react";
import {
  StyleProp,
  ViewStyle,
  Image,
  StyleSheet,
  Text,
  View,
  Switch,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const NativeSecurityCard3 = ({ style }) => {
  const navigation = useNavigation();
  const [labelledToggleButtonValue, setLabelledToggleButtonValue] =
    useState(false);

  return (
    <View style={[styles.nativesecuritycard, style]}>
      <View style={styles.cardHeaderFlexBox}>
        <Image
          style={[styles.nativeicon, styles.nativeiconLayout]}
          resizeMode="cover"
          source={require("../assets/nativeicon.png")}
        />
        <Text style={[styles.label, styles.labelTypo]}>PIN</Text>
      </View>
      <Pressable
        style={styles.labelledtogglebuttonFlexBox}
        onPress={()=> navigation.navigate("Security Shield Pin")}
      >
        <View style={[styles.buttonroot, styles.cardHeaderFlexBox]}>
          <Image
            style={[styles.iconxsmall, styles.nativeiconLayout]}
            resizeMode="cover"
            source={require("../assets/iconxsmall.png")}
          />
          <Text style={[styles.label1, styles.labelTypo]}>Setup pin</Text>
        </View>
      </Pressable>
      <Switch
        style={[
          styles.labelledtogglebutton,
          styles.labelledtogglebuttonFlexBox,
        ]}
        value={labelledToggleButtonValue}
        onValueChange={setLabelledToggleButtonValue}
        thumbColor="#fff"
        trackColor={{ false: "#939393", true: "#000" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  nativeiconLayout: {
    height: 24,
    width: 24,
  },
  labelTypo: {
    marginLeft: 8,
    textAlign: "center",
    fontFamily: FontFamily.labelMediumMedium,
    fontWeight: "500",
    textTransform: "capitalize",
    lineHeight: 24,
  },
  cardHeaderFlexBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  labelledtogglebuttonFlexBox: {
    marginTop: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  nativeicon: {
    overflow: "hidden",
    height: 24,
    width: 24,
  },
  label: {
    fontSize: FontSize.labelLargeMedium_size,
    color: Color.fontDark,
  },
  iconxsmall: {
    display: "none",
  },
  label1: {
    fontSize: FontSize.labelMediumMedium_size,
    color: Color.backgroundBlue,
  },
  buttonroot: {
    borderRadius: Border.br_xs,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_5xs,
  },
  labelledtogglebutton: {
    justifyContent: "center",
  },
  nativesecuritycard: {
    alignSelf: "stretch",
    borderRadius: Border.br_3xs,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: "#d9d9d9",
    borderWidth: 0.8,
    padding: Padding.p_base,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
});

export default NativeSecurityCard3;
