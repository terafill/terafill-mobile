import React, { useState, useCallback } from "react";
import {
  StyleProp,
  ViewStyle,
  Image,
  StyleSheet,
  View,
  Text,
  Pressable,
  Modal,
} from "react-native";
import BlockAccountPopup from "./BlockAccountPopup";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const NativeListItem8 = ({ style }) => {
  const [nativeListItemContainerVisible, setNativeListItemContainerVisible] =
    useState(false);

  const openNativeListItemContainer = useCallback(() => {
    setNativeListItemContainerVisible(true);
  }, []);

  const closeNativeListItemContainer = useCallback(() => {
    setNativeListItemContainerVisible(false);
  }, []);

  return (
    <>
      <Pressable
        style={[styles.nativelistitem, style]}
        onPress={openNativeListItemContainer}
      >
        <View style={[styles.iconframe, styles.iconframeFlexBox]}>
          <View style={[styles.iconsmall, styles.iconframeFlexBox]}>
            <Image
              style={styles.vectorIcon}
              resizeMode="cover"
              source={require("../assets/vector23.png")}
            />
          </View>
        </View>
        <Text style={styles.usernameAndPassword}>Block Account</Text>
      </Pressable>

      <Modal
        animationType="fade"
        transparent
        visible={nativeListItemContainerVisible}
      >
        <View style={styles.nativeListItemContainerOverlay}>
          <Pressable
            style={styles.nativeListItemContainerBg}
            onPress={closeNativeListItemContainer}
          />
          <BlockAccountPopup onClose={closeNativeListItemContainer} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  iconframeFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  nativeListItemContainerOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  nativeListItemContainerBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  vectorIcon: {
    height: 28,
    width: 32,
  },
  iconsmall: {
    height: 32,
    overflow: "hidden",
    width: 32,
  },
  iconframe: {
    display: "none",
    flexDirection: "row",
    justifyContent: "center",
  },
  usernameAndPassword: {
    fontSize: FontSize.labelLargeMedium_size,
    lineHeight: 24,
    textTransform: "capitalize",
    fontWeight: "500",
    fontFamily: FontFamily.labelMediumMedium,
    color: Color.fontDark,
    textAlign: "center",
    marginLeft: 8,
  },
  nativelistitem: {
    alignSelf: "stretch",
    borderStyle: "solid",
    borderColor: "#d9d9d9",
    borderBottomWidth: 1,
    height: 72,
    padding: Padding.p_base,
    alignItems: "center",
    flexDirection: "row",
  },
});

export default NativeListItem8;
