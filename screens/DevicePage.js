import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import InputContainer from "../components/InputContainer";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const DevicePage = ({route, navigation}) => {
  const { deviceId, deviceName } = route.params;

  return (
    <View style={[styles.syncdeviceMangement, styles.innerframeFlexBox]}>
      <Image
        style={styles.iconxxlarge}
        resizeMode="cover"
        source={require("../assets/iconxxlarge.png")}
      />
      <Text style={styles.homeIpad}>{deviceName}</Text>
      <InputContainer
        label="IP address"
        value="192.168.1.1"
        propDisplay="none"
      />
      <InputContainer label="Location" value="Delhi" />
      <InputContainer label="Last Access Time" value="10-10-2023 10:10:10" />
      <InputContainer label="Browser/Operating System" value="iPadOS" />
      <InputContainer
        label="Device Status"
        value="Enabled"
        propDisplay="unset"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  innerframeFlexBox: {
    flex: 1,
    alignItems: "center",
    overflow: "hidden",
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
  iconxxlarge: {
    width: 72,
    height: 72,
    overflow: "hidden",
  },
  homeIpad: {
    fontSize: FontSize.labelLargeMedium_size,
    lineHeight: 24,
    textTransform: "capitalize",
    fontWeight: "500",
    fontFamily: FontFamily.labelMediumMedium,
    color: Color.black,
    textAlign: "center",
    display: "flex",
    width: 121,
    height: 51,
    marginTop: 32,
    justifyContent: "center",
    alignItems: "center",
  },
  innerframe: {
    padding: Padding.p_13xl,
    alignSelf: "stretch",
    alignItems: "center",
    overflow: "hidden",
  },
  syncdeviceMangement: {
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

export default DevicePage;
