import * as React from "react";
import { View, Text, StyleSheet, TextInput, Image } from "react-native";
import { Padding, Border, FontFamily, Color, FontSize } from "../GlobalStyles";

const BlockAccountPopup = ({ onClose }) => {
  return (
    <View style={styles.blockAccountPopup}>
      <Text style={styles.blockAccountAnd}>
        Block Account and all synced devices
      </Text>
      <TextInput
        style={[styles.inputbox, styles.inputboxSpaceBlock]}
        placeholder="Enter new password"
        keyboardType="default"
        secureTextEntry
        placeholderTextColor="#000"
      />
      <View
        style={[
          styles.buttonderivativebaseParent,
          styles.buttonderivativebaseFlexBox,
        ]}
      >
        <View style={styles.buttonderivativebaseFlexBox}>
          <View style={[styles.buttonroot, styles.buttonrootShadowBox]}>
            <Image
              style={styles.iconxsmallLayout}
              resizeMode="cover"
              source={require("../assets/iconxsmall.png")}
            />
            <Text style={styles.label}>Cancel</Text>
          </View>
        </View>
        <View
          style={[
            styles.buttonderivativebase1,
            styles.buttonderivativebaseFlexBox,
          ]}
        >
          <View style={[styles.buttonroot1, styles.buttonrootShadowBox]}>
            <View style={[styles.iconxsmall1, styles.iconxsmallLayout]}>
              <Image
                style={styles.vectorIcon}
                resizeMode="cover"
                source={require("../assets/vector.png")}
              />
            </View>
            <Text style={styles.label}>Confirm</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputboxSpaceBlock: {
    marginTop: 32,
    justifyContent: "center",
  },
  buttonderivativebaseFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonrootShadowBox: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
    borderRadius: Border.br_xs,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  iconxsmallLayout: {
    display: "none",
    height: 24,
    width: 24,
  },
  blockAccountAnd: {
    fontSize: 20,
    fontWeight: "700",
    fontFamily: FontFamily.sourceSansProBold,
    color: Color.fontDark,
    display: "flex",
    width: 238,
    height: 43,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  inputbox: {
    alignSelf: "stretch",
    borderRadius: Border.br_3xs,
    overflow: "hidden",
    paddingHorizontal: Padding.p_6xs,
    paddingVertical: Padding.p_11xs,
    alignItems: "center",
  },
  label: {
    fontSize: FontSize.labelMediumMedium_size,
    lineHeight: 24,
    textTransform: "capitalize",
    fontWeight: "500",
    fontFamily: FontFamily.labelMediumMedium,
    color: Color.white,
    marginLeft: 8,
    textAlign: "center",
  },
  buttonroot: {
    backgroundColor: Color.backgroundLightRed,
  },
  vectorIcon: {
    width: 20,
    height: 20,
  },
  iconxsmall1: {
    padding: Padding.p_11xs,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonroot1: {
    backgroundColor: Color.backgroundBlue,
  },
  buttonderivativebase1: {
    marginLeft: 32,
  },
  buttonderivativebaseParent: {
    marginTop: 32,
    justifyContent: "center",
  },
  blockAccountPopup: {
    borderRadius: Border.br_base,
    backgroundColor: Color.gray_100,
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_7xl,
    maxWidth: "100%",
    maxHeight: "100%",
    justifyContent: "center",
    alignItems: "center",
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

export default BlockAccountPopup;
