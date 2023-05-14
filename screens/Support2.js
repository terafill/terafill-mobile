import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { Color, FontFamily, Padding, Border } from "../GlobalStyles";

const Support2 = () => {
  return (
    <View style={styles.support}>
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
          source={require("../assets/materialsymbolssettings3.png")}
        />
        <Image
          style={[styles.ictwotoneSyncIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/ictwotonesupportagent2.png")}
        />
      </View>
      <View style={styles.contactcustomercare}>
        <Text style={[styles.contactCustomerCare, styles.requestAFeatureTypo]}>
          CONTACT CUSTOMER CARE
        </Text>
      </View>
      <View style={[styles.reportabug, styles.reportabugShadowBox]}>
        <Text style={[styles.contactCustomerCare, styles.requestAFeatureTypo]}>
          REPORT A BUG
        </Text>
      </View>
      <View style={[styles.requestafeature, styles.reportabugShadowBox]}>
        <Text style={[styles.requestAFeature, styles.requestAFeatureTypo]}>
          REQUEST A FEATURE
        </Text>
      </View>
      <Image
        style={styles.mdicustomerServiceIcon}
        resizeMode="cover"
        source={require("../assets/mdicustomerservice.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    height: 52,
    width: 52,
    overflow: "hidden",
  },
  requestAFeatureTypo: {
    color: Color.white,
    fontFamily: FontFamily.sourceSansProRegular,
    fontSize: 20,
    alignSelf: "stretch",
    flex: 1,
  },
  reportabugShadowBox: {
    paddingHorizontal: Padding.p_31xl,
    height: 53,
    paddingVertical: Padding.p_sm,
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
  contactCustomerCare: {
    textAlign: "center",
  },
  contactcustomercare: {
    top: 277,
    height: 57,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_sm,
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
    left: 52,
    flexDirection: "row",
    position: "absolute",
  },
  reportabug: {
    top: 398,
    left: 51,
  },
  requestAFeature: {
    textAlign: "left",
  },
  requestafeature: {
    top: 515,
    left: 52,
    paddingHorizontal: Padding.p_31xl,
    height: 53,
  },
  mdicustomerServiceIcon: {
    top: 79,
    left: 102,
    width: 162,
    height: 161,
    position: "absolute",
    overflow: "hidden",
  },
  support: {
    backgroundColor: Color.white,
    width: "100%",
    height: 800,
    overflow: "hidden",
    flex: 1,
  },
});

export default Support2;
