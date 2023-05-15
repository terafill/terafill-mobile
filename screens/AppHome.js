import React, { useState, memo } from "react";
import { createStackNavigator } from '@react-navigation/stack';

import AppItemList from "./AppItemList";
import AppItemPage from "./AppItemPage";
import Navbar from "../components/Navbar";
import { Padding, FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const Stack = createStackNavigator();


const AppHome = ({ navigation }) => {

  return (
    <Stack.Navigator initialRouteName="AppItemList" screenOptions={{animationEnabled: true}}>
      <Stack.Screen name="AppItemList" component={AppItemList} options={{headerShown: false}}/>
      <Stack.Screen name="AppItemPage" component={AppItemPage} />
      {/*<Stack.Screen name="AppItemAdd" component={AppItemAdd} />*/}
    </Stack.Navigator>
  );
};

export default AppHome;
