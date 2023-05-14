import * as React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Settings from "./settings/Settings";
import AppHome from "./AppHome";
import Sync from "./Sync";
import Support from "./Support";

const Tab = createBottomTabNavigator();



const AppInner = () => {
    return (
      <Tab.Navigator
        initialRouteName="AppHome"
        screenOptions={{
          tabBarStyle: {
            // padding: "4px",
            position: 'absolute',
            backgroundColor: "black", // change this to your desired color
          },
          tabBarLabelStyle: {
            fontSize: '16',
          }
        }}
        >
        <Tab.Screen
            name="AppHome"
            component={AppHome}
            options={{
                title: "Home",
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => (
                  <Image
                    style={{
                        width: size,
                        height: size,
                        tintColor: color,
                        marginBottom: "4px",
                    }}
                    resizeMode="cover"
                    source={require("../assets/Home.png")}
                  />
                ),
                tabBarIconStyle: {
                    height: 100,
                }
            }}/>
        <Tab.Screen
            name="Sync"
            component={Sync}
            options={{
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => (
                  <Image
                    style={{ width: size, height: size, tintColor: color }}
                    resizeMode="cover"
                    source={require("../assets/Sync.png")}
                  />
                ),
            }}/>
        <Tab.Screen
            name="Settings"
            component={Settings}
            options={{
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => (
                  <Image
                    style={{ width: size, height: size, tintColor: color }}
                    resizeMode="cover"
                    source={require("../assets/Settings.png")}
                  />
                ),
            }}/>
        <Tab.Screen
            name="Support"
            component={Support}
            options={{
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => (
                  <Image
                    style={{ width: size, height: size, tintColor: color }}
                    resizeMode="cover"
                    source={require("../assets/Support.png")}
                  />
                ),
            }}/>
      </Tab.Navigator>
    );
}

export default AppInner;