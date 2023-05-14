import * as React from "react";
import { Image, StyleSheet, Pressable, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const Support = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.support, styles.iconLayout]}>
      <View style={[styles.innerframe, styles.supportFlexBox]}>
        <Image
          style={styles.mdicustomerServiceIcon}
          resizeMode="cover"
          source={require("../assets/mdicustomerservice.png")}
        />
        <Pressable
          style={[
            styles.buttonderivativelarge,
            styles.buttonderivativelargeFlexBox,
          ]}
        >
          <View style={[styles.buttonroot, styles.buttonrootSpaceBlock]}>
            <View style={[styles.iconsmall, styles.iconbaseFlexBox]}>
              <Image
                style={styles.vectorIcon}
                resizeMode="cover"
                source={require("../assets/vector11.png")}
              />
            </View>
            <Text style={styles.label}>Contact Cusomter Care</Text>
          </View>
        </Pressable>
        <View
          style={[
            styles.buttonderivativelarge,
            styles.buttonderivativelargeFlexBox,
          ]}
        >
          <View style={[styles.buttonroot1, styles.buttonrootSpaceBlock]}>
            <View style={[styles.iconsmall, styles.iconbaseFlexBox]}>
              <Image
                style={styles.vectorIcon}
                resizeMode="cover"
                source={require("../assets/vector11.png")}
              />
            </View>
            <Text style={styles.label}>Request a feature</Text>
          </View>
        </View>
        <View style={styles.buttonderivativelargeFlexBox}>
          <View style={[styles.buttonroot2, styles.buttonrootSpaceBlock]}>
            <View style={[styles.iconsmall, styles.iconbaseFlexBox]}>
              <Image
                style={styles.vectorIcon}
                resizeMode="cover"
                source={require("../assets/vector11.png")}
              />
            </View>
            <Text style={styles.label}>Report a bug</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  supportFlexBox: {
    flex: 1,
    alignItems: "center",
  },
  buttonderivativelargeFlexBox: {
    marginTop: 55,
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  buttonrootSpaceBlock: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
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
  },
  mdicustomerServiceIcon: {
    width: 162,
    height: 161,
    overflow: "hidden",
  },
  vectorIcon: {
    width: 27,
    height: 27,
  },
  iconsmall: {
    width: 32,
    height: 32,
    padding: 3,
    display: "none",
    justifyContent: "center",
  },
  label: {
    fontSize: FontSize.labelXLargeMedium_size,
    lineHeight: 32,
    textTransform: "capitalize",
    fontWeight: "500",
    fontFamily: FontFamily.labelMediumMedium,
    color: Color.white,
    textAlign: "center",
    marginLeft: 8,
  },
  buttonroot: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.backgroundBlue,
    borderRadius: Border.br_xs,
    paddingHorizontal: Padding.p_base,
    justifyContent: "center",
    flex: 1,
  },
  buttonderivativelarge: {
    justifyContent: "center",
  },
  buttonroot1: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.backgroundBlue,
    borderRadius: Border.br_xs,
    paddingHorizontal: Padding.p_base,
    justifyContent: "center",
    flex: 1,
  },
  buttonroot2: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.backgroundBlue,
    borderRadius: Border.br_xs,
    paddingHorizontal: Padding.p_base,
    justifyContent: "center",
    flex: 1,
  },
  innerframe: {
    paddingHorizontal: Padding.p_13xl,
    paddingVertical: 0,
    alignSelf: "stretch",
    alignItems: "center",
  },
  vectorIcon3: {
    width: 39,
    height: 39,
  },
  iconbase: {
    padding: 0,
    justifyContent: "center",
    overflow: "hidden",
  },
  vectorIcon4: {
    width: 29,
    height: 39,
  },
  iconbase1: {
    padding: 1,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  vectorIcon6: {
    height: 36,
    width: 40,
  },
  iconbase4: {
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  navbar: {
    backgroundColor: Color.fontDark,
    justifyContent: "space-between",
    alignSelf: "stretch",
  },
  support: {
    backgroundColor: Color.white,
    height: 800,
    justifyContent: "flex-end",
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
  },
});

export default Support;
