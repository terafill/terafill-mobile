import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { FontFamily, Color, Padding, Border, FontSize } from "../../GlobalStyles";

const SettingsSyncLinkSent = () => {
  return (
    <View style={styles.settingssynclinksent}>
      <View style={styles.navbar}>
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../../assets/icroundhome.png")}
        />
        <Image
          style={[styles.ictwotoneSyncIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../../assets/ictwotonesync1.png")}
        />
        <Image
          style={[styles.ictwotoneSyncIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../../assets/materialsymbolssearch.png")}
        />
        <Image
          style={[styles.ictwotoneSyncIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../../assets/materialsymbolssettings1.png")}
        />
        <Image
          style={[styles.ictwotoneSyncIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../../assets/ictwotonesupportagent.png")}
        />
      </View>
      <View style={styles.clarityqrCodeLine}>
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout3]}
          resizeMode="cover"
          source={require("../../assets/vector23.png")}
        />
        <Image
          style={[styles.vectorIcon1, styles.vectorIconPosition3]}
          resizeMode="cover"
          source={require("../../assets/vector24.png")}
        />
        <Image
          style={[styles.vectorIcon2, styles.vectorIconLayout2]}
          resizeMode="cover"
          source={require("../../assets/vector25.png")}
        />
        <Image
          style={[styles.vectorIcon3, styles.vectorIconLayout2]}
          resizeMode="cover"
          source={require("../../assets/vector26.png")}
        />
        <Image
          style={styles.vectorIcon4}
          resizeMode="cover"
          source={require("../../assets/vector27.png")}
        />
        <Image
          style={[styles.vectorIcon5, styles.vectorIconPosition2]}
          resizeMode="cover"
          source={require("../../assets/vector28.png")}
        />
        <Image
          style={[styles.vectorIcon6, styles.vectorIconPosition1]}
          resizeMode="cover"
          source={require("../../assets/vector29.png")}
        />
        <Image
          style={[styles.vectorIcon7, styles.vectorIconLayout1]}
          resizeMode="cover"
          source={require("../../assets/vector30.png")}
        />
        <Image
          style={styles.vectorIcon8}
          resizeMode="cover"
          source={require("../../assets/vector31.png")}
        />
        <Image
          style={[styles.vectorIcon9, styles.vectorIconPosition2]}
          resizeMode="cover"
          source={require("../../assets/vector32.png")}
        />
        <Image
          style={styles.vectorIcon10}
          resizeMode="cover"
          source={require("../../assets/vector33.png")}
        />
        <Image
          style={[styles.vectorIcon11, styles.vectorIconLayout1]}
          resizeMode="cover"
          source={require("../../assets/vector34.png")}
        />
        <Image
          style={[styles.vectorIcon12, styles.vectorIconLayout]}
          resizeMode="cover"
          source={require("../../assets/vector35.png")}
        />
        <Image
          style={[styles.vectorIcon13, styles.vectorIconLayout3]}
          resizeMode="cover"
          source={require("../../assets/vector36.png")}
        />
        <Image
          style={[styles.vectorIcon14, styles.vectorIconLayout]}
          resizeMode="cover"
          source={require("../../assets/vector37.png")}
        />
        <Image
          style={[styles.vectorIcon15, styles.vectorIconLayout]}
          resizeMode="cover"
          source={require("../../assets/vector38.png")}
        />
        <Image
          style={[styles.vectorIcon16, styles.vectorIconPosition]}
          resizeMode="cover"
          source={require("../../assets/vector39.png")}
        />
        <Image
          style={[styles.vectorIcon17, styles.vectorIconPosition]}
          resizeMode="cover"
          source={require("../../assets/vector40.png")}
        />
        <Image
          style={[styles.vectorIcon18, styles.vectorIconLayout3]}
          resizeMode="cover"
          source={require("../../assets/vector41.png")}
        />
        <Text style={styles.setupdLinkSent}>SETUPD LINK SENT</Text>
      </View>
      <Text style={[styles.scanQrCode, styles.orTypo]}>{`SCAN QR CODE
FROM KEYLANCE APP`}</Text>
      <Text style={[styles.or, styles.orTypo]}>OR</Text>
      <View style={styles.popupnewitem}>
        <Text style={[styles.setupLinkSent, styles.submitFlexBox]}>
          SETUP LINK SENT!
        </Text>
        <View style={[styles.submitbutton, styles.submitbuttonShadowBox]}>
          <Text style={[styles.submit, styles.submitTypo]}>OK</Text>
        </View>
      </View>
      <View style={[styles.setuplinkbutton, styles.submitbuttonShadowBox]}>
        <Text style={[styles.sendSetupLink, styles.submitTypo]}>
          Send Setup Link
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    height: 52,
    width: 52,
    overflow: "hidden",
  },
  vectorIconLayout3: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIconPosition3: {
    top: "66.67%",
    bottom: "11.11%",
  },
  vectorIconLayout2: {
    left: "66.67%",
    right: "11.11%",
    maxHeight: "100%",
    maxWidth: "100%",
    width: "22.22%",
    height: "22.22%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIconPosition2: {
    right: "61.11%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIconPosition1: {
    right: "50%",
    left: "38.89%",
    width: "11.11%",
  },
  vectorIconLayout1: {
    left: "38.89%",
    height: "11.11%",
    right: "38.89%",
    maxHeight: "100%",
    maxWidth: "100%",
    width: "22.22%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIconLayout: {
    width: "16.67%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIconPosition: {
    bottom: "22.22%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  orTypo: {
    fontFamily: FontFamily.sourceSansProBold,
    fontWeight: "700",
    textAlign: "center",
    color: Color.black,
  },
  submitFlexBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  submitbuttonShadowBox: {
    paddingVertical: Padding.p_sm,
    paddingHorizontal: 0,
    backgroundColor: Color.backgroundBlue,
    borderRadius: Border.br_xs,
    flexDirection: "row",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  submitTypo: {
    color: Color.white,
    fontFamily: FontFamily.sourceSansProBold,
    fontWeight: "700",
    textAlign: "center",
    fontSize: 20,
    flex: 1,
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
  vectorIcon: {
    left: "11.11%",
    height: "22.22%",
    bottom: "66.67%",
    top: "11.11%",
    right: "66.67%",
    width: "22.22%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  vectorIcon1: {
    bottom: "11.11%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
    left: "11.11%",
    height: "22.22%",
    right: "66.67%",
    width: "22.22%",
  },
  vectorIcon2: {
    bottom: "11.11%",
    top: "66.67%",
  },
  vectorIcon3: {
    bottom: "66.67%",
    top: "11.11%",
  },
  vectorIcon4: {
    top: "22.22%",
    right: "44.44%",
    left: "44.44%",
    width: "11.11%",
    height: "11.11%",
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "66.67%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon5: {
    top: "33.33%",
    bottom: "61.11%",
    left: "33.33%",
    width: "5.56%",
    height: "5.56%",
  },
  vectorIcon6: {
    bottom: "55.56%",
    left: "38.89%",
    top: "38.89%",
    height: "5.56%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon7: {
    bottom: "77.78%",
    right: "38.89%",
    left: "38.89%",
    top: "11.11%",
    height: "11.11%",
  },
  vectorIcon8: {
    right: "83.33%",
    bottom: "50%",
    top: "38.89%",
    width: "5.56%",
    height: "11.11%",
    maxHeight: "100%",
    maxWidth: "100%",
    left: "11.11%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon9: {
    width: "27.78%",
    bottom: "38.89%",
    top: "38.89%",
    left: "11.11%",
    height: "22.22%",
  },
  vectorIcon10: {
    top: "27.78%",
    right: "27.78%",
    left: "50%",
    bottom: "50%",
    maxHeight: "100%",
    maxWidth: "100%",
    width: "22.22%",
    height: "22.22%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon11: {
    top: "77.78%",
    right: "38.89%",
    left: "38.89%",
    bottom: "11.11%",
  },
  vectorIcon12: {
    top: "44.44%",
    height: "16.67%",
    bottom: "38.89%",
    right: "38.89%",
    left: "44.44%",
  },
  vectorIcon13: {
    left: "83.33%",
    top: "55.56%",
    bottom: "38.89%",
    width: "5.56%",
    height: "5.56%",
    right: "11.11%",
  },
  vectorIcon14: {
    right: "22.22%",
    left: "61.11%",
    top: "55.56%",
    bottom: "38.89%",
    height: "5.56%",
  },
  vectorIcon15: {
    bottom: "44.44%",
    left: "72.22%",
    height: "16.67%",
    top: "38.89%",
    right: "11.11%",
  },
  vectorIcon16: {
    top: "61.11%",
    left: "55.56%",
    height: "16.67%",
    right: "38.89%",
    width: "5.56%",
  },
  vectorIcon17: {
    top: "55.56%",
    left: "38.89%",
    right: "50%",
    width: "11.11%",
    height: "22.22%",
    bottom: "22.22%",
  },
  vectorIcon18: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    width: "100%",
  },
  setupdLinkSent: {
    height: "22.01%",
    width: "68.93%",
    top: "63.11%",
    left: "17.15%",
    fontFamily: FontFamily.sourceSansProRegular,
    textAlign: "center",
    color: Color.black,
    fontSize: 20,
    position: "absolute",
  },
  clarityqrCodeLine: {
    top: 125,
    left: 25,
    width: 309,
    height: 309,
    position: "absolute",
    overflow: "hidden",
  },
  scanQrCode: {
    top: 65,
    left: 62,
    fontSize: FontSize.largeRegular_size,
    fontWeight: "700",
    position: "absolute",
  },
  or: {
    top: 434,
    left: 162,
    fontSize: FontSize.largeRegular_size,
    fontWeight: "700",
    position: "absolute",
  },
  setupLinkSent: {
    width: 238,
    height: 43,
    fontFamily: FontFamily.sourceSansProBold,
    fontWeight: "700",
    textAlign: "center",
    color: Color.black,
    fontSize: 20,
    display: "flex",
  },
  submit: {
    height: 24,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  submitbutton: {
    width: 78,
    height: 47,
    marginTop: 32,
  },
  popupnewitem: {
    marginTop: -138,
    marginLeft: -160,
    top: "50%",
    borderRadius: Border.br_base,
    backgroundColor: Color.gray_100,
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    width: 320,
    height: 172,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_7xl,
    justifyContent: "center",
    alignItems: "center",
    left: "50%",
    position: "absolute",
  },
  sendSetupLink: {
    alignSelf: "stretch",
  },
  setuplinkbutton: {
    top: 502,
    left: 46,
    width: 271,
    height: 57,
    position: "absolute",
  },
  settingssynclinksent: {
    backgroundColor: Color.white,
    height: 800,
    overflow: "hidden",
    width: "100%",
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

export default SettingsSyncLinkSent;
