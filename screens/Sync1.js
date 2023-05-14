import * as React from "react";
import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const Sync1 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.sync, styles.syncShadowBox]}>
      <View style={[styles.appitem, styles.appitemLayout]}>
        <Text style={[styles.desktopVaultSync, styles.syncTypo]}>
          Desktop Vault Sync
        </Text>
        <Image
          style={styles.fluentdesktopSync24RegularIcon}
          resizeMode="cover"
          source={require("../assets/fluentdesktopsync24regular.png")}
        />
        <View style={[styles.buttons, styles.buttonsPosition1]}>
          <View style={styles.buttonsChild} />
          <Image
            style={styles.buttonsItem}
            resizeMode="cover"
            source={require("../assets/ellipse-3.png")}
          />
        </View>
      </View>
      <View style={[styles.appitem1, styles.appitemLayout]}>
        <Text style={[styles.desktopVaultSync, styles.syncTypo]}>
          Chrome Vault Sync
        </Text>
        <Image
          style={styles.fluentdesktopSync24RegularIcon}
          resizeMode="cover"
          source={require("../assets/fluentdesktopsync24regular.png")}
        />
        <View style={[styles.buttons1, styles.buttonsPosition]}>
          <View style={styles.buttonsChild} />
          <Image
            style={styles.buttonsItem}
            resizeMode="cover"
            source={require("../assets/ellipse-3.png")}
          />
        </View>
      </View>
      <View style={[styles.appitem2, styles.appitemLayout]}>
        <Text style={[styles.desktopVaultSync, styles.syncTypo]}>
          Cloud Vault Sync
        </Text>
        <Image
          style={styles.fluentdesktopSync24RegularIcon}
          resizeMode="cover"
          source={require("../assets/fluentdesktopsync24regular.png")}
        />
        <View style={[styles.buttons2, styles.buttonsPosition]}>
          <View style={styles.buttonsChild} />
          <Image
            style={styles.buttonsItem}
            resizeMode="cover"
            source={require("../assets/ellipse-3.png")}
          />
        </View>
      </View>
      <View style={[styles.appitem3, styles.appitemLayout]}>
        <Text style={[styles.desktopVaultSync, styles.syncTypo]}>
          iPad Vault Sync
        </Text>
        <Image
          style={styles.fluentdesktopSync24RegularIcon}
          resizeMode="cover"
          source={require("../assets/fluentdesktopsync24regular.png")}
        />
        <View style={[styles.buttons3, styles.buttonsLayout]}>
          <View style={styles.buttonsChild} />
          <Image
            style={styles.buttonsItem}
            resizeMode="cover"
            source={require("../assets/ellipse-3.png")}
          />
        </View>
      </View>
      <View style={[styles.navbar, styles.navbarFlexBox]}>
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/icroundhome1.png")}
        />
        <Image
          style={[styles.ictwotoneSyncIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/ictwotonesync2.png")}
        />
        <Image
          style={[styles.ictwotoneSyncIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/materialsymbolssearch1.png")}
        />
        <Image
          style={[styles.ictwotoneSyncIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/materialsymbolssettings2.png")}
        />
        <Image
          style={[styles.ictwotoneSyncIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/ictwotonesupportagent1.png")}
        />
      </View>
      <Pressable
        style={[styles.syncnewdevice, styles.navbarFlexBox]}
        onPress={() => navigation.navigate("SettingsSync")}
      >
        <Text style={[styles.syncNewDevice, styles.syncTypo]}>
          Sync New Device
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  syncShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  appitemLayout: {
    height: 80,
    borderWidth: 0.5,
    borderColor: "#000",
    borderStyle: "solid",
    backgroundColor: Color.gray_100,
    width: 360,
    left: 0,
    position: "absolute",
  },
  syncTypo: {
    textAlign: "left",
    fontFamily: FontFamily.sourceSansProBold,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
  },
  buttonsPosition1: {
    left: "81.67%",
    right: "5.56%",
  },
  buttonsPosition: {
    bottom: "43.75%",
    width: "12.78%",
    height: "26.25%",
    top: "30%",
    position: "absolute",
  },
  buttonsLayout: {
    width: "12.78%",
    height: "26.25%",
    position: "absolute",
  },
  navbarFlexBox: {
    flexDirection: "row",
    position: "absolute",
  },
  iconLayout: {
    height: 52,
    width: 52,
    overflow: "hidden",
  },
  desktopVaultSync: {
    height: "39.47%",
    width: "43.33%",
    left: "24.17%",
    color: Color.gray_200,
    top: "30%",
    fontFamily: FontFamily.sourceSansProBold,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  fluentdesktopSync24RegularIcon: {
    height: "63.75%",
    width: "14.72%",
    top: "12.5%",
    right: "80.83%",
    bottom: "23.75%",
    left: "4.44%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  buttonsChild: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_2xs,
    backgroundColor: Color.gainsboro,
    position: "absolute",
    width: "100%",
  },
  buttonsItem: {
    top: 2,
    left: -2,
    width: 25,
    height: 25,
    position: "absolute",
  },
  buttons: {
    top: "31.25%",
    bottom: "42.5%",
    width: "12.78%",
    height: "26.25%",
    position: "absolute",
  },
  appitem: {
    top: 0,
  },
  buttons1: {
    right: "5.28%",
    left: "81.94%",
  },
  appitem1: {
    top: 80,
  },
  buttons2: {
    left: "81.67%",
    right: "5.56%",
  },
  appitem2: {
    top: 160,
  },
  buttons3: {
    top: "37.5%",
    right: "5.83%",
    bottom: "36.25%",
    left: "81.39%",
  },
  appitem3: {
    top: 240,
  },
  ictwotoneSyncIcon: {
    marginLeft: 16,
  },
  navbar: {
    top: 725,
    backgroundColor: Color.black,
    height: 75,
    paddingHorizontal: Padding.p_lgi,
    paddingVertical: Padding.p_5xs,
    alignItems: "flex-end",
    width: 360,
    left: 0,
    flexDirection: "row",
  },
  syncNewDevice: {
    color: Color.whitesmoke_100,
  },
  syncnewdevice: {
    top: 665,
    left: 188,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.backgroundBlue,
    paddingHorizontal: 17,
    paddingVertical: Padding.p_sm,
    alignItems: "center",
    justifyContent: "center",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  sync: {
    backgroundColor: Color.white,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default Sync1;
