import React, { useState } from "react";
import { FlatList, StyleSheet, Image, View, Pressable } from "react-native";
import NativeSecurityCard3 from "../../components/NativeSecurityCard3";
import NativeSecurityCard2 from "../../components/NativeSecurityCard2";
import NativeSecurityCard1 from "../../components/NativeSecurityCard1";
import NativeSecurityCard from "../../components/NativeSecurityCard";
import { useNavigation } from "@react-navigation/native";
import { Color, Padding } from "../../GlobalStyles";

const SettingsSecurityShield = () => {
  const [settingsListFlatListData, setSettingsListFlatListData] = useState([
    <NativeSecurityCard3 />,
    <NativeSecurityCard2 />,
    <NativeSecurityCard1 />,
    <NativeSecurityCard />,
  ]);
  const navigation = useNavigation();

  return (
    <View style={[styles.settingssecurityshield, styles.iconLayout]}>
      <FlatList
        style={styles.settingslist}
        data={settingsListFlatListData}
        renderItem={({ item }) => item}
        contentContainerStyle={styles.settingsListFlatListContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  settingsListFlatListContent: {
    flexDirection: "column",
    paddingHorizontal: 32,
    paddingTop: 16,
  },
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  iconbaseFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  iconbaseLayout: {
    height: 40,
    width: 40,
  },
  settingslist: {
    alignSelf: "stretch",
    overflow: "hidden",
    flex: 1,
  },
  vectorIcon: {
    width: 39,
    height: 39,
  },
  iconbase: {
    padding: 0,
    flexDirection: "row",
  },
  vectorIcon1: {
    width: 29,
    height: 39,
  },
  iconbase1: {
    padding: 1,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    flexDirection: "row",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  vectorIcon3: {
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
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_5xs,
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  settingssecurityshield: {
    backgroundColor: Color.white,
    height: 800,
    justifyContent: "flex-end",
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
  },
});

export default SettingsSecurityShield;
