import React, { useState } from "react";
import { FlatList, StyleSheet, Image, View, Pressable } from "react-native";
import NativeListItem from "../components/NativeListItem";
import ContainerButton from "../components/ContainerButton";
import { Color } from "../GlobalStyles";

const DeviceMangement = () => {
  const [innerFrameFlatListData, setInnerFrameFlatListData] = useState([
    <NativeListItem label="Home IPad" destination="Device Page" params={{deviceId: 1, deviceName: "Home IPad"}}/>,
    <NativeListItem label="Office McBook" destination="Device Page" params={{deviceId: 2, deviceName: "Office McBook"}}/>,
    <NativeListItem label="Dell Laptop" destination="Device Page" params={{deviceId: 3, deviceName: "Dell Laptop"}}/>,
    <NativeListItem label="Android Phone" destination="Device Page" params={{deviceId: 4, deviceName: "Android Phone"}}/>
  ]);

  return (
    <View style={[styles.syncdeviceMangement, styles.innerframeFlexBox]}>
      <FlatList
        style={[styles.innerframe, styles.innerframeFlexBox]}
        data={innerFrameFlatListData}
        renderItem={({ item }) => item}
        contentContainerStyle={styles.innerFrameFlatListContent}
      />
      <ContainerButton label="Sync New Device" />
    </View>
  );
};

const styles = StyleSheet.create({
  innerFrameFlatListContent: {
    flexDirection: "column",
  },
  innerframeFlexBox: {
    flex: 1,
    overflow: "hidden",
  },
  iconbaseFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  iconbaseLayout: {
    height: 40,
    width: 40,
    overflow: "hidden",
  },
  innerframe: {
    alignSelf: "stretch",
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

export default DeviceMangement;
