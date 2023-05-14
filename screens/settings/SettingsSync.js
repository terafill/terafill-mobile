import * as React from "react";
import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color } from "../../GlobalStyles";

const SettingsSync = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.settingssync, styles.innerframeFlexBox]}
      onPress={() => navigation.navigate("SyncDeviceMangement1")}
    >
      <View style={[styles.innerframe, styles.innerframeFlexBox]}>
        <Text style={styles.scanQrCode}>SCAN QR CODE</Text>
        <Image
          style={styles.clarityqrCodeLineIcon}
          resizeMode="cover"
          source={require("../../assets/clarityqrcodeline.png")}
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  innerframeFlexBox: {
    flex: 1,
    alignItems: "center",
  },
  iconbaseFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconbaseLayout: {
    height: 40,
    width: 40,
    overflow: "hidden",
  },
  scanQrCode: {
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
    fontFamily: FontFamily.sourceSansProBold,
    color: Color.fontDark,
    textAlign: "center",
  },
  clarityqrCodeLineIcon: {
    width: 309,
    height: 309,
    overflow: "hidden",
  },
  innerframe: {
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
  },
  settingssync: {
    backgroundColor: Color.white,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: "100%",
    height: 800,
    justifyContent: "flex-end",
    alignItems: "center",
    overflow: "hidden",
  },
});

export default SettingsSync;
