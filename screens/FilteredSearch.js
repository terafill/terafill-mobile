import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { Padding, Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const FilteredSearch = () => {
  return (
    <View style={styles.filteredsearch}>
      <View style={styles.navbar}>
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/icroundhome.png")}
        />
        <Image
          style={[styles.ictwotoneSyncIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/ictwotonesync.png")}
        />
        <Image
          style={[styles.ictwotoneSyncIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/materialsymbolssearch3.png")}
        />
        <Image
          style={[styles.ictwotoneSyncIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/materialsymbolssettings5.png")}
        />
        <Image
          style={[styles.ictwotoneSyncIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/ictwotonesupportagent.png")}
        />
      </View>
      <View style={styles.searchbar}>
        <View style={styles.searchbarChild} />
        <Text style={styles.typeHere}>Netflix</Text>
      </View>
      <View style={styles.organismskeypad}>
        <View style={styles.secFlexBox}>
          <View style={styles.atomskeypadFlexBox1}>
            <Text style={styles.text}>q</Text>
          </View>
          <View style={[styles.atomskeypadButton1, styles.atomskeypadFlexBox1]}>
            <Text style={styles.text}>u</Text>
          </View>
          <View style={[styles.atomskeypadButton1, styles.atomskeypadFlexBox1]}>
            <Text style={styles.text}>e</Text>
          </View>
          <View style={[styles.atomskeypadButton1, styles.atomskeypadFlexBox1]}>
            <Text style={styles.text}>r</Text>
          </View>
          <View style={[styles.atomskeypadButton1, styles.atomskeypadFlexBox1]}>
            <Text style={styles.text}>t</Text>
          </View>
          <View style={[styles.atomskeypadButton1, styles.atomskeypadFlexBox1]}>
            <Text style={styles.text}>y</Text>
          </View>
          <View style={[styles.atomskeypadButton1, styles.atomskeypadFlexBox1]}>
            <Text style={styles.text}>u</Text>
          </View>
          <View style={[styles.atomskeypadButton1, styles.atomskeypadFlexBox1]}>
            <Text style={styles.text}>i</Text>
          </View>
          <View style={[styles.atomskeypadButton1, styles.atomskeypadFlexBox1]}>
            <Text style={styles.text}>o</Text>
          </View>
          <View style={[styles.atomskeypadButton1, styles.atomskeypadFlexBox1]}>
            <Text style={styles.text}>p</Text>
          </View>
        </View>
        <View style={[styles.sec1, styles.secFlexBox]}>
          <View style={styles.atomskeypadFlexBox}>
            <Text style={styles.text}>p</Text>
          </View>
          <View style={[styles.atomskeypadButton1, styles.atomskeypadFlexBox1]}>
            <Text style={styles.text}>a</Text>
          </View>
          <View style={[styles.atomskeypadButton1, styles.atomskeypadFlexBox1]}>
            <Text style={styles.text}>s</Text>
          </View>
          <View style={[styles.atomskeypadButton1, styles.atomskeypadFlexBox1]}>
            <Text style={styles.text}>d</Text>
          </View>
          <View style={[styles.atomskeypadButton1, styles.atomskeypadFlexBox1]}>
            <Text style={styles.text}>f</Text>
          </View>
          <View style={[styles.atomskeypadButton1, styles.atomskeypadFlexBox1]}>
            <Text style={styles.text}>g</Text>
          </View>
          <View style={[styles.atomskeypadButton1, styles.atomskeypadFlexBox1]}>
            <Text style={styles.text}>h</Text>
          </View>
          <View style={[styles.atomskeypadButton1, styles.atomskeypadFlexBox1]}>
            <Text style={styles.text}>j</Text>
          </View>
          <View style={[styles.atomskeypadButton1, styles.atomskeypadFlexBox1]}>
            <Text style={styles.text}>k</Text>
          </View>
          <View style={[styles.atomskeypadButton1, styles.atomskeypadFlexBox1]}>
            <Text style={styles.text}>l</Text>
          </View>
          <View style={[styles.atomskeypadButton20, styles.atomskeypadFlexBox]}>
            <Text style={styles.text}>p</Text>
          </View>
        </View>
        <View style={[styles.sec1, styles.secFlexBox]}>
          <View style={[styles.sec3, styles.secFlexBox]}>
            <Image
              style={styles.atomsiconarrowup}
              resizeMode="cover"
              source={require("../assets/atomsiconarrowup.png")}
            />
          </View>
          <View style={[styles.atomskeypadButton1, styles.atomskeypadFlexBox1]}>
            <Text style={styles.text}>z</Text>
          </View>
          <View style={[styles.atomskeypadButton1, styles.atomskeypadFlexBox1]}>
            <Text style={styles.text}>x</Text>
          </View>
          <View style={[styles.atomskeypadButton1, styles.atomskeypadFlexBox1]}>
            <Text style={styles.text}>c</Text>
          </View>
          <View style={[styles.atomskeypadButton1, styles.atomskeypadFlexBox1]}>
            <Text style={styles.text}>v</Text>
          </View>
          <View style={[styles.atomskeypadButton1, styles.atomskeypadFlexBox1]}>
            <Text style={styles.text}>b</Text>
          </View>
          <View style={[styles.atomskeypadButton1, styles.atomskeypadFlexBox1]}>
            <Text style={styles.text}>n</Text>
          </View>
          <View style={[styles.atomskeypadButton1, styles.atomskeypadFlexBox1]}>
            <Text style={styles.text}>m</Text>
          </View>
          <View style={[styles.sec4, styles.secFlexBox]}>
            <Image
              style={styles.atomsiconarrowup}
              resizeMode="cover"
              source={require("../assets/atomsiconbackspace.png")}
            />
          </View>
        </View>
        <View style={[styles.sec1, styles.secFlexBox]}>
          <View style={styles.atomskeypadFlexBox1}>
            <Text style={styles.text}>123</Text>
          </View>
          <View style={[styles.atomskeypadButton1, styles.atomskeypadFlexBox1]}>
            <Text style={styles.text}>space</Text>
          </View>
          <View style={[styles.sec4, styles.secFlexBox]}>
            <Image
              style={styles.atomsiconarrowup}
              resizeMode="cover"
              source={require("../assets/atomsiconreturn.png")}
            />
          </View>
        </View>
        <View style={[styles.sec1, styles.secFlexBox]}>
          <View style={styles.secFlexBox}>
            <Image
              style={styles.atomsiconarrowup}
              resizeMode="cover"
              source={require("../assets/atomsiconface.png")}
            />
          </View>
          <View style={[styles.atomskeypadButton20, styles.atomskeypadFlexBox]}>
            <Text style={styles.text}>z</Text>
          </View>
          <View style={[styles.atomskeypadButton20, styles.atomskeypadFlexBox]}>
            <Text style={styles.text}>x</Text>
          </View>
          <View style={[styles.atomskeypadButton20, styles.atomskeypadFlexBox]}>
            <Text style={styles.text}>c</Text>
          </View>
          <View style={[styles.atomskeypadButton20, styles.atomskeypadFlexBox]}>
            <Text style={styles.text}>v</Text>
          </View>
          <View style={[styles.atomskeypadButton20, styles.atomskeypadFlexBox]}>
            <Text style={styles.text}>b</Text>
          </View>
          <View style={[styles.atomskeypadButton20, styles.atomskeypadFlexBox]}>
            <Text style={styles.text}>n</Text>
          </View>
          <View style={[styles.atomskeypadButton20, styles.atomskeypadFlexBox]}>
            <Text style={styles.text}>m</Text>
          </View>
          <View style={[styles.sec9, styles.secFlexBox]}>
            <Image
              style={styles.atomsiconarrowup}
              resizeMode="cover"
              source={require("../assets/atomsiconmic.png")}
            />
          </View>
        </View>
      </View>
      <View style={styles.applist}>
        <View style={[styles.appitem, styles.appitemBorder]}>
          <Text style={[styles.webappName, styles.nameTypo]}>WEBAPP NAME</Text>
          <Text style={[styles.userName, styles.nameTypo]}>USER NAME</Text>
          <Image
            style={[styles.appicon, styles.appiconLayout]}
            resizeMode="cover"
            source={require("../assets/appicon12.png")}
          />
          <View style={[styles.copybutton, styles.copybuttonLayout]}>
            <View style={styles.copybuttonShadowBox1}>
              <View style={styles.copybuttonShadowBox} />
              <Image
                style={styles.materialSymbolsfileCopyOutIcon}
                resizeMode="cover"
                source={require("../assets/materialsymbolsfilecopyoutline2.png")}
              />
              <Text style={styles.copy}>COPY</Text>
            </View>
          </View>
        </View>
        <View style={[styles.appitem1, styles.appitemBorder]}>
          <Text style={[styles.webappName, styles.nameTypo]}>WEBAPP NAME</Text>
          <Text style={[styles.userName, styles.nameTypo]}>USER NAME</Text>
          <Image
            style={[styles.appicon1, styles.appiconLayout]}
            resizeMode="cover"
            source={require("../assets/appicon13.png")}
          />
          <View style={[styles.copybutton2, styles.copybuttonLayout]}>
            <View style={styles.copybuttonShadowBox1}>
              <View style={styles.copybuttonShadowBox} />
              <Image
                style={styles.materialSymbolsfileCopyOutIcon}
                resizeMode="cover"
                source={require("../assets/materialsymbolsfilecopyoutline3.png")}
              />
              <Text style={styles.copy}>COPY</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    height: 52,
    width: 52,
    overflow: "hidden",
  },
  atomskeypadFlexBox1: {
    paddingVertical: Padding.p_11xs,
    paddingHorizontal: Padding.p_5xs,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#333",
    borderStyle: "solid",
    flexDirection: "row",
    flex: 1,
  },
  secFlexBox: {
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  atomskeypadFlexBox: {
    opacity: 0,
    paddingVertical: Padding.p_11xs,
    paddingHorizontal: Padding.p_5xs,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#333",
    borderStyle: "solid",
    flexDirection: "row",
    flex: 1,
  },
  appitemBorder: {
    borderColor: "#000",
    borderWidth: 1,
    borderStyle: "solid",
    width: 360,
    backgroundColor: Color.white,
  },
  nameTypo: {
    color: Color.gray_200,
    left: "28.33%",
    fontFamily: FontFamily.sourceSansProBold,
    fontWeight: "700",
    textAlign: "left",
    position: "absolute",
  },
  appiconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0.28%",
    right: "77.78%",
    width: "21.94%",
    position: "absolute",
    overflow: "hidden",
  },
  copybuttonLayout: {
    width: "24.17%",
    position: "absolute",
  },
  ictwotoneSyncIcon: {
    marginLeft: 16,
  },
  navbar: {
    top: 725,
    backgroundColor: Color.black,
    height: 75,
    paddingHorizontal: Padding.p_lgi,
    paddingVertical: Padding.p_5xs,
    alignItems: "flex-end",
    flexDirection: "row",
    width: 360,
    left: 0,
    position: "absolute",
  },
  searchbarChild: {
    borderRadius: Border.br_4xl,
    backgroundColor: Color.gray_100,
    top: 0,
    height: 53,
    width: 360,
    left: 0,
    position: "absolute",
  },
  typeHere: {
    top: 14,
    left: 22,
    fontFamily: FontFamily.sourceSansProRegular,
    textAlign: "left",
    color: Color.black,
    fontSize: 20,
    position: "absolute",
  },
  searchbar: {
    top: 439,
    height: 53,
    left: -1,
    width: 360,
    position: "absolute",
  },
  text: {
    fontFamily: FontFamily.largeRegular,
    color: Color.backgroundLightBlack,
    textAlign: "center",
    fontSize: FontSize.largeRegular_size,
  },
  atomskeypadButton1: {
    marginLeft: 4,
  },
  atomskeypadButton20: {
    marginLeft: 4,
  },
  sec1: {
    marginTop: 4,
  },
  atomsiconarrowup: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  sec3: {
    borderWidth: 1,
    borderColor: "#333",
    borderStyle: "solid",
    alignSelf: "stretch",
  },
  sec4: {
    marginLeft: 4,
    borderWidth: 1,
    borderColor: "#333",
    borderStyle: "solid",
    alignSelf: "stretch",
  },
  sec9: {
    marginLeft: 4,
  },
  organismskeypad: {
    top: 505,
    width: 362,
    height: 220,
    padding: Padding.p_9xs,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#333",
    borderStyle: "solid",
    left: -1,
    position: "absolute",
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
    height: "100.68%",
    bottom: "-0.68%",
    top: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0.28%",
    right: "77.78%",
    width: "21.94%",
  },
  copybuttonShadowBox: {
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
    left: "0%",
    bottom: "0%",
    right: "0%",
    height: "100%",
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
    right: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  copy: {
    top: "19.44%",
    left: "7.2%",
    fontFamily: FontFamily.sourceSansProBold,
    fontWeight: "700",
    textAlign: "left",
    color: Color.black,
    fontSize: 20,
    position: "absolute",
  },
  copybuttonShadowBox1: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: "0%",
    height: "100%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  copybutton: {
    height: "28.21%",
    top: "35.87%",
    right: "1.94%",
    bottom: "35.91%",
    left: "73.89%",
  },
  appitem: {
    height: 128,
  },
  appicon1: {
    height: "101.35%",
    top: "-0.67%",
    bottom: "-0.67%",
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0.28%",
    right: "77.78%",
    width: "21.94%",
  },
  copybutton2: {
    height: "27.9%",
    top: "34.16%",
    right: "1.67%",
    bottom: "37.94%",
    left: "74.17%",
  },
  appitem1: {
    height: 129,
  },
  applist: {
    height: 423,
    paddingBottom: Padding.p_smi,
    alignItems: "center",
    top: 0,
    left: -1,
    position: "absolute",
  },
  filteredsearch: {
    height: 800,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.white,
  },
});

export default FilteredSearch;
