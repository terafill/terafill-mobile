import React, { memo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Border, FontFamily, Color, FontSize, Padding } from "../GlobalStyles";

const SupportPopUp = memo(() => {
  return (
    <View style={styles.supportpopup}>
      <View style={[styles.supportpopupChild, styles.submitbuttonShadowBox]} />
      <Text style={[styles.hiIWould, styles.submitFlexBox]}>{`HI,

I would like to request password breach reports on monthly basis.

Regards,
Richards`}</Text>
      <View style={[styles.submitbutton, styles.submitbuttonShadowBox]}>
        <Text style={[styles.submit, styles.submitFlexBox]}>SUBMIT</Text>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  submitbuttonShadowBox: {
    width: 264,
    borderRadius: Border.br_xs,
    left: 20,
    position: "absolute",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  submitFlexBox: {
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.sourceSansProRegular,
  },
  supportpopupChild: {
    top: 26,
    height: 217,
    backgroundColor: Color.gray_100,
    borderRadius: Border.br_xs,
    left: 20,
  },
  hiIWould: {
    top: 50,
    left: 31,
    fontSize: FontSize.size_lg,
    color: Color.black,
    textAlign: "left",
    width: 239,
    height: 159,
    position: "absolute",
    display: "flex",
    fontFamily: FontFamily.sourceSansProRegular,
  },
  submit: {
    fontSize: 20,
    color: Color.white,
    textAlign: "center",
    justifyContent: "center",
    height: 24,
    flex: 1,
  },
  submitbutton: {
    top: 265,
    backgroundColor: Color.backgroundBlue,
    height: 49,
    flexDirection: "row",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_sm,
  },
  supportpopup: {
    borderRadius: Border.br_base,
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    width: "100%",
    height: 340,
    flex: 1,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.gray_100,
  },
});

export default SupportPopUp;
