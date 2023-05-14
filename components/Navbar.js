import * as React from "react";
import { Image, StyleSheet, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, Color } from "../GlobalStyles";

const Navbar = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.navbarParent}>
      <View style={[styles.navbar, styles.navbarFlexBox]}>
        <View style={styles.statesyncSpaceBlock}>
          <Pressable
            style={[styles.iconbase, styles.iconbaseFlexBox]}
            onPress={() => navigation.navigate("AppHome")}
          >
            <Image
              style={styles.vectorIcon}
              resizeMode="cover"
              source={require("../assets/Home.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.iconbase1, styles.iconbaseLayout]}
            onPress={() => navigation.navigate("Sync")}
          >
            <Image
              style={styles.vectorIcon1}
              resizeMode="cover"
              source={require("../assets/Sync.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.iconbase, styles.iconbaseFlexBox]}
            onPress={() => navigation.navigate("Settings")}
          >
            <Image
              style={styles.vectorIcon}
              resizeMode="cover"
              source={require("../assets/Settings.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.iconbase, styles.iconbaseFlexBox]}
            onPress={() => navigation.navigate("Support")}
          >
            <Image
              style={styles.vectorIcon}
              resizeMode="cover"
              source={require("../assets/Support.png")}
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navbarFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  iconbaseFlexBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  iconbaseLayout: {
    height: 40,
    width: 40,
    overflow: "hidden",
  },
  statesyncSpaceBlock: {
    justifyContent: "space-between",
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
    width: "100%",
    backgroundColor: Color.black,
    alignItems: "center",
  },
  vectorIcon: {
    width: 39,
    height: 39,
  },
  iconbase: {
    padding: 0,
    overflow: "hidden",
  },
  vectorIcon1: {
    width: 29,
    height: 39,
  },
  iconbase1: {
    padding: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  vectorIcon3: {
    height: 36,
    width: 40,
  },
  iconbase4: {
    justifyContent: "center",
    alignItems: "center",
  },
  navbar: {
    // overflow: "hidden",
  },
  navbarParent: {
    // position: "absolute",
    backgroundColor: Color.white,
    flex: null,
    width: "100%",
    overflow: "hidden",
    // borderTopRightRadius: "5px",
    // borderTopLeftRadius: "5px"
  },
});

export default Navbar;
