import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, FontSize, FontFamily, Color, Border } from "../../GlobalStyles";
import Navbar from "../../components/Navbar";

const SettingsDataGenerator = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.settingsdatagenerator, styles.iconLayout]}>
      <View style={styles.innersettingsframe}>
        <Text style={[styles.generateRandomData, styles.iconbaseFlexBox]}>
          Generate Random Data
        </Text>
        <View style={[styles.inputbox, styles.iconbaseFlexBox]}>
          <Text style={styles.label}>Random Password</Text>
          <View style={[styles.inputboxinnerParent, styles.iconbaseFlexBox]}>
            <View style={styles.inputboxinner}>
              <Text style={styles.enterYourData}>12l3n1s31i2h3o123</Text>
            </View>
            <View style={styles.buttonderivativemedium}>
              <View style={[styles.buttonroot, styles.buttonrootSpaceBlock]}>
                <View style={[styles.iconxsmall, styles.iconbaseFlexBox]}>
                  <Image
                    style={styles.materialSymbolsfileCopyOutIcon}
                    resizeMode="cover"
                    source={require("../../assets/materialsymbolsfilecopyoutline1.png")}
                  />
                </View>
                <Text style={[styles.label1, styles.labelTypo]}>Copy</Text>
              </View>
            </View>
            <View style={styles.buttonderivativemedium}>
              <View style={[styles.buttonroot1, styles.buttonrootSpaceBlock]}>
                <View style={[styles.iconxsmall1, styles.iconbaseFlexBox]}>
                  <Image
                    style={styles.materialSymbolsfileCopyOutIcon}
                    resizeMode="cover"
                    source={require("../../assets/mdireload1.png")}
                  />
                </View>
                <Text style={[styles.label2, styles.labelTypo]}>Cancel</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.inputbox, styles.iconbaseFlexBox]}>
          <Text style={styles.label}>Random Passphrase</Text>
          <View style={[styles.inputboxinnerParent, styles.iconbaseFlexBox]}>
            <View style={styles.inputboxinner}>
              <Text style={styles.enterYourData}>12l3n1s31i2h3o123</Text>
            </View>
            <View style={styles.buttonderivativemedium}>
              <View style={[styles.buttonroot2, styles.buttonrootSpaceBlock]}>
                <View style={[styles.iconxsmall, styles.iconbaseFlexBox]}>
                  <Image
                    style={styles.materialSymbolsfileCopyOutIcon}
                    resizeMode="cover"
                    source={require("../../assets/materialsymbolsfilecopyoutline1.png")}
                  />
                </View>
                <Text style={[styles.label1, styles.labelTypo]}>Copy</Text>
              </View>
            </View>
            <View style={styles.buttonderivativemedium}>
              <View style={[styles.buttonroot1, styles.buttonrootSpaceBlock]}>
                <View style={[styles.iconxsmall1, styles.iconbaseFlexBox]}>
                  <Image
                    style={styles.materialSymbolsfileCopyOutIcon}
                    resizeMode="cover"
                    source={require("../../assets/mdireload1.png")}
                  />
                </View>
                <Text style={[styles.label2, styles.labelTypo]}>Cancel</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.inputbox, styles.iconbaseFlexBox]}>
          <Text style={styles.label}>Random Username</Text>
          <View style={[styles.inputboxinnerParent, styles.iconbaseFlexBox]}>
            <View style={styles.inputboxinner}>
              <Text style={styles.enterYourData}>12l3n1s31i2h3o123</Text>
            </View>
            <View style={styles.buttonderivativemedium}>
              <View style={[styles.buttonroot4, styles.buttonrootSpaceBlock]}>
                <View style={[styles.iconxsmall, styles.iconbaseFlexBox]}>
                  <Image
                    style={styles.materialSymbolsfileCopyOutIcon}
                    resizeMode="cover"
                    source={require("../../assets/materialsymbolsfilecopyoutline1.png")}
                  />
                </View>
                <Text style={[styles.label1, styles.labelTypo]}>Copy</Text>
              </View>
            </View>
            <View style={styles.buttonderivativemedium}>
              <View style={[styles.buttonroot1, styles.buttonrootSpaceBlock]}>
                <View style={[styles.iconxsmall1, styles.iconbaseFlexBox]}>
                  <Image
                    style={styles.materialSymbolsfileCopyOutIcon}
                    resizeMode="cover"
                    source={require("../../assets/mdireload1.png")}
                  />
                </View>
                <Text style={[styles.label2, styles.labelTypo]}>Cancel</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <Navbar />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  iconbaseFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  buttonrootSpaceBlock: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
    alignItems: "center",
  },
  labelTypo: {
    marginLeft: 8,
    display: "none",
    fontSize: FontSize.labelMediumMedium_size,
    lineHeight: 24,
    textAlign: "center",
    fontFamily: FontFamily.labelMediumMedium,
    fontWeight: "500",
    textTransform: "capitalize",
  },
  iconbaseLayout: {
    height: 40,
    width: 40,
  },
  generateRandomData: {
    fontSize: FontSize.labelXLargeMedium_size,
    lineHeight: 32,
    width: 292,
    height: 66,
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.labelMediumMedium,
    fontWeight: "500",
    textTransform: "capitalize",
    justifyContent: "center",
    color: Color.fontDark,
  },
  label: {
    fontSize: FontSize.labelBaseBold_size,
    lineHeight: 16,
    fontWeight: "700",
    fontFamily: FontFamily.labelBaseBold,
    height: 14,
    textAlign: "left",
    alignSelf: "stretch",
    display: "flex",
    color: Color.fontDark,
    textTransform: "capitalize",
    alignItems: "center",
  },
  enterYourData: {
    fontSize: FontSize.labelLargeMedium_size,
    color: Color.backgroundLightBlack,
    lineHeight: 24,
    textAlign: "left",
    fontFamily: FontFamily.labelMediumMedium,
    fontWeight: "500",
    textTransform: "capitalize",
  },
  inputboxinner: {
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 0.2,
    paddingLeft: Padding.p_9xs,
    flexDirection: "row",
    borderRadius: Border.br_3xs,
    flex: 1,
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
    color: Color.fontDark,
    marginLeft: 8,
    display: "none",
    fontSize: FontSize.labelMediumMedium_size,
  },
  buttonroot: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.gray_300,
    paddingHorizontal: Padding.p_base,
    borderRadius: Border.br_xs,
    justifyContent: "center",
  },
  buttonderivativemedium: {
    marginLeft: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  iconxsmall1: {
    flexDirection: "row",
  },
  label2: {
    color: Color.backgroundLightRed,
  },
  buttonroot1: {
    borderRadius: Border.br_xs,
    paddingHorizontal: Padding.p_base,
    justifyContent: "center",
  },
  inputboxinnerParent: {
    marginTop: 1,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  inputbox: {
    width: 360,
    paddingHorizontal: Padding.p_6xs,
    paddingVertical: Padding.p_11xs,
    marginTop: 64,
    borderRadius: Border.br_3xs,
    overflow: "hidden",
  },
  buttonroot2: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.gray_300,
    paddingHorizontal: Padding.p_base,
    borderRadius: Border.br_xs,
    justifyContent: "center",
  },
  buttonroot4: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.gray_300,
    paddingHorizontal: Padding.p_base,
    borderRadius: Border.br_xs,
    justifyContent: "center",
  },
  innersettingsframe: {
    alignItems: "center",
    flex: 1,
  },
  vectorIcon: {
    width: 39,
    height: 39,
  },
  iconbase: {
    padding: 0,
    flexDirection: "row",
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
  settingsdatagenerator: {
    backgroundColor: Color.white,
    height: 800,
    justifyContent: "flex-end",
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
  },
});

export default SettingsDataGenerator;
