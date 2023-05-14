import * as React from "react";
import { Text, StyleSheet, TextInput, Image, View } from "react-native";
import ContainerButton from "../components/ContainerButton";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const AppSetupSyncPassphrase = () => {
  return (
    <View style={[styles.appSetupsyncpassphrase, styles.loginframeFlexBox]}>
      <View style={[styles.loginframe, styles.loginframeFlexBox]}>
        <Text style={[styles.enterPassphrase, styles.orTypo]}>
          ENTER PASSPHRASE
        </Text>
        <TextInput
          style={[styles.loginframeChild, styles.loginframeFlexBox]}
          placeholder="Whoever Forth Toy Introduce Learn Chimney Rest Boundary Refer Devil 5"
          keyboardType="default"
          placeholderTextColor="#333"
        />
        <View style={[styles.buttonderivativebase, styles.iconxsmallFlexBox]}>
          <View style={[styles.buttonroot, styles.buttonrootFlexBox]}>
            <View style={[styles.iconxsmall, styles.iconxsmallFlexBox]}>
              <Image
                style={styles.vectorIcon}
                resizeMode="cover"
                source={require("../assets/vector21.png")}
              />
            </View>
            <Text style={styles.label}>Submit</Text>
          </View>
        </View>
        <View style={[styles.lineParent, styles.buttonrootFlexBox]}>
          <View style={styles.frameBorder} />
          <Text style={[styles.or, styles.orTypo]}>OR</Text>
          <View style={[styles.frameItem, styles.frameBorder]} />
        </View>
        <ContainerButton
          label="Sync using QR CODE"
          iconXSmallPaddingHorizontal="unset"
          iconXSmallPaddingVertical="unset"
          iconXSmallMarginTop={30}
        />
      </View>
      <Image
        style={styles.tiltedkeyicon}
        resizeMode="cover"
        source={require("../assets/tiltedKeylanceIcon.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  loginframeFlexBox: {
    alignItems: "center",
    justifyContent: "center",
  },
  orTypo: {
    display: "flex",
    color: Color.black,
    textAlign: "center",
    fontFamily: FontFamily.labelMediumMedium,
    fontWeight: "500",
    textTransform: "capitalize",
    lineHeight: 24,
    fontSize: FontSize.labelMediumMedium_size,
    justifyContent: "center",
    alignItems: "center",
  },
  iconxsmallFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonrootFlexBox: {
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  frameBorder: {
    height: 1,
    borderTopWidth: 1,
    borderColor: "#d9d9d9",
    borderStyle: "solid",
    flex: 1,
  },
  enterPassphrase: {
    width: 221,
    height: 21,
  },
  loginframeChild: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.backgroundLightGray,
    width: 225,
    height: 225,
    padding: 15,
    marginTop: 30,
    justifyContent: "center",
  },
  vectorIcon: {
    width: 20,
    height: 20,
  },
  iconxsmall: {
    width: 24,
    height: 24,
    padding: Padding.p_11xs,
    display: "none",
    justifyContent: "center",
  },
  label: {
    color: Color.white,
    marginLeft: 8,
    textAlign: "center",
    fontFamily: FontFamily.labelMediumMedium,
    fontWeight: "500",
    textTransform: "capitalize",
    lineHeight: 24,
    fontSize: FontSize.labelMediumMedium_size,
  },
  buttonroot: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.backgroundBlue,
    paddingVertical: Padding.p_5xs,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    paddingHorizontal: Padding.p_base,
  },
  buttonderivativebase: {
    marginTop: 30,
  },
  or: {
    width: 109,
    height: 28,
    marginLeft: 8,
  },
  frameItem: {
    marginLeft: 8,
  },
  lineParent: {
    alignSelf: "stretch",
    paddingVertical: 0,
    marginTop: 30,
  },
  loginframe: {
    marginTop: -105,
    marginLeft: -180,
    top: "50%",
    left: "50%",
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowRadius: 10,
    elevation: 10,
    width: 360,
    height: 505,
    zIndex: 0,
    position: "absolute",
    justifyContent: "center",
    overflow: "hidden",
    backgroundColor: Color.white,
    alignItems: "center",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  tiltedkeyicon: {
    top: 112,
    left: 109,
    width: 141,
    height: 141,
    zIndex: 1,
    position: "absolute",
  },
  appSetupsyncpassphrase: {
    width: "100%",
    height: 800,
    justifyContent: "center",
    overflow: "hidden",
    backgroundColor: Color.white,
    alignItems: "center",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    flex: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
});

export default AppSetupSyncPassphrase;
