import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontFamily, Color, Border, Padding } from "../GlobalStyles";

const SupportPopUpNewItem = () => {
  return (
    <View style={styles.supportpopupnewitem}>
      <Text style={[styles.supportRequestSent, styles.submitTypo]}>
        Support Request Sent!
      </Text>
      <View style={styles.submitbutton}>
        <Text style={[styles.submit, styles.submitTypo]}>OK</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  submitTypo: {
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.sourceSansProBold,
    fontWeight: "700",
    fontSize: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  supportRequestSent: {
    color: Color.fontDark,
    width: 238,
    height: 43,
  },
  submit: {
    color: Color.white,
    height: 24,
    flex: 1,
    textAlign: "center",
    fontFamily: FontFamily.sourceSansProBold,
    fontWeight: "700",
    fontSize: 20,
  },
  submitbutton: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.backgroundBlue,
    width: 78,
    height: 47,
    flexDirection: "row",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_sm,
    marginTop: 32,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  supportpopupnewitem: {
    borderRadius: Border.br_base,
    backgroundColor: Color.gray_100,
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    width: "100%",
    height: 172,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_7xl,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
});

export default SupportPopUpNewItem;
