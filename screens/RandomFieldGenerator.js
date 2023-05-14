import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { Color, Padding, Border, FontFamily, FontSize } from "../GlobalStyles";

const RandomFieldGenerator = () => {
  return (
    <View style={styles.randomfieldgenerator}>
      <View style={styles.navbar}>
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/icroundhome.png")}
        />
        <Image
          style={[styles.ictwotoneSyncIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/ictwotonesync.png")}
        />
        <Image
          style={[styles.ictwotoneSyncIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/materialsymbolssearch.png")}
        />
        <Image
          style={[styles.ictwotoneSyncIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/materialsymbolssettings.png")}
        />
        <Image
          style={[styles.ictwotoneSyncIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/ictwotonesupportagent.png")}
        />
      </View>
      <Text style={[styles.newRandomPassword, styles.newClr]}>
        NEW RANDOM PASSWORD
      </Text>
      <View style={[styles.setuplinkbutton, styles.setuplinkbuttonShadowBox]}>
        <Text style={[styles.sendSetupLink, styles.copyTypo]}>
          REGENERATE PASSWORD
        </Text>
      </View>
      <View style={[styles.setuplinkbutton1, styles.setuplinkbuttonShadowBox]}>
        <Text style={[styles.sendSetupLink, styles.copyTypo]}>
          REGENERATE USERNAME
        </Text>
      </View>
      <View style={[styles.generatorinput, styles.generatorinputFlexBox]}>
        <View style={styles.copybutton}>
          <View style={styles.copybuttonPosition}>
            <View style={styles.copybuttonShadowBox} />
            <Image
              style={styles.materialSymbolsfileCopyOutIcon}
              resizeMode="cover"
              source={require("../assets/materialsymbolsfilecopyoutline1.png")}
            />
            <Text style={[styles.copy, styles.copyTypo]}>COPY</Text>
          </View>
        </View>
      </View>
      <Text style={[styles.newRandomUsername, styles.newClr]}>
        NEW RANDOM USERNAME
      </Text>
      <View style={[styles.generatorinput1, styles.generatorinputFlexBox]}>
        <View style={styles.copybutton}>
          <View style={styles.copybuttonPosition}>
            <View style={styles.copybuttonShadowBox} />
            <Image
              style={styles.materialSymbolsfileCopyOutIcon}
              resizeMode="cover"
              source={require("../assets/materialsymbolsfilecopyoutline1.png")}
            />
            <Text style={[styles.copy, styles.copyTypo]}>COPY</Text>
          </View>
        </View>
      </View>
      <Text style={[styles.y00fvcga1r0x1iu, styles.cleverfox24Typo]}>
        Y00FVcGa1R0X1IU^
      </Text>
      <Text style={[styles.cleverfox24, styles.cleverfox24Typo]}>
        cleverfox24
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    height: 52,
    width: 52,
    overflow: "hidden",
  },
  newClr: {
    color: Color.black,
    position: "absolute",
  },
  setuplinkbuttonShadowBox: {
    paddingVertical: Padding.p_sm,
    paddingHorizontal: 0,
    width: 271,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.backgroundBlue,
    borderRadius: Border.br_xs,
    flexDirection: "row",
    position: "absolute",
  },
  copyTypo: {
    fontSize: 20,
    fontFamily: FontFamily.sourceSansProBold,
    fontWeight: "700",
  },
  generatorinputFlexBox: {
    justifyContent: "center",
    paddingVertical: Padding.p_7xs,
    paddingHorizontal: Padding.p_3xs,
    width: 318,
    backgroundColor: Color.gray_100,
    borderRadius: Border.br_10xs,
    alignItems: "flex-end",
    position: "absolute",
  },
  cleverfox24Typo: {
    height: 37,
    width: 219,
    fontSize: 20,
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.sourceSansProBold,
    fontWeight: "700",
    position: "absolute",
  },
  ictwotoneSyncIcon: {
    marginLeft: 16,
  },
  navbar: {
    top: 725,
    left: 0,
    backgroundColor: Color.black,
    width: 360,
    height: 75,
    paddingHorizontal: Padding.p_lgi,
    paddingVertical: Padding.p_5xs,
    alignItems: "flex-end",
    flexDirection: "row",
    position: "absolute",
  },
  newRandomPassword: {
    top: 65,
    left: 38,
    textAlign: "center",
    fontFamily: FontFamily.sourceSansProBold,
    fontWeight: "700",
    fontSize: FontSize.largeRegular_size,
    color: Color.black,
  },
  sendSetupLink: {
    color: Color.white,
    height: 29,
    textAlign: "center",
    flex: 1,
    fontSize: 20,
  },
  setuplinkbutton: {
    top: 220,
    left: 48,
  },
  setuplinkbutton1: {
    top: 546,
    left: 49,
  },
  copybuttonShadowBox: {
    elevation: 5,
    shadowRadius: 5,
    backgroundColor: Color.whitesmoke_100,
    borderRadius: Border.br_6xs,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
    width: "100%",
  },
  materialSymbolsfileCopyOutIcon: {
    height: "97.22%",
    width: "40.23%",
    top: "2.78%",
    left: "59.77%",
    maxWidth: "100%",
    maxHeight: "100%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  copy: {
    top: "19.44%",
    left: "7.2%",
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  copybuttonPosition: {
    left: "0%",
    top: "0%",
    height: "100%",
    bottom: "0%",
    right: "0%",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
    width: "100%",
  },
  copybutton: {
    width: 87,
    height: 36,
  },
  generatorinput: {
    top: 122,
    left: 25,
  },
  newRandomUsername: {
    top: 399,
    left: 40,
    textAlign: "center",
    fontFamily: FontFamily.sourceSansProBold,
    fontWeight: "700",
    fontSize: FontSize.largeRegular_size,
    color: Color.black,
  },
  generatorinput1: {
    top: 456,
    left: 26,
  },
  y00fvcga1r0x1iu: {
    top: 130,
    left: 31,
  },
  cleverfox24: {
    top: 469,
    left: 25,
  },
  randomfieldgenerator: {
    backgroundColor: Color.white,
    height: 800,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default RandomFieldGenerator;
