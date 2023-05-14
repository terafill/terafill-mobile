import React, { useState } from "react";
import { FlatList, StyleSheet, Image, View, Pressable } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';


import Sharing from "./Sharing";
import DeviceMangement from "./DeviceMangement";
import DevicePage from "./DevicePage";
import NativeListItem from "../components/NativeListItem";
import { Color } from "../GlobalStyles";

const SyncList = () => {
  const [innerFrameFlatListData, setInnerFrameFlatListData] = useState([
    <NativeListItem label="Sharing" destination="Sharing"/>,
    <NativeListItem label="Device Management" destination="Device Management"/>,
  ]);

  return (
    <View style={[styles.sync, styles.syncFlexBox]}>
      <FlatList
        style={[styles.innerframe, styles.syncFlexBox]}
        data={innerFrameFlatListData}
        renderItem={({ item }) => item}
        contentContainerStyle={styles.innerFrameFlatListContent}
      />
    </View>
  );
};

const Stack = createStackNavigator();

const Sync = ({ navigation }) => {

  return (
    <Stack.Navigator initialRouteName="SyncList" screenOptions={{animationEnabled: true}}>
      <Stack.Screen name="Sync List" component={SyncList} options={{headerShown: false}}/>
      <Stack.Screen name="Device Management" component={DeviceMangement} />
      <Stack.Screen name="Device Page" component={DevicePage} />
      <Stack.Screen name="Sharing" component={Sharing} />
    </Stack.Navigator>
  );
};


const styles = StyleSheet.create({
  innerFrameFlatListContent: {
    flexDirection: "column",
  },
  syncFlexBox: {
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
  sync: {
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

export default Sync;
