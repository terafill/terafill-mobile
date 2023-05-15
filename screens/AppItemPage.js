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
// import { createStackNavigator } from '@react-navigation/stack';


import { Padding, Border, FontSize, FontFamily, Color } from "../GlobalStyles";

// const Stack = createStackNavigator();

const AppItemPage = ({route, navigation}) => {
  const { itemId, itemDataList } = route.params;

  return (
    <View style={styles.apphometem}>
        <View style={[styles.header, styles.iconbaseFlexBox]}>
          <Image
            style={styles.iconxxlarge}
            resizeMode="cover"
            source={{
              uri: `https://cool-rose-moth.faviconkit.com/${itemDataList[itemId].website}/256`
            }}
          />
          <TextInput
            style={[styles.inputbox, styles.inputboxSpaceBlock]}
            // placeholder="john.doe@keylance.com"
            keyboardType="default"
            placeholderTextColor="#333"
            value={itemDataList[itemId].title}
          />
        </View>
        <View style={[styles.inputbox1, styles.inputboxSpaceBlock1]}>
          <Text style={styles.label}>Username</Text>
          <TextInput
            style={[styles.inputboxChild, styles.iconbaseFlexBox]}
            // placeholder="john.doe@keylance.com"
            keyboardType="default"
            placeholderTextColor="#333"
            value={itemDataList[itemId].username}
          />
        </View>
        <View style={[styles.inputbox1, styles.inputboxSpaceBlock1]}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={[styles.inputboxChild, styles.iconbaseFlexBox]}
            placeholder="Edit"
            keyboardType="default"
            placeholderTextColor="#3f9bf1"
            secureTextEntry={true}
            value={itemDataList[itemId].password}
          />
        </View>
        <View style={[styles.inputbox1, styles.inputboxSpaceBlock1]}>
          <Text style={styles.label}>Website</Text>
          <TextInput
            style={[styles.inputboxChild, styles.iconbaseFlexBox]}
            // placeholder="keylance.io"
            keyboardType="default"
            placeholderTextColor="#333"
            value={itemDataList[itemId].website}
          />
        </View>
        <View style={[styles.inputbox1, styles.inputboxSpaceBlock1]}>
          <Text style={styles.label}>Notes</Text>
          <TextInput
            style={[styles.inputboxChild, styles.iconbaseFlexBox]}
            // placeholder={`Some Additional Notes: ${itemId}`}
            keyboardType="default"
            placeholderTextColor="#333"
            value={itemDataList[itemId].description?itemDataList[itemId].description:''}
          />
        </View>
        <View style={styles.buttonderivativebaseParent}>
          <View style={styles.buttonderivativebase}>
            <View style={[styles.buttonroot, styles.buttonrootSpaceBlock]}>
              <Image
                style={styles.iconxsmallLayout}
                resizeMode="cover"
                source={require("../assets/iconxsmall1.png")}
              />
              <Text style={styles.label4}>Delete</Text>
            </View>
          </View>
          <View
            style={[styles.buttonderivativebase1, styles.inputboxSpaceBlock]}
          >
            <View style={[styles.buttonroot1, styles.buttonrootSpaceBlock]}>
              <View style={[styles.iconxsmall1, styles.iconxsmallLayout]}>
                <Image
                  style={styles.vectorIcon}
                  resizeMode="cover"
                  source={require("../assets/vector16.png")}
                />
              </View>
              <Text style={styles.label4}>Share</Text>
            </View>
          </View>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconbaseFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  inputboxSpaceBlock: {
    marginLeft: 32,
    alignItems: "center",
  },
  inputboxSpaceBlock1: {
    paddingVertical: Padding.p_11xs,
    paddingHorizontal: Padding.p_6xs,
    borderRadius: Border.br_3xs,
    justifyContent: "center",
    overflow: "hidden",
    alignSelf: "stretch",
  },
  buttonrootSpaceBlock: {
    paddingVertical: Padding.p_5xs,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: Padding.p_base,
  },
  iconxsmallLayout: {
    display: "none",
    height: 24,
    width: 24,
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
    paddingVertical: Padding.p_11xs,
    paddingHorizontal: Padding.p_6xs,
    borderRadius: Border.br_3xs,
    justifyContent: "center",
    overflow: "hidden",
    alignSelf: "stretch",
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  label: {
    fontSize: FontSize.labelBaseBold_size,
    lineHeight: 16,
    fontWeight: "700",
    fontFamily: FontFamily.labelBaseBold,
    color: Color.black,
    textAlign: "left",
    display: "flex",
    height: 14,
    textTransform: "capitalize",
    alignItems: "center",
    alignSelf: "stretch",
  },
  inputboxChild: {
    marginTop: 1,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  inputbox1: {
    marginTop: 32,
    alignItems: "center",
  },
  label4: {
    fontSize: FontSize.labelMediumMedium_size,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: FontFamily.labelMediumMedium,
    color: Color.white,
    textAlign: "center",
    marginLeft: 8,
    textTransform: "capitalize",
  },
  buttonroot: {
    backgroundColor: Color.tomato,
    borderRadius: Border.br_xs,
    paddingVertical: Padding.p_5xs,
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
    alignItems: "center",
  },
  vectorIcon: {
    width: 20,
    height: 20,
  },
  iconxsmall1: {
    padding: Padding.p_11xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  buttonroot1: {
    backgroundColor: Color.backgroundBlue,
    borderRadius: Border.br_xs,
    paddingVertical: Padding.p_5xs,
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
  buttonderivativebase1: {
    flexDirection: "row",
  },
  buttonderivativebaseParent: {
    marginTop: 32,
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
  apphometem: {
    backgroundColor: Color.white,
    width: "100%",
    height: 800,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    flex: 1,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
});

export default AppItemPage;
