import * as React from "react";
import {
  Image,
  StyleSheet,
  TextInput,
  View,
  Text,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const AppHometemAdd = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.apphometemadd, styles.buttonrootShadowBox]}>
      <Pressable
        style={styles.innerframe}
        onPress={() => navigation.navigate("SyncDeviceMangement1")}
      >
        <View style={styles.header}>
          <Image
            style={styles.iconxxlarge}
            resizeMode="cover"
            source={require("../assets/iconxxlarge1.png")}
          />
          <TextInput
            style={[styles.inputbox, styles.inputboxSpaceBlock]}
            placeholder="Enter title ..."
            keyboardType="default"
            placeholderTextColor="#d1d1d1"
          />
        </View>
        <TextInput
          style={[styles.inputbox1, styles.inputbox1SpaceBlock]}
          placeholder="Username"
          keyboardType="default"
          placeholderTextColor="#000"
        />
        <TextInput
          style={[styles.inputbox1, styles.inputbox1SpaceBlock]}
          placeholder="Password"
          keyboardType="default"
          placeholderTextColor="#000"
        />
        <TextInput
          style={[styles.inputbox1, styles.inputbox1SpaceBlock]}
          placeholder="Website"
          keyboardType="default"
          placeholderTextColor="#000"
        />
        <TextInput
          style={[styles.inputbox1, styles.inputbox1SpaceBlock]}
          placeholder="Notes"
          keyboardType="default"
          placeholderTextColor="#000"
        />
        <View style={[styles.buttonderivativebase, styles.inputbox1SpaceBlock]}>
          <View style={[styles.buttonroot, styles.navbarSpaceBlock]}>
            <View style={styles.iconxsmall}>
              <Image
                style={styles.vectorIcon}
                resizeMode="cover"
                source={require("../assets/vector16.png")}
              />
            </View>
            <Text style={styles.label}>Submit</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonrootShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  inputboxSpaceBlock: {
    paddingVertical: Padding.p_11xs,
    paddingHorizontal: Padding.p_6xs,
    borderRadius: Border.br_3xs,
    justifyContent: "center",
    overflow: "hidden",
    alignSelf: "stretch",
  },
  inputbox1SpaceBlock: {
    marginTop: 32,
    alignItems: "center",
  },
  navbarSpaceBlock: {
    paddingVertical: Padding.p_5xs,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: Padding.p_base,
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
  inputbox: {
    marginLeft: 32,
    alignItems: "center",
    flex: 1,
  },
  header: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
  },
  inputbox1: {
    paddingVertical: Padding.p_11xs,
    paddingHorizontal: Padding.p_6xs,
    borderRadius: Border.br_3xs,
    justifyContent: "center",
    overflow: "hidden",
    alignSelf: "stretch",
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
    flexDirection: "row",
    alignItems: "center",
  },
  label: {
    fontSize: FontSize.labelMediumMedium_size,
    lineHeight: 24,
    textTransform: "capitalize",
    fontWeight: "500",
    fontFamily: FontFamily.labelMediumMedium,
    color: Color.white,
    textAlign: "center",
    marginLeft: 8,
  },
  buttonroot: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.backgroundBlue,
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
  buttonderivativebase: {
    flexDirection: "row",
  },
  innerframe: {
    paddingVertical: Padding.p_13xl,
    alignItems: "center",
    paddingHorizontal: Padding.p_base,
    overflow: "hidden",
    alignSelf: "stretch",
    flex: 1,
  },
  apphometemadd: {
    backgroundColor: Color.white,
    width: "100%",
    height: 800,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    flex: 1,
  },
});

export default AppHometemAdd;
