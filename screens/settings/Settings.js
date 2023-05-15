import React, { useState } from "react";
import { FlatList, StyleSheet, Image, View, Pressable } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from "@react-navigation/native";

import NativeListItem from "../../components/NativeListItem";
import SettingsPersonalInfo from "./SettingsPersonalInfo";
import SettingsSecurity from "./SettingsSecurity";
import SettingsSecurityPassword from "./SettingsSecurityPassword";
import SettingsSecurityShield from "./SettingsSecurityShield";
import SettingsSecurityShieldPin from "./SettingsSecurityShieldPin";
import SettingsSecurityShieldFingerprint from "./SettingsSecurityShieldFingerprint";
import SettingsDataGenerator from "./SettingsDataGenerator";
import { Color, Padding } from "../../GlobalStyles";


const SettingsList = () => {
  const [settingsListFlatListData, setSettingsListFlatListData] = useState([
    <NativeListItem label="Personal Info" destination="Personal Info"/>,
    <NativeListItem label="Security" destination="Security"/>,
    <NativeListItem label="Data Generator" destination="Data Generator"/>,
    <NativeListItem label="Logout" destination="AppSetup"/>,
  ]);
  const navigation = useNavigation();

  return (
    <View style={[styles.settings, styles.iconbaseFlexBox1]}>
      <View style={styles.innerFrame}>
      <FlatList
        style={styles.settingslist}
        data={settingsListFlatListData}
        renderItem={({ item }) => item}
        contentContainerStyle={styles.settingsListFlatListContent}
      />
      </View>
    </View>
  );
};

const Stack = createStackNavigator();

const Settings = ({ navigation }) => {

  return (
    <Stack.Navigator initialRouteName="Settings List" screenOptions={{animationEnabled: true}}>
      <Stack.Screen name="Settings List" component={SettingsList} options={{headerShown: false}}/>
      <Stack.Screen name="Personal Info" component={SettingsPersonalInfo} />
      <Stack.Screen name="Security" component={SettingsSecurity} />
      <Stack.Screen name="Security Password" component={SettingsSecurityPassword} />
      <Stack.Screen name="Security Shield" component={SettingsSecurityShield} />
      <Stack.Screen name="Security Shield Pin" component={SettingsSecurityShieldPin} />
      <Stack.Screen name="Security Shield Fingerprint" component={SettingsSecurityShieldFingerprint} />
      <Stack.Screen name="Data Generator" component={SettingsDataGenerator} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  innerFrame: {
    flex: 1,
  },
  settingsListFlatListContent: {
    flexDirection: "column",
  },
  iconbaseFlexBox1: {
    justifyContent: "center",
    overflow: "hidden",
  },
  iconbaseFlexBox: {
    flexDirection: "row",
    alignItems: "center",
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
    justifyContent: "center",
    overflow: "hidden",
  },
  vectorIcon1: {
    width: 29,
    height: 39,
  },
  iconbase1: {
    padding: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  vectorIcon3: {
    height: 36,
    width: 40,
  },
  iconbase4: {
    justifyContent: "center",
    overflow: "hidden",
    alignItems: "center",
  },
  navbar: {
    backgroundColor: Color.fontDark,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_5xs,
    justifyContent: "space-between",
    alignSelf: "stretch",
  },
  settings: {
    backgroundColor: Color.white,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    height: 800,
    alignItems: "stretch",
    justifyContent: "flex-end",
    width: "100%",
    flex: 1,
  },
});

export default Settings;
