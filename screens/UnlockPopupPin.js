import * as React from "react";
import {
  Text,
  StyleSheet,
  TextInput,
  View,
  Image,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const UnlockPopupPin = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.unlockpopuppin, styles.textinputFlexBox]}
      onPress={() => navigation.navigate("UnlockPageB")}
    >
      <Text style={styles.unlockWithPin}>UNLOCK WITH PIN</Text>
      <View style={[styles.password, styles.passwordSpaceBlock]}>
        <Text style={[styles.label, styles.hintLayout]}>Enter Pin</Text>
        <View
          style={[styles.passwordinputBaselineEna, styles.buttonrootFlexBox]}
        >
          <TextInput
            style={[styles.textinput, styles.textinputFlexBox]}
            placeholder="9"
            keyboardType="number-pad"
            autoCapitalize="none"
            placeholderTextColor="#383b46"
          />
          <TextInput
            style={[styles.textinput, styles.textinputFlexBox]}
            placeholder="3"
            keyboardType="number-pad"
            autoCapitalize="none"
            placeholderTextColor="#383b46"
          />
          <TextInput
            style={[styles.textinput, styles.textinputFlexBox]}
            placeholder="0"
            keyboardType="number-pad"
            autoCapitalize="none"
            placeholderTextColor="#383b46"
          />
          <TextInput
            style={[styles.textinput, styles.textinputFlexBox]}
            placeholder="5"
            keyboardType="number-pad"
            autoCapitalize="none"
            placeholderTextColor="#383b46"
          />
          <TextInput
            style={[styles.textinput, styles.textinputFlexBox]}
            placeholder="2"
            keyboardType="number-pad"
            autoCapitalize="none"
            placeholderTextColor="#383b46"
          />
          <TextInput
            style={[styles.textinput, styles.textinputFlexBox]}
            placeholder="7"
            keyboardType="number-pad"
            autoCapitalize="none"
            placeholderTextColor="#383b46"
          />
        </View>
        <Text style={[styles.hint, styles.hintLayout]}>
          Supplementary information
        </Text>
      </View>
      <View style={[styles.buttonderivativebase, styles.buttonrootFlexBox]}>
        <View style={[styles.buttonroot, styles.buttonrootFlexBox]}>
          <Image
            style={styles.iconxsmall}
            resizeMode="cover"
            source={require("../assets/iconxsmall2.png")}
          />
          <Text style={[styles.label1, styles.labelTypo]}>
            Unlock using Fingerprint
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  textinputFlexBox: {
    alignItems: "center",
    justifyContent: "center",
  },
  passwordSpaceBlock: {
    marginTop: 32,
    justifyContent: "center",
  },
  hintLayout: {
    width: 309,
    textAlign: "left",
    display: "none",
  },
  buttonrootFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  labelTypo: {
    fontFamily: FontFamily.labelMediumMedium,
    fontWeight: "500",
    textTransform: "capitalize",
    lineHeight: 24,
  },
  unlockWithPin: {
    fontSize: FontSize.largeRegular_size,
    fontWeight: "700",
    fontFamily: FontFamily.sourceSansProBold,
    color: Color.black,
    width: 301,
    textAlign: "center",
  },
  label: {
    fontSize: FontSize.labelLargeMedium_size,
    color: Color.backgroundLightBlack,
    alignItems: "flex-end",
    fontFamily: FontFamily.labelMediumMedium,
    fontWeight: "500",
    textTransform: "capitalize",
    lineHeight: 24,
  },
  textinput: {
    borderRadius: 5,
    backgroundColor: Color.backgroundBackgroundLight,
    width: 43,
    height: 43,
    paddingVertical: 9,
    paddingHorizontal: 14,
    justifyContent: "center",
  },
  passwordinputBaselineEna: {
    alignSelf: "stretch",
    justifyContent: "space-between",
    marginTop: 7.21,
  },
  hint: {
    fontSize: 13,
    lineHeight: 20,
    fontFamily: FontFamily.sourceSansPro,
    color: Color.gray3,
    marginTop: 7.21,
  },
  password: {
    width: 296,
    paddingVertical: 0,
    paddingHorizontal: 14,
  },
  iconxsmall: {
    width: 24,
    height: 24,
    display: "none",
  },
  label1: {
    fontSize: FontSize.labelMediumMedium_size,
    color: Color.backgroundBlue,
    marginLeft: 8,
    textAlign: "center",
  },
  buttonroot: {
    borderRadius: Border.br_xs,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_5xs,
    justifyContent: "center",
  },
  buttonderivativebase: {
    marginTop: 32,
    justifyContent: "center",
  },
  unlockpopuppin: {
    backgroundColor: Color.backgroundLightGray,
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowRadius: 8,
    elevation: 8,
    shadowOpacity: 1,
    flex: 1,
    width: "100%",
    padding: Padding.p_5xs,
    justifyContent: "center",
  },
});

export default UnlockPopupPin;
