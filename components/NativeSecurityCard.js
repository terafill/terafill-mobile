import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  Image,
  StyleSheet,
  View,
  Text,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontFamily, Color, FontSize, Border, Padding } from "../GlobalStyles";

const NativeSecurityCard = ({ style }) => {
  return (
    <LinearGradient
      style={[styles.nativesecuritycard, style]}
      locations={[0, 1]}
      colors={["rgba(51, 51, 51, 0.25)", "rgba(255, 255, 255, 0.25)"]}
    >
      <View style={styles.nativeiconFlexBox}>
        <View style={[styles.nativeicon, styles.nativeiconFlexBox]}>
          <Image
            style={styles.vectorIcon}
            resizeMode="cover"
            source={require("../assets/vector24.png")}
          />
        </View>
        <Text style={[styles.pin, styles.pinTypo]}>Face ID</Text>
      </View>
      <View
        style={[styles.buttonderivativemedium, styles.comingSoonWrapperFlexBox]}
      >
        <View style={[styles.buttonroot, styles.nativeiconFlexBox]}>
          <Image
            style={styles.iconxsmall}
            resizeMode="cover"
            source={require("../assets/iconxsmall3.png")}
          />
          <Text style={[styles.label, styles.pinTypo]}>Setup Face ID</Text>
        </View>
      </View>
      <View style={[styles.comingSoonWrapper, styles.comingSoonWrapperFlexBox]}>
        <Text style={styles.comingSoon}>Coming soon ...</Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  nativeiconFlexBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  pinTypo: {
    marginLeft: 8,
    fontFamily: FontFamily.labelMediumMedium,
    fontWeight: "500",
    textAlign: "center",
    textTransform: "capitalize",
    lineHeight: 24,
  },
  comingSoonWrapperFlexBox: {
    marginTop: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  vectorIcon: {
    width: 18,
    height: 18,
  },
  nativeicon: {
    padding: 1,
  },
  pin: {
    color: Color.fontDark,
    fontSize: FontSize.labelLargeMedium_size,
    marginLeft: 8,
    fontFamily: FontFamily.labelMediumMedium,
    fontWeight: "500",
  },
  iconxsmall: {
    width: 24,
    height: 24,
    display: "none",
  },
  label: {
    fontSize: FontSize.labelMediumMedium_size,
    color: Color.backgroundBlue,
    marginLeft: 8,
    fontFamily: FontFamily.labelMediumMedium,
    fontWeight: "500",
  },
  buttonroot: {
    borderRadius: Border.br_xs,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_5xs,
  },
  buttonderivativemedium: {
    display: "none",
  },
  comingSoon: {
    fontFamily: FontFamily.dMSansRegular,
    textAlign: "center",
    textTransform: "capitalize",
    lineHeight: 24,
    color: Color.fontDark,
    fontSize: FontSize.labelLargeMedium_size,
  },
  comingSoonWrapper: {
    justifyContent: "center",
  },
  nativesecuritycard: {
    alignSelf: "stretch",
    borderRadius: Border.br_3xs,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: "#d9d9d9",
    borderWidth: 0.8,
    overflow: "hidden",
    padding: Padding.p_base,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default NativeSecurityCard;
