import React, { useMemo, memo } from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const InputContainer = memo(({ label, value, propDisplay }) => {
  const buttonDerivativeMediumStyle = useMemo(() => {
    return {
      ...getStyleValue("display", propDisplay),
    };
  }, [propDisplay]);

  return (
    <View style={[styles.inputbox, styles.inputboxFlexBox]}>
      <Text style={styles.label}>{label}</Text>
      <View style={[styles.inputboxinnerParent, styles.inputboxFlexBox]}>
        <View style={styles.inputboxinner}>
          <Text style={[styles.enterYourData, styles.label1Typo]}>{value}</Text>
        </View>
        <View
          style={[styles.buttonderivativemedium, buttonDerivativeMediumStyle]}
        >
          <View style={[styles.buttonroot, styles.inputboxFlexBox]}>
            <Image
              style={styles.iconxsmall}
              resizeMode="cover"
              source={require("../assets/iconxsmall.png")}
            />
            <Text style={[styles.label1, styles.label1Typo]}>Edit</Text>
          </View>
        </View>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  inputboxFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  label1Typo: {
    fontFamily: FontFamily.labelMediumMedium,
    fontWeight: "500",
    lineHeight: 24,
    textTransform: "capitalize",
  },
  label: {
    fontSize: FontSize.labelBaseBold_size,
    lineHeight: 16,
    fontWeight: "700",
    fontFamily: FontFamily.labelBaseBold,
    color: Color.black,
    display: "flex",
    height: 14,
    textAlign: "left",
    textTransform: "capitalize",
    alignItems: "center",
    alignSelf: "stretch",
  },
  enterYourData: {
    fontSize: FontSize.labelLargeMedium_size,
    color: Color.backgroundLightBlack,
    textAlign: "left",
  },
  inputboxinner: {
    flex: 1,
    paddingLeft: Padding.p_9xs,
    flexDirection: "row",
    borderRadius: Border.br_3xs,
  },
  iconxsmall: {
    width: 24,
    height: 24,
    display: "none",
  },
  label1: {
    fontSize: FontSize.labelMediumMedium_size,
    color: Color.backgroundBlue,
    textAlign: "center",
    marginLeft: 8,
  },
  buttonroot: {
    borderRadius: Border.br_xs,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_5xs,
    flexDirection: "row",
  },
  buttonderivativemedium: {
    marginLeft: 1,
    display: "none",
    flexDirection: "row",
    alignItems: "center",
  },
  inputboxinnerParent: {
    marginTop: 1,
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "center",
  },
  inputbox: {
    overflow: "hidden",
    paddingHorizontal: Padding.p_6xs,
    paddingVertical: Padding.p_11xs,
    marginTop: 32,
    borderRadius: Border.br_3xs,
    alignSelf: "stretch",
    justifyContent: "center",
  },
});

export default InputContainer;
