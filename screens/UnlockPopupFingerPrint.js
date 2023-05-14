import * as React from "react";
import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const UnlockPopupFingerPrint = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.unlockpopupfingerprint}
      onPress={() => navigation.navigate("UnlockPageB")}
    >
      <Text style={styles.unlockWithFingerprint}>UNLOCK WITH FINGERPRINT</Text>
      <Image
        style={styles.materialSymbolsfingerprintIcon}
        resizeMode="cover"
        source={require("../assets/materialsymbolsfingerprint.png")}
      />
      <View style={[styles.buttonderivativebase, styles.buttonrootFlexBox]}>
        <View style={[styles.buttonroot, styles.buttonrootFlexBox]}>
          <Image
            style={styles.iconxsmall}
            resizeMode="cover"
            source={require("../assets/iconxsmall.png")}
          />
          <Text style={styles.label}>Unlock using PIN</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonrootFlexBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  unlockWithFingerprint: {
    fontSize: FontSize.largeRegular_size,
    fontWeight: "700",
    fontFamily: FontFamily.sourceSansProBold,
    color: Color.black,
    width: 301,
    textAlign: "center",
  },
  materialSymbolsfingerprintIcon: {
    width: 77,
    height: 88,
    overflow: "hidden",
    marginTop: 32,
  },
  iconxsmall: {
    width: 24,
    height: 24,
    display: "none",
  },
  label: {
    fontSize: FontSize.labelMediumMedium_size,
    lineHeight: 24,
    textTransform: "capitalize",
    fontWeight: "500",
    fontFamily: FontFamily.labelMediumMedium,
    color: Color.backgroundBlue,
    marginLeft: 8,
    textAlign: "center",
  },
  buttonroot: {
    borderRadius: Border.br_xs,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_5xs,
  },
  buttonderivativebase: {
    marginTop: 32,
  },
  unlockpopupfingerprint: {
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
    alignItems: "center",
  },
});

export default UnlockPopupFingerPrint;
