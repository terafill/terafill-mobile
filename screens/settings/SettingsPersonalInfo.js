import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, Border, FontFamily, Color, FontSize } from "../../GlobalStyles";

const SettingsPersonalInfo = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.settingspersonalInfo, styles.iconLayout]}>
      <View style={[styles.settingslist, styles.settingslistFlexBox]}>
        <View style={styles.profileheader}>
          <Image
            style={styles.iconoirprofileCircle}
            resizeMode="cover"
            source={require("../../assets/iconoirprofilecircle.png")}
          />
          <Text style={styles.welcomeLeonardo}>Welcome Leonardo</Text>
        </View>
        <View style={[styles.inputbox, styles.inputboxFlexBox]}>
          <Text style={styles.label}>Email</Text>
          <View style={styles.inputboxinnerParent}>
            <View style={styles.inputboxinner}>
              <Text style={[styles.enterYourData, styles.label1Typo]}>
                harshit@keylance.in
              </Text>
            </View>
            <View style={styles.buttonderivativemedium}>
              <View style={[styles.buttonroot, styles.navbarSpaceBlock]}>
                <Image
                  style={styles.iconxsmall}
                  resizeMode="cover"
                  source={require("../../assets/iconxsmall.png")}
                />
                <Text style={[styles.label1, styles.label1Typo]}>Edit</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.inputbox1, styles.inputboxFlexBox]}>
          <Text style={styles.label}>First Name</Text>
          <View style={styles.inputboxinnerGroup}>
            <View style={styles.inputboxinner}>
              <Text style={[styles.enterYourData, styles.label1Typo]}>
                John
              </Text>
            </View>
            <View style={styles.buttonderivativemedium}>
              <View style={[styles.buttonroot, styles.navbarSpaceBlock]}>
                <Image
                  style={styles.iconxsmall}
                  resizeMode="cover"
                  source={require("../../assets/iconxsmall5.png")}
                />
                <Text style={[styles.label1, styles.label1Typo]}>Edit</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.inputbox1, styles.inputboxFlexBox]}>
          <Text style={styles.label}>Last Name</Text>
          <View style={styles.inputboxinnerGroup}>
            <View style={styles.inputboxinner}>
              <Text style={[styles.enterYourData, styles.label1Typo]}>Doe</Text>
            </View>
            <View style={styles.buttonderivativemedium}>
              <View style={[styles.buttonroot, styles.navbarSpaceBlock]}>
                <Image
                  style={styles.iconxsmall}
                  resizeMode="cover"
                  source={require("../../assets/iconxsmall5.png")}
                />
                <Text style={[styles.label1, styles.label1Typo]}>Edit</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.inputbox1, styles.inputboxFlexBox]}>
          <Text style={styles.label}>Birthday</Text>
          <View style={styles.inputboxinnerGroup}>
            <View style={styles.inputboxinner}>
              <Text style={[styles.enterYourData, styles.label1Typo]}>
                01-01-2001
              </Text>
            </View>
            <View style={styles.buttonderivativemedium}>
              <View style={[styles.buttonroot, styles.navbarSpaceBlock]}>
                <Image
                  style={styles.iconxsmall}
                  resizeMode="cover"
                  source={require("../../assets/iconxsmall5.png")}
                />
                <Text style={[styles.label1, styles.label1Typo]}>Edit</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.inputbox1, styles.inputboxFlexBox]}>
          <Text style={styles.label}>Gender</Text>
          <View style={styles.inputboxinnerGroup}>
            <View style={styles.inputboxinner}>
              <Text style={[styles.enterYourData, styles.label1Typo]}>
                Male
              </Text>
            </View>
            <View style={styles.buttonderivativemedium}>
              <View style={[styles.buttonroot, styles.navbarSpaceBlock]}>
                <Image
                  style={styles.iconxsmall}
                  resizeMode="cover"
                  source={require("../../assets/iconxsmall5.png")}
                />
                <Text style={[styles.label1, styles.label1Typo]}>Edit</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.inputbox1, styles.inputboxFlexBox]}>
          <Text style={styles.label}>Phone Number</Text>
          <View style={styles.inputboxinnerGroup}>
            <View style={styles.inputboxinner}>
              <Text style={[styles.enterYourData, styles.label1Typo]}>
                00-000-00000
              </Text>
            </View>
            <View style={styles.buttonderivativemedium}>
              <View style={[styles.buttonroot, styles.navbarSpaceBlock]}>
                <Image
                  style={styles.iconxsmall}
                  resizeMode="cover"
                  source={require("../../assets/iconxsmall5.png")}
                />
                <Text style={[styles.label1, styles.label1Typo]}>Edit</Text>
              </View>
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
  settingslistFlexBox: {
    flex: 1,
    alignItems: "center",
  },
  inputboxFlexBox: {
    marginTop: 32,
    paddingVertical: Padding.p_11xs,
    borderRadius: Border.br_3xs,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  label1Typo: {
    fontFamily: FontFamily.labelMediumMedium,
    fontWeight: "500",
    lineHeight: 24,
    textTransform: "capitalize",
  },
  navbarSpaceBlock: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
    alignItems: "center",
  },
  iconbaseLayout: {
    height: 40,
    width: 40,
  },
  iconoirprofileCircle: {
    width: 121,
    height: 121,
    overflow: "hidden",
  },
  welcomeLeonardo: {
    fontSize: 23,
    lineHeight: 26,
    width: 304,
    height: 53,
    display: "flex",
    color: Color.fontDark,
    fontFamily: FontFamily.labelBaseBold,
    fontWeight: "700",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  profileheader: {
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontSize: FontSize.labelBaseBold_size,
    lineHeight: 16,
    height: 14,
    textAlign: "left",
    textTransform: "capitalize",
    display: "flex",
    color: Color.fontDark,
    fontFamily: FontFamily.labelBaseBold,
    fontWeight: "700",
    alignSelf: "stretch",
    alignItems: "center",
  },
  enterYourData: {
    fontSize: FontSize.labelLargeMedium_size,
    color: Color.backgroundLightBlack,
    textAlign: "left",
  },
  inputboxinner: {
    paddingLeft: Padding.p_9xs,
    flexDirection: "row",
    borderRadius: Border.br_3xs,
    flex: 1,
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
    fontWeight: "500",
    lineHeight: 24,
  },
  buttonroot: {
    borderRadius: Border.br_xs,
    justifyContent: "center",
  },
  buttonderivativemedium: {
    marginLeft: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  inputboxinnerParent: {
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
  },
  inputbox: {
    height: 59,
    paddingHorizontal: Padding.p_5xs,
  },
  inputboxinnerGroup: {
    marginTop: 1,
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
  },
  inputbox1: {
    paddingHorizontal: Padding.p_6xs,
  },
  settingslist: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_5xs,
    alignSelf: "stretch",
    alignItems: "center",
  },
  vectorIcon: {
    width: 39,
    height: 39,
  },
  iconbase: {
    padding: 0,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  vectorIcon1: {
    width: 29,
    height: 39,
  },
  iconbase1: {
    padding: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  vectorIcon3: {
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
  settingspersonalInfo: {
    backgroundColor: Color.white,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    height: 800,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
  },
});

export default SettingsPersonalInfo;
