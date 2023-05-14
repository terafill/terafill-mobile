import * as React from "react";
import {
  Text,
  StyleSheet,
  TextInput,
  Image,
  View,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Padding, FontSize, Color, Border } from "../../GlobalStyles";

const SettingsSecurityPassword = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.settingssecuritypassword, styles.iconLayout]}>
      <View
        style={[styles.innersettingsframe, styles.innersettingsframeFlexBox]}
      >
        <Text style={[styles.changeMasterPassword, styles.labelTypo]}>
          Change master password
        </Text>
        <TextInput
          style={[styles.inputbox, styles.inputboxSpaceBlock]}
          placeholder="Enter current password"
          keyboardType="default"
          secureTextEntry
          placeholderTextColor="#000"
        />
        <TextInput
          style={[styles.inputbox, styles.inputboxSpaceBlock]}
          placeholder="Enter new password"
          keyboardType="default"
          secureTextEntry
          placeholderTextColor="#000"
        />
        <TextInput
          style={[styles.inputbox, styles.inputboxSpaceBlock]}
          placeholder="Re-Enter new password"
          keyboardType="default"
          secureTextEntry
          placeholderTextColor="#000"
        />
        <View
          style={[styles.buttonderivativebaseParent, styles.iconbaseFlexBox]}
        >
          <View style={styles.iconbaseFlexBox}>
            <View style={[styles.buttonroot, styles.buttonrootSpaceBlock]}>
              <Image
                style={styles.iconxsmallLayout}
                resizeMode="cover"
                source={require("../../assets/iconxsmall.png")}
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
                  source={require("../../assets/vector.png")}
                />
              </View>
              <Text style={[styles.label, styles.labelTypo]}>Submit</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.navbar, styles.buttonrootSpaceBlock]}>
        <Pressable
          style={[styles.iconbase, styles.iconbaseFlexBox]}
          onPress={() => navigation.navigate("AppHome")}
        >
          <Image
            style={styles.vectorIcon1}
            resizeMode="cover"
            source={require("../../assets/vector5.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.iconbase1, styles.iconbaseLayout]}
          onPress={() => navigation.navigate("Sync")}
        >
          <Image
            style={styles.vectorIcon2}
            resizeMode="cover"
            source={require("../../assets/vector8.png")}
          />
        </Pressable>
        <View style={[styles.iconbase1, styles.iconbaseLayout]}>
          <Image
            style={styles.vectorIcon1}
            resizeMode="cover"
            source={require("../../assets/vector18.png")}
          />
        </View>
        <Pressable
          style={styles.iconbaseLayout}
          onPress={() => navigation.navigate("Settings")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../../assets/iconbase6.png")}
          />
        </Pressable>
        <View style={[styles.iconbase4, styles.iconbaseLayout]}>
          <Image
            style={styles.vectorIcon4}
            resizeMode="cover"
            source={require("../../assets/vector22.png")}
          />
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
  inputboxSpaceBlock: {
    marginTop: 64,
    justifyContent: "center",
  },
  iconbaseFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonrootSpaceBlock: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
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
  changeMasterPassword: {
    fontSize: FontSize.labelXLargeMedium_size,
    lineHeight: 32,
    color: Color.fontDark,
    display: "flex",
    width: 292,
    height: 66,
    justifyContent: "center",
    alignItems: "center",
  },
  inputbox: {
    borderRadius: Border.br_3xs,
    paddingHorizontal: Padding.p_6xs,
    paddingVertical: Padding.p_11xs,
    alignSelf: "stretch",
    alignItems: "center",
    overflow: "hidden",
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
    paddingHorizontal: Padding.p_base,
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
    paddingHorizontal: Padding.p_base,
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
  settingssecuritypassword: {
    backgroundColor: Color.white,
    height: 800,
    justifyContent: "flex-end",
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
  },
});

export default SettingsSecurityPassword;
