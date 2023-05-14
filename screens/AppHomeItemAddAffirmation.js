import * as React from "react";
import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, Padding, FontSize, Border } from "../GlobalStyles";

const AppHomeItemAddAffirmation = () => {
  const navigation = useNavigation();

  return (
    <View
      style={[
        styles.apphomeitemaddaffirmation,
        styles.itemAddedSuccessfullyFlexBox,
      ]}
    >
      <Text
        style={[
          styles.itemAddedSuccessfully,
          styles.itemAddedSuccessfullyFlexBox,
        ]}
      >
        Item added successfully!
      </Text>
      <Pressable
        style={[
          styles.buttonderivativebaseWrapper,
          styles.buttonderivativebaseFlexBox,
        ]}
        onPress={() => navigation.navigate("AppHome")}
      >
        <View style={styles.buttonderivativebaseFlexBox}>
          <View style={[styles.buttonroot, styles.buttonderivativebaseFlexBox]}>
            <View
              style={[styles.iconxsmall, styles.buttonderivativebaseFlexBox]}
            >
              <Image
                style={styles.vectorIcon}
                resizeMode="cover"
                source={require("../assets/vector15.png")}
              />
            </View>
            <Text style={styles.label}>Ok</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  itemAddedSuccessfullyFlexBox: {
    alignItems: "center",
    justifyContent: "center",
  },
  buttonderivativebaseFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  itemAddedSuccessfully: {
    fontSize: 20,
    fontWeight: "700",
    fontFamily: FontFamily.sourceSansProBold,
    color: Color.black,
    display: "flex",
    width: 238,
    textAlign: "center",
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
    fontSize: FontSize.labelMediumMedium_size,
    lineHeight: 24,
    textTransform: "capitalize",
    fontWeight: "500",
    fontFamily: FontFamily.labelMediumMedium,
    color: Color.white,
    marginLeft: 8,
    textAlign: "center",
  },
  buttonroot: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.backgroundBlue,
    paddingVertical: Padding.p_5xs,
    justifyContent: "center",
    paddingHorizontal: Padding.p_base,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  buttonderivativebaseWrapper: {
    marginTop: 32,
    justifyContent: "center",
  },
  apphomeitemaddaffirmation: {
    borderRadius: Border.br_base,
    backgroundColor: Color.gray_100,
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    flex: 1,
    width: "100%",
    paddingVertical: Padding.p_5xl,
    justifyContent: "center",
    paddingHorizontal: Padding.p_base,
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

export default AppHomeItemAddAffirmation;
