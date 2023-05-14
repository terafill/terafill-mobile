import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Padding } from "../GlobalStyles";

const FrameScreen1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.appitemParent}>
      <Pressable
        style={styles.appitem}
        onPress={() => navigation.navigate("AppHometem")}
      >
        <Image
          style={styles.appicon}
          resizeMode="cover"
          source={require("../assets/appicon1.png")}
        />
        <View style={styles.itemheader}>
          <Text style={[styles.appName, styles.nameTypo]}>APP NAME</Text>
          <Text style={[styles.userName, styles.nameTypo]}>USER NAME</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  nameTypo: {
    textAlign: "left",
    fontFamily: FontFamily.sourceSansProBold,
    fontWeight: "700",
  },
  appicon: {
    width: 80,
    height: 80,
  },
  appName: {
    fontSize: FontSize.largeRegular_size,
    color: Color.gray_200,
  },
  userName: {
    fontSize: FontSize.labelMediumMedium_size,
    color: Color.backgroundLightBlack,
  },
  itemheader: {
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: 0,
    justifyContent: "center",
    flex: 1,
  },
  appitem: {
    alignSelf: "stretch",
    backgroundColor: Color.white,
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 0.2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 80,
  },
  appitemParent: {
    backgroundColor: Color.gainsboro,
    width: "100%",
    overflow: "hidden",
    paddingHorizontal: 30,
    paddingVertical: 29,
    flex: 1,
  },
});

export default FrameScreen1;
