import 'react-native-gesture-handler';


const Stack = createStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";

import AppInner from "./screens/AppInner";
import AppSetup from "./screens/AppSetup";
import UnlockPageA from "./screens/UnlockPageA";
import UnlockPageB from "./screens/UnlockPageB";
import SupportPopUp from "./components/SupportPopUp";
import SupportPopUpNewItem from "./components/SupportPopUpNewItem";
// import FrameScreen from "./screens/FrameScreen";
import FrameScreen1 from "./screens/FrameScreen1";
import AppHometemAdd from "./screens/AppHometemAdd";
import AppHomeItemAddAffirmation from "./screens/AppHomeItemAddAffirmation";
import AppHomeItemDeleteAffirmatio from "./screens/AppHomeItemDeleteAffirmatio";
import AppHomeItemDelete from "./screens/AppHomeItemDelete";
import AppSetupSyncPassphrase from "./screens/AppSetupSyncPassphrase";
import AppSetupSyncQR from "./screens/AppSetupSyncQR";
import UnlockPopupPin from "./screens/UnlockPopupPin";
import UnlockPopupFingerPrint from "./screens/UnlockPopupFingerPrint";
import RandomFieldGenerator from "./screens/RandomFieldGenerator";
import Sync1 from "./screens/Sync1";
import Support1 from "./screens/Support1";
import Support2 from "./screens/Support2";
import HomePageNewItem from "./screens/HomePageNewItem";
import FilteredSearch from "./screens/FilteredSearch";
import Search from "./screens/Search";

import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack";
import { View, Text, Pressable, TouchableOpacity, SafeAreaView, StyleSheet, StatusBar } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded, error] = useFonts({
    "DM Sans_medium": require("./assets/fonts/DM_Sans_medium.ttf"),
    "DM Sans_bold": require("./assets/fonts/DM_Sans_bold.ttf"),
    "Source Sans Pro_regular": require("./assets/fonts/Source_Sans_Pro_regular.ttf"),
    "Source Sans Pro_bold": require("./assets/fonts/Source_Sans_Pro_bold.ttf"),
    "Cabin Sketch_regular": require("./assets/fonts/Cabin_Sketch_regular.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  const customCardStyleInterpolator = ({ current, layouts }) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            }),
          },
        ],
        transitionDuration: 2000,
      },
    };
  };

  return (
    <>
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
      <View style={styles.content}>
        <NavigationContainer>
          {hideSplashScreen ? (
            <Stack.Navigator
              initialRouteName="AppSetup"
              screenOptions={{
                headerShown: false,
                // gestureEnabled: true,
                // gestureDirection: "horizontal",
                animationEnabled: true,
                // cardStyle: { backgroundColor: 'transparent' },
                // cardStyleInterpolator: ({ current, layouts }) => ({
                //   cardStyle: {
                //     transform: [
                //       {
                //         translateX: current.progress.interpolate({
                //           inputRange: [0, 1],
                //           outputRange: [layouts.screen.width, 0],
                //         }),
                //       },
                //     ],
                //   },
                // }),
            }}
            >
              <Stack.Screen
                name="AppSetup"
                component={AppSetup}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="AppInner"
                component={AppInner}
                options={{ headerShown: false }}
              />
               {/*<Stack.Screen*
              //   name="UnlockPageA"
              //   component={UnlockPageA}
              //   options={{ headerShown: false }}
              // />
              */}
{/*              <Stack.Screen
                name="UnlockPageB"
                component={UnlockPageB}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="SupportPopUp"
                component={SupportPopUp}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="SupportPopUpNewItem"
                component={SupportPopUpNewItem}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Frame13"
                component={FrameScreen1}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="AppHometemAdd"
                component={AppHometemAdd}
                options={{ headerShown: true }}
              />
              <Stack.Screen
                name="AppHomeItemAddAffirmation"
                component={AppHomeItemAddAffirmation}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="AppHomeItemDeleteAffirmation"
                component={AppHomeItemDeleteAffirmatio}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="AppHomeItemDelete"
                component={AppHomeItemDelete}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="AppSetupSyncPassphrase"
                component={AppSetupSyncPassphrase}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="AppSetupSyncQR"
                component={AppSetupSyncQR}
                options={{ headerShown: true }}
              />
              <Stack.Screen
                name="UnlockPopupPin"
                component={UnlockPopupPin}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="UnlockPopupFingerPrint"
                component={UnlockPopupFingerPrint}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="RandomFieldGenerator"
                component={RandomFieldGenerator}
                options={{ headerShown: true }}
              />
              <Stack.Screen
                name="Sync1"
                component={Sync1}
                options={{ headerShown: true }}
              />
              <Stack.Screen
                name="HomePageNewItem"
                component={HomePageNewItem}
                options={{ headerShown: true }}
              />
              <Stack.Screen
                name="FilteredSearch"
                component={FilteredSearch}
                options={{ headerShown: true }}
              />
              <Stack.Screen
                name="Search"
                component={Search}
                options={{ headerShown: true }}
              />*/}
            </Stack.Navigator>
          ) : null}
        </NavigationContainer>
      </View>
    </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100vh",
    backgroundColor: '#ffffff',
  },
  content: {
    flex: 1,
    height: "100%",
  },
});



export default App;
