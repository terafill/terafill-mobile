import React, { useMemo, memo } from "react";
import { Text, StyleSheet, TextInput, Image, View } from "react-native";
import { Padding, Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const TextInputCard = memo(
  ({ label, passwordInput, placeholder, value, frame1MarginTop }) => {
    const inputBoxStyle = useMemo(() => {
      return {
        ...getStyleValue("marginTop", frame1MarginTop),
      };
    }, [frame1MarginTop]);

    return (
      <View style={[styles.inputbox, styles.iconxsmallFlexBox, inputBoxStyle]}>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.inputboxinnerParent}>
          <TextInput
            style={styles.inputboxinner}
            placeholder={placeholder}
            keyboardType="default"
            placeholderTextColor="#333"
            secureTextEntry={value}
          />
          <View style={styles.buttonderivativemedium}>
            <View style={[styles.buttonroot, styles.buttonrootFlexBox]}>
              <View style={[styles.iconxsmall, styles.iconxsmallFlexBox]}>
                <Image
                  style={styles.materialSymbolsfileCopyOutIcon}
                  resizeMode="cover"
                  source={require("../assets/materialsymbolsfilecopyoutline.png")}
                />
              </View>
              <Text style={[styles.label1, styles.labelTypo]}>Copy</Text>
            </View>
          </View>
          <View style={styles.buttonderivativemedium}>
            <View style={styles.buttonrootFlexBox}>
              <View style={[styles.iconxsmall1, styles.iconxsmallFlexBox]}>
                <Image
                  style={styles.materialSymbolsfileCopyOutIcon}
                  resizeMode="cover"
                  source={require("../assets/mdireload.png")}
                />
              </View>
              <Text style={[styles.label2, styles.labelTypo]}>Cancel</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  iconxsmallFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  buttonrootFlexBox: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
    borderRadius: Border.br_xs,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  labelTypo: {
    marginLeft: 8,
    textAlign: "center",
    fontFamily: FontFamily.labelMediumMedium,
    fontWeight: "500",
    lineHeight: 24,
    fontSize: FontSize.labelMediumMedium_size,
    display: "none",
    textTransform: "capitalize",
  },
  label: {
    fontSize: FontSize.labelBaseBold_size,
    lineHeight: 16,
    fontWeight: "700",
    fontFamily: FontFamily.labelBaseBold,
    textAlign: "left",
    display: "flex",
    height: 14,
    color: Color.black,
    textTransform: "capitalize",
    alignSelf: "stretch",
    alignItems: "center",
  },
  inputboxinner: {
    flex: 1,
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 0.2,
    paddingLeft: Padding.p_9xs,
    flexDirection: "row",
    borderRadius: Border.br_3xs,
  },
  materialSymbolsfileCopyOutIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  iconxsmall: {
    flexDirection: "row",
    overflow: "hidden",
  },
  label1: {
    color: Color.black,
  },
  buttonroot: {
    backgroundColor: Color.gray_300,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
  },
  buttonderivativemedium: {
    marginLeft: 1,
    display: "none",
    flexDirection: "row",
    alignItems: "center",
  },
  iconxsmall1: {
    flexDirection: "row",
  },
  label2: {
    color: Color.tomato,
  },
  inputboxinnerParent: {
    marginTop: 1,
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
  },
  inputbox: {
    width: 327,
    height: 47,
    paddingHorizontal: Padding.p_6xs,
    paddingVertical: Padding.p_11xs,
    overflow: "hidden",
    borderRadius: Border.br_3xs,
  },
});

export default TextInputCard;
