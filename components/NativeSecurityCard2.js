import React, { useState } from "react";
import {
  StyleProp,
  ViewStyle,
  Image,
  StyleSheet,
  View,
  Text,
  Switch,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const NativeSecurityCard2 = ({ style }) => {
  const navigation = useNavigation();
  const [labelledToggleButtonValue, setLabelledToggleButtonValue] =
    useState(false);

  return (
    <View style={[styles.nativesecuritycard, style]}>
      <View style={styles.cardHeaderFlexBox}>
        <View style={[styles.nativeicon, styles.cardHeaderFlexBox]}>
          <Image
            style={styles.vectorIcon}
            resizeMode="cover"
            source={require("../assets/vector25.png")}
          />
        </View>
        <Text style={[styles.label, styles.labelTypo]}>Fingerprint</Text>
      </View>
      <Pressable
        style={styles.labelledtogglebuttonFlexBox}
        onPress={()=>{navigation.navigate("Security Shield Fingerprint");}}
        >
        <View style={[styles.buttonroot, styles.cardHeaderFlexBox]}>
          <Image
            style={styles.iconxsmall}
            resizeMode="cover"
            source={require("../assets/iconxsmall3.png")}
          />
          <Text style={[styles.label1, styles.labelTypo]}>
            Setup FIngerprint
          </Text>
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
  cardHeaderFlexBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  labelTypo: {
    marginLeft: 8,
    textAlign: "center",
    fontFamily: FontFamily.labelMediumMedium,
    fontWeight: "500",
    textTransform: "capitalize",
    lineHeight: 24,
  },
  labelledtogglebuttonFlexBox: {
    marginTop: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  vectorIcon: {
    width: 22,
    height: 22,
  },
  nativeicon: {
    padding: 1,
  },
  label: {
    fontSize: FontSize.labelLargeMedium_size,
    color: Color.fontDark,
  },
  iconxsmall: {
    width: 24,
    height: 24,
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
    overflow: "hidden",
    padding: Padding.p_base,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default NativeSecurityCard2;
