import * as React from "react";
import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize, Padding } from "../GlobalStyles";

const HomePageNewItem = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.homepagenewitem}>
      <View style={[styles.applist, styles.applistPosition]}>
        <View style={[styles.appitem, styles.appitemLayout]}>
          <Text style={[styles.webappName, styles.nameTypo]}>WEBAPP NAME</Text>
          <Text style={[styles.userName, styles.nameTypo]}>USER NAME</Text>
          <Image
            style={[styles.appicon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/appicon2.png")}
          />
          <View style={[styles.copybutton, styles.copybuttonPosition2]}>
            <View style={[styles.copybutton1, styles.copybuttonShadowBox]}>
              <View style={styles.copybuttonChildShadowBox} />
              <Image
                style={[
                  styles.materialSymbolsfileCopyOutIcon,
                  styles.copybuttonChildPosition,
                ]}
                resizeMode="cover"
                source={require("../assets/materialsymbolsfilecopyoutline1.png")}
              />
              <Text style={[styles.copy, styles.copyClr]}>COPY</Text>
            </View>
          </View>
        </View>
        <View style={[styles.appitem1, styles.appitemLayout]}>
          <Text style={[styles.webappName, styles.nameTypo]}>WEBAPP NAME</Text>
          <Text style={[styles.userName, styles.nameTypo]}>USER NAME</Text>
          <Image
            style={[styles.appicon1, styles.appiconPosition]}
            resizeMode="cover"
            source={require("../assets/appicon3.png")}
          />
          <View style={[styles.copybutton2, styles.copybuttonPosition2]}>
            <View style={[styles.copybutton3, styles.copybuttonShadowBox]}>
              <View style={styles.copybuttonChildShadowBox} />
              <Image
                style={[
                  styles.materialSymbolsfileCopyOutIcon,
                  styles.copybuttonChildPosition,
                ]}
                resizeMode="cover"
                source={require("../assets/materialsymbolsfilecopyoutline1.png")}
              />
              <Text style={[styles.copy, styles.copyClr]}>COPY</Text>
            </View>
          </View>
        </View>
        <View style={[styles.appitem2, styles.appitem2Border]}>
          <Text style={[styles.webappName, styles.nameTypo]}>WEBAPP NAME</Text>
          <Text style={[styles.userName, styles.nameTypo]}>USER NAME</Text>
          <Image
            style={[styles.appicon2, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/appicon4.png")}
          />
          <View style={[styles.copybutton4, styles.copybuttonPosition1]}>
            <View style={[styles.copybutton5, styles.copybuttonShadowBox]}>
              <View style={styles.copybuttonChildShadowBox} />
              <Image
                style={[
                  styles.materialSymbolsfileCopyOutIcon,
                  styles.copybuttonChildPosition,
                ]}
                resizeMode="cover"
                source={require("../assets/materialsymbolsfilecopyoutline1.png")}
              />
              <Text style={[styles.copy, styles.copyClr]}>COPY</Text>
            </View>
          </View>
        </View>
        <View style={[styles.appitem3, styles.appitemLayout]}>
          <Text style={[styles.webappName, styles.nameTypo]}>WEBAPP NAME</Text>
          <Text style={[styles.userName, styles.nameTypo]}>USER NAME</Text>
          <Image
            style={[styles.appicon1, styles.appiconPosition]}
            resizeMode="cover"
            source={require("../assets/appicon5.png")}
          />
          <View style={[styles.copybutton6, styles.copybuttonPosition]}>
            <View style={[styles.copybutton7, styles.copybuttonShadowBox]}>
              <View style={styles.copybuttonChildShadowBox} />
              <Image
                style={[
                  styles.materialSymbolsfileCopyOutIcon,
                  styles.copybuttonChildPosition,
                ]}
                resizeMode="cover"
                source={require("../assets/materialsymbolsfilecopyoutline1.png")}
              />
              <Text style={[styles.copy, styles.copyClr]}>COPY</Text>
            </View>
          </View>
        </View>
        <View style={[styles.appitem4, styles.appitemLayout]}>
          <Text style={[styles.webappName, styles.nameTypo]}>WEBAPP NAME</Text>
          <Text style={[styles.userName, styles.nameTypo]}>USER NAME</Text>
          <Image
            style={[styles.appicon1, styles.appiconPosition]}
            resizeMode="cover"
            source={require("../assets/appicon6.png")}
          />
          <View style={[styles.copybutton8, styles.copybuttonPosition1]}>
            <View style={[styles.copybutton9, styles.copybuttonShadowBox]}>
              <View style={styles.copybuttonChildShadowBox} />
              <Image
                style={[
                  styles.materialSymbolsfileCopyOutIcon,
                  styles.copybuttonChildPosition,
                ]}
                resizeMode="cover"
                source={require("../assets/materialsymbolsfilecopyoutline1.png")}
              />
              <Text style={[styles.copy, styles.copyClr]}>COPY</Text>
            </View>
          </View>
        </View>
        <View style={[styles.appitem5, styles.appitemLayout]}>
          <Text style={[styles.webappName, styles.nameTypo]}>WEBAPP NAME</Text>
          <Text style={[styles.userName, styles.nameTypo]}>USER NAME</Text>
          <Image
            style={[styles.appicon1, styles.appiconPosition]}
            resizeMode="cover"
            source={require("../assets/appicon7.png")}
          />
          <View style={[styles.copybutton10, styles.copybuttonPosition1]}>
            <View style={[styles.copybutton11, styles.copybuttonShadowBox]}>
              <View style={styles.copybuttonChildShadowBox} />
              <Image
                style={[
                  styles.materialSymbolsfileCopyOutIcon,
                  styles.copybuttonChildPosition,
                ]}
                resizeMode="cover"
                source={require("../assets/materialsymbolsfilecopyoutline1.png")}
              />
              <Text style={[styles.copy, styles.copyClr]}>COPY</Text>
            </View>
          </View>
          <Pressable
            style={styles.addnewitem}
            onPress={() => navigation.navigate("HomePageNewItem")}
          >
            <Image
              style={[styles.icon, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../assets/addnewitem.png")}
            />
          </Pressable>
        </View>
        <View style={[styles.appitem6, styles.appitemLayout]}>
          <Text style={[styles.webappName, styles.nameTypo]}>WEBAPP NAME</Text>
          <Text style={[styles.userName, styles.nameTypo]}>USER NAME</Text>
          <Image
            style={[styles.appicon6, styles.appiconPosition]}
            resizeMode="cover"
            source={require("../assets/appicon8.png")}
          />
          <View style={[styles.copybutton12, styles.copybuttonLayout]}>
            <View style={[styles.copybutton13, styles.copybuttonShadowBox]}>
              <View style={styles.copybuttonChildShadowBox} />
              <Image
                style={[
                  styles.materialSymbolsfileCopyOutIcon,
                  styles.copybuttonChildPosition,
                ]}
                resizeMode="cover"
                source={require("../assets/materialsymbolsfilecopyoutline1.png")}
              />
              <Text style={[styles.copy, styles.copyClr]}>COPY</Text>
            </View>
          </View>
        </View>
        <View style={[styles.appitem7, styles.appitemLayout]}>
          <Text style={[styles.webappName, styles.nameTypo]}>WEBAPP NAME</Text>
          <Text style={[styles.userName, styles.nameTypo]}>USER NAME</Text>
          <Image
            style={[styles.appicon7, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/appicon9.png")}
          />
          <View style={[styles.copybutton14, styles.copybuttonPosition]}>
            <View style={[styles.copybutton15, styles.copybuttonShadowBox]}>
              <View style={styles.copybuttonChildShadowBox} />
              <Image
                style={[
                  styles.materialSymbolsfileCopyOutIcon,
                  styles.copybuttonChildPosition,
                ]}
                resizeMode="cover"
                source={require("../assets/materialsymbolsfilecopyoutline1.png")}
              />
              <Text style={[styles.copy, styles.copyClr]}>COPY</Text>
            </View>
          </View>
        </View>
        <View style={[styles.appitem8, styles.appitemLayout]}>
          <Text style={[styles.webappName, styles.nameTypo]}>WEBAPP NAME</Text>
          <Text style={[styles.userName, styles.nameTypo]}>USER NAME</Text>
          <Image
            style={[styles.appicon7, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/appicon10.png")}
          />
          <View style={[styles.copybutton16, styles.copybuttonPosition]}>
            <View style={[styles.copybutton17, styles.copybuttonShadowBox]}>
              <View style={styles.copybuttonChildShadowBox} />
              <Image
                style={[
                  styles.materialSymbolsfileCopyOutIcon,
                  styles.copybuttonChildPosition,
                ]}
                resizeMode="cover"
                source={require("../assets/materialsymbolsfilecopyoutline1.png")}
              />
              <Text style={[styles.copy, styles.copyClr]}>COPY</Text>
            </View>
          </View>
        </View>
        <View style={[styles.appitem9, styles.appitemLayout]}>
          <Text style={[styles.webappName, styles.nameTypo]}>WEBAPP NAME</Text>
          <Text style={[styles.userName, styles.nameTypo]}>USER NAME</Text>
          <Image
            style={[styles.appicon7, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/appicon11.png")}
          />
          <View style={[styles.copybutton18, styles.copybuttonLayout]}>
            <View style={[styles.copybutton19, styles.copybuttonShadowBox]}>
              <View style={styles.copybuttonChildShadowBox} />
              <Image
                style={[
                  styles.materialSymbolsfileCopyOutIcon,
                  styles.copybuttonChildPosition,
                ]}
                resizeMode="cover"
                source={require("../assets/materialsymbolsfilecopyoutline1.png")}
              />
              <Text style={[styles.copy, styles.copyClr]}>COPY</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.popupnewitem, styles.inputboxChildBg]}>
        <View style={styles.inputbox}>
          <View style={[styles.inputboxChild, styles.inputboxChildShadowBox]} />
          <Text style={[styles.typeHere, styles.submitTypo]}>
            Type here ...
          </Text>
        </View>
        <View style={[styles.inputbox1, styles.inputbox1SpaceBlock]}>
          <View style={[styles.inputboxItem, styles.inputboxChildShadowBox]} />
          <Text style={[styles.typeHere, styles.submitTypo]}>
            Type here ...
          </Text>
        </View>
        <View style={[styles.inputbox1, styles.inputbox1SpaceBlock]}>
          <View style={[styles.inputboxInner, styles.inputboxChildShadowBox]} />
          <Text style={[styles.typeHere, styles.submitTypo]}>
            Type here ...
          </Text>
        </View>
        <View style={[styles.inputbox1, styles.inputbox1SpaceBlock]}>
          <View
            style={[styles.inputboxChild1, styles.inputboxChildShadowBox]}
          />
          <Text style={[styles.typeHere, styles.submitTypo]}>
            Type here ...
          </Text>
        </View>
        <View style={[styles.submitbutton, styles.inputbox1SpaceBlock]}>
          <Text style={[styles.submit, styles.submitTypo]}>ADD</Text>
        </View>
      </View>
      <View style={[styles.navbar, styles.copybuttonChildPosition]}>
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/icroundhome2.png")}
        />
        <Image
          style={[styles.ictwotoneSyncIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/ictwotonesync4.png")}
        />
        <Image
          style={[styles.ictwotoneSyncIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/materialsymbolssearch2.png")}
        />
        <Image
          style={[styles.ictwotoneSyncIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/materialsymbolssettings1.png")}
        />
        <Image
          style={[styles.ictwotoneSyncIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/ictwotonesupportagent.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  applistPosition: {
    width: 360,
    left: 0,
    position: "absolute",
  },
  appitemLayout: {
    height: 129,
    borderWidth: 1,
    borderColor: "#000",
    borderStyle: "solid",
    width: 360,
    left: 0,
    position: "absolute",
    backgroundColor: Color.white,
  },
  nameTypo: {
    textAlign: "left",
    color: Color.gray_200,
    fontFamily: FontFamily.sourceSansProBold,
    fontWeight: "700",
    left: "28.33%",
    position: "absolute",
  },
  iconLayout1: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  copybuttonPosition2: {
    left: "73.33%",
    right: "2.5%",
    width: "24.17%",
    position: "absolute",
  },
  copybuttonShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  copybuttonChildPosition: {
    right: "0%",
    bottom: "0%",
  },
  copyClr: {
    color: Color.black,
    position: "absolute",
  },
  appiconPosition: {
    top: "-0.67%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    left: "0%",
    right: "77.92%",
    width: "22.08%",
    position: "absolute",
  },
  appitem2Border: {
    borderWidth: 1,
    borderColor: "#000",
    borderStyle: "solid",
  },
  copybuttonPosition1: {
    left: "73.89%",
    right: "1.94%",
    width: "24.17%",
    position: "absolute",
  },
  copybuttonPosition: {
    left: "74.17%",
    right: "1.67%",
    height: "27.9%",
    width: "24.17%",
    position: "absolute",
  },
  copybuttonLayout: {
    width: "24.17%",
    position: "absolute",
  },
  inputboxChildBg: {
    backgroundColor: Color.gray_100,
    position: "absolute",
  },
  inputboxChildShadowBox: {
    borderRadius: Border.br_xs,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  submitTypo: {
    textAlign: "center",
    fontFamily: FontFamily.sourceSansProRegular,
    fontSize: 20,
  },
  inputbox1SpaceBlock: {
    marginTop: 32,
    alignSelf: "stretch",
  },
  iconLayout: {
    height: 52,
    width: 52,
    overflow: "hidden",
  },
  webappName: {
    height: "39.47%",
    width: "43.33%",
    top: "10.53%",
    fontSize: FontSize.largeRegular_size,
  },
  userName: {
    height: "26.32%",
    width: "22.78%",
    top: "61.84%",
    fontSize: FontSize.labelMediumMedium_size,
  },
  appicon: {
    height: "100.67%",
    left: "0%",
    bottom: "-0.67%",
    right: "77.92%",
    width: "22.08%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
    top: "0%",
  },
  copybuttonChildShadowBox: {
    elevation: 5,
    shadowRadius: 5,
    backgroundColor: Color.whitesmoke_100,
    borderRadius: Border.br_6xs,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    bottom: "0%",
    right: "0%",
    height: "100%",
    left: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  materialSymbolsfileCopyOutIcon: {
    height: "97.22%",
    width: "40.23%",
    top: "2.78%",
    left: "59.77%",
    bottom: "0%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  copy: {
    top: "19.44%",
    left: "7.2%",
    fontSize: 20,
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.sourceSansProBold,
    fontWeight: "700",
  },
  copybutton1: {
    bottom: "0%",
    right: "0%",
    height: "100%",
    left: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  copybutton: {
    top: "36.38%",
    bottom: "35.76%",
    height: "27.86%",
  },
  appitem: {
    top: 0,
  },
  appicon1: {
    height: "101.35%",
    bottom: "-0.67%",
  },
  copybutton3: {
    bottom: "0%",
    right: "0%",
    height: "100%",
    left: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  copybutton2: {
    top: "33.95%",
    bottom: "38.15%",
    height: "27.9%",
  },
  appitem1: {
    top: 129,
  },
  appicon2: {
    height: "101.36%",
    top: "-0.68%",
    bottom: "-0.68%",
    left: "0%",
    right: "77.92%",
    width: "22.08%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  copybutton5: {
    bottom: "0%",
    right: "0%",
    height: "100%",
    left: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  copybutton4: {
    height: "28.21%",
    top: "35.87%",
    bottom: "35.91%",
  },
  appitem2: {
    top: 258,
    height: 128,
    width: 360,
    left: 0,
    position: "absolute",
    backgroundColor: Color.white,
  },
  copybutton7: {
    bottom: "0%",
    right: "0%",
    height: "100%",
    left: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  copybutton6: {
    top: "34.23%",
    bottom: "37.86%",
  },
  appitem3: {
    top: 386,
  },
  copybutton9: {
    bottom: "0%",
    right: "0%",
    height: "100%",
    left: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  copybutton8: {
    top: "34.22%",
    bottom: "37.88%",
    height: "27.9%",
  },
  appitem4: {
    top: 515,
  },
  copybutton11: {
    bottom: "0%",
    right: "0%",
    height: "100%",
    left: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  copybutton10: {
    top: "35.75%",
    bottom: "36.35%",
    height: "27.9%",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  addnewitem: {
    left: "81.39%",
    top: "17.92%",
    right: "2.78%",
    bottom: "37.9%",
    width: "15.83%",
    height: "44.18%",
    position: "absolute",
  },
  appitem5: {
    top: 644,
  },
  appicon6: {
    bottom: "0.67%",
    height: "100%",
  },
  copybutton13: {
    bottom: "0%",
    right: "0%",
    height: "100%",
    left: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  copybutton12: {
    top: "35.73%",
    right: "1.39%",
    bottom: "36.37%",
    left: "74.44%",
    height: "27.9%",
  },
  appitem6: {
    top: 773,
  },
  appicon7: {
    width: "21.94%",
    right: "78.06%",
    bottom: "0%",
    height: "100%",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  copybutton15: {
    bottom: "0%",
    right: "0%",
    height: "100%",
    left: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  copybutton14: {
    top: "34.16%",
    bottom: "37.94%",
  },
  appitem7: {
    top: 902,
  },
  copybutton17: {
    bottom: "0%",
    right: "0%",
    height: "100%",
    left: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  copybutton16: {
    top: "32.59%",
    bottom: "39.5%",
  },
  appitem8: {
    top: 1031,
  },
  copybutton19: {
    bottom: "0%",
    right: "0%",
    height: "100%",
    left: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  copybutton18: {
    top: "32.53%",
    right: "1.11%",
    bottom: "39.61%",
    left: "74.72%",
    height: "27.86%",
  },
  appitem9: {
    top: 1160,
  },
  applist: {
    top: 0,
    height: 800,
  },
  inputboxChild: {
    backgroundColor: Color.gray_100,
    position: "absolute",
    bottom: "0%",
    right: "0%",
    height: "100%",
    left: "0%",
    top: "0%",
    width: "100%",
  },
  typeHere: {
    top: 8,
    left: 15,
    color: Color.black,
    position: "absolute",
  },
  inputbox: {
    alignSelf: "stretch",
    flex: 1,
  },
  inputboxItem: {
    backgroundColor: Color.gray_100,
    position: "absolute",
    bottom: "0%",
    right: "0%",
    height: "100%",
    left: "0%",
    top: "0%",
    width: "100%",
  },
  inputbox1: {
    flex: 1,
  },
  inputboxInner: {
    backgroundColor: Color.gray_100,
    position: "absolute",
    bottom: "0%",
    right: "0%",
    height: "100%",
    left: "0%",
    top: "0%",
    width: "100%",
  },
  inputboxChild1: {
    backgroundColor: Color.gray_100,
    position: "absolute",
    bottom: "0%",
    right: "0%",
    height: "100%",
    left: "0%",
    top: "0%",
    width: "100%",
  },
  submit: {
    color: Color.white,
    display: "flex",
    justifyContent: "center",
    height: 24,
    alignItems: "center",
    flex: 1,
  },
  submitbutton: {
    backgroundColor: Color.backgroundBlue,
    height: 47,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_sm,
    flexDirection: "row",
    borderRadius: Border.br_xs,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  popupnewitem: {
    marginTop: -249,
    marginLeft: -156,
    top: "50%",
    left: "50%",
    borderRadius: Border.br_base,
    width: 320,
    height: 434,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_7xl,
    alignItems: "center",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderWidth: 1,
    borderColor: "#000",
    borderStyle: "solid",
  },
  ictwotoneSyncIcon: {
    marginLeft: 16,
  },
  navbar: {
    height: "9.38%",
    top: "90.63%",
    backgroundColor: Color.black,
    paddingLeft: Padding.p_lgi,
    paddingTop: Padding.p_5xs,
    paddingBottom: Padding.p_5xs,
    alignItems: "flex-end",
    flexDirection: "row",
    bottom: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  homepagenewitem: {
    height: 800,
    width: "100%",
    flex: 1,
    backgroundColor: Color.white,
  },
});

export default HomePageNewItem;
