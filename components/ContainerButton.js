import React, { useMemo, memo } from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { Padding, FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ContainerButton = memo(
  ({
    label,
    iconXSmallPaddingHorizontal,
    iconXSmallPaddingVertical,
    iconXSmallMarginTop,
  }) => {
    const buttonDerivativeBaseStyle = useMemo(() => {
      return {
        ...getStyleValue("paddingHorizontal", iconXSmallPaddingHorizontal),
        ...getStyleValue("paddingVertical", iconXSmallPaddingVertical),
        ...getStyleValue("marginTop", iconXSmallMarginTop),
      };
    }, [
      iconXSmallPaddingHorizontal,
      iconXSmallPaddingVertical,
      iconXSmallMarginTop,
    ]);

    return (
      <View style={[styles.buttonderivativebase, buttonDerivativeBaseStyle]}>
        <View style={[styles.buttonroot, styles.buttonrootFlexBox]}>
          <View style={[styles.iconxsmall, styles.buttonrootFlexBox]}>
            <Image
              style={styles.vectorIcon}
              resizeMode="cover"
              source={require("../assets/vector15.png")}
            />
          </View>
          <Text style={styles.label}>{label}</Text>
        </View>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  buttonrootFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
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
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_5xs,
  },
  buttonderivativebase: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_base,
    alignItems: "center",
    flexDirection: "row",
  },
});

export default ContainerButton;
