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
import { FontFamily, Padding, FontSize, Color, Border } from "../../GlobalStyles";

const SettingsSecurityShieldPin = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.settingssecurityshieldpin, styles.iconLayout]}>
      <View
        style={[styles.innersettingsframe, styles.innersettingsframeFlexBox]}
      >
        <Text style={[styles.setupPin, styles.labelTypo]}>Setup Pin</Text>
        <View style={styles.passwordParent}>
          <TextInput
            style={[styles.password, styles.passwordSpaceBlock]}
            placeholder="Enter Pin"
            keyboardType="default"
            placeholderTextColor="#333"
          />
          <TextInput
            style={[styles.password1, styles.passwordSpaceBlock]}
            placeholder="Re-enter Pin"
            keyboardType="default"
            placeholderTextColor="#333"
          />
        </View>
        <View
          style={[styles.buttonderivativebaseParent, styles.iconbaseFlexBox]}
        >
          <View style={styles.iconbaseFlexBox}>
            <View style={[styles.buttonroot, styles.buttonrootSpaceBlock]}>
              <Image
                style={styles.iconxsmallLayout}
                resizeMode="cover"
                source={require("../../assets/iconxsmall2.png")}
              />
              <Text style={[styles.label, styles.labelTypo]}>Cancel</Text>
            </View>
          </View>
          <View style={[styles.buttonderivativebase1, styles.iconbaseFlexBox]}>
            <View style={[styles.buttonroot1, styles.buttonrootSpaceBlock]}>
              <View style={[styles.iconxsmall1, styles.iconxsmallLayout]}>
                <Image
                  style={styles.vectorIcon}
                  resizeMode="cover"
                  source={require("../../assets/vector21.png")}
                />
              </View>
              <Text style={[styles.label, styles.labelTypo]}>Submit</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  innersettingsframeFlexBox: {
    flex: 1,
    alignItems: "center",
  },
  labelTypo: {
    textAlign: "center",
    fontFamily: FontFamily.labelMediumMedium,
    fontWeight: "500",
    textTransform: "capitalize",
  },
  passwordSpaceBlock: {
    paddingVertical: 0,
    width: 296,
  },
  iconbaseFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonrootSpaceBlock: {
    paddingVertical: Padding.p_5xs,
    flexDirection: "row",
    paddingHorizontal: Padding.p_base,
    alignItems: "center",
  },
  iconxsmallLayout: {
    display: "none",
    height: 24,
    width: 24,
  },
  iconbaseLayout: {
    height: 40,
    width: 40,
  },
  setupPin: {
    fontSize: FontSize.labelXLargeMedium_size,
    lineHeight: 32,
    color: Color.fontDark,
    display: "flex",
    width: 292,
    height: 66,
    justifyContent: "center",
    alignItems: "center",
  },
  password: {
    paddingHorizontal: Padding.p_base,
    paddingVertical: 0,
    width: 296,
  },
  password1: {
    paddingHorizontal: 14,
    marginTop: 48,
    paddingVertical: 0,
    width: 296,
    justifyContent: "center",
  },
  passwordParent: {
    marginTop: 64,
  },
  label: {
    fontSize: FontSize.labelMediumMedium_size,
    lineHeight: 24,
    color: Color.white,
    marginLeft: 8,
  },
  buttonroot: {
    backgroundColor: Color.backgroundLightRed,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_xs,
    paddingVertical: Padding.p_5xs,
    justifyContent: "center",
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
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_xs,
    paddingVertical: Padding.p_5xs,
    justifyContent: "center",
  },
  buttonderivativebase1: {
    marginLeft: 32,
  },
  buttonderivativebaseParent: {
    marginTop: 64,
    justifyContent: "center",
  },
  innersettingsframe: {
    paddingHorizontal: Padding.p_13xl,
    paddingTop: Padding.p_13xl,
    alignSelf: "stretch",
    alignItems: "center",
    overflow: "hidden",
  },
  vectorIcon1: {
    width: 39,
    height: 39,
  },
  iconbase: {
    padding: 0,
    justifyContent: "center",
    overflow: "hidden",
  },
  vectorIcon2: {
    width: 29,
    height: 39,
  },
  iconbase1: {
    padding: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  vectorIcon4: {
    height: 36,
    width: 40,
  },
  iconbase4: {
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  navbar: {
    backgroundColor: Color.fontDark,
    justifyContent: "space-between",
    alignSelf: "stretch",
  },
  settingssecurityshieldpin: {
    backgroundColor: Color.white,
    height: 800,
    justifyContent: "flex-end",
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
  },
});

export default SettingsSecurityShieldPin;
