import React, { memo } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Border, FontFamily, Color } from "../GlobalStyles";

const InputBox = memo(({ onClose }) => {
  return (
    <View style={[styles.inputbox, styles.inputboxFlexBox]}>
      <View style={[styles.inputboxinner, styles.inputboxFlexBox]}>
        <Text style={styles.search}> 🔎 Search ...</Text>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  inputboxFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: Border.br_3xs,
  },
  search: {
    fontSize: 23,
    fontWeight: "700",
    fontFamily: FontFamily.labelBaseBold,
    color: "#d1d1d1",
    textAlign: "left",
    flex: 1,
  },
  inputboxinner: {
    backgroundColor: Color.backgroundLightGray,
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 0.2,
    flex: 1,
  },
  inputbox: {
    width: 328,
    overflow: "hidden",
    maxWidth: "100%",
    maxHeight: "100%",
  },
});

export default InputBox;
