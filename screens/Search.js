import * as React from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import { Color, FontFamily, Padding, FontSize, Border } from "../GlobalStyles";

const Search = () => {
  return (
    <View style={styles.search}>
      <View style={styles.applist}>
        <View style={[styles.appitem, styles.appitemBorder]}>
          <Text style={[styles.webappName, styles.nameTypo]}>WEBAPP NAME</Text>
          <Text style={[styles.userName, styles.nameTypo]}>USER NAME</Text>
          <Image
            style={[styles.appicon, styles.appiconLayout]}
            resizeMode="cover"
            source={require("../assets/appicon2.png")}
          />
          <View style={[styles.copybutton, styles.copybuttonPosition2]}>
            <View style={styles.copybuttonShadowBox}>
              <View style={styles.copybuttonChildShadowBox} />
              <Image
                style={styles.materialSymbolsfileCopyOutIcon}
                resizeMode="cover"
                source={require("../assets/materialsymbolsfilecopyoutline1.png")}
              />
              <Text style={[styles.copy, styles.copyTypo]}>COPY</Text>
            </View>
          </View>
        </View>
        <View style={[styles.appitem, styles.appitemBorder]}>
          <Text style={[styles.webappName, styles.nameTypo]}>WEBAPP NAME</Text>
          <Text style={[styles.userName, styles.nameTypo]}>USER NAME</Text>
          <Image
            style={[styles.appicon1, styles.appiconPosition]}
            resizeMode="cover"
            source={require("../assets/appicon3.png")}
          />
          <View style={[styles.copybutton2, styles.copybuttonPosition2]}>
            <View style={styles.copybuttonShadowBox}>
              <View style={styles.copybuttonChildShadowBox} />
              <Image
                style={styles.materialSymbolsfileCopyOutIcon}
                resizeMode="cover"
                source={require("../assets/materialsymbolsfilecopyoutline1.png")}
              />
              <Text style={[styles.copy, styles.copyTypo]}>COPY</Text>
            </View>
          </View>
        </View>
        <View style={[styles.appitem2, styles.appitemBorder]}>
          <Text style={[styles.webappName, styles.nameTypo]}>WEBAPP NAME</Text>
          <Text style={[styles.userName, styles.nameTypo]}>USER NAME</Text>
          <Image
            style={[styles.appicon2, styles.appiconLayout]}
            resizeMode="cover"
            source={require("../assets/appicon4.png")}
          />
          <View style={[styles.copybutton4, styles.copybuttonPosition1]}>
            <View style={styles.copybuttonShadowBox}>
              <View style={styles.copybuttonChildShadowBox} />
              <Image
                style={styles.materialSymbolsfileCopyOutIcon}
                resizeMode="cover"
                source={require("../assets/materialsymbolsfilecopyoutline1.png")}
              />
              <Text style={[styles.copy, styles.copyTypo]}>COPY</Text>
            </View>
          </View>
        </View>
        <View style={[styles.appitem, styles.appitemBorder]}>
          <Text style={[styles.webappName, styles.nameTypo]}>WEBAPP NAME</Text>
          <Text style={[styles.userName, styles.nameTypo]}>USER NAME</Text>
          <Image
            style={[styles.appicon3, styles.appiconPosition]}
            resizeMode="cover"
            source={require("../assets/appicon5.png")}
          />
          <View style={[styles.copybutton6, styles.copybuttonPosition]}>
            <View style={styles.copybuttonShadowBox}>
              <View style={styles.copybuttonChildShadowBox} />
              <Image
                style={styles.materialSymbolsfileCopyOutIcon}
                resizeMode="cover"
                source={require("../assets/materialsymbolsfilecopyoutline1.png")}
              />
              <Text style={[styles.copy, styles.copyTypo]}>COPY</Text>
            </View>
          </View>
        </View>
        <View style={[styles.appitem, styles.appitemBorder]}>
          <Text style={[styles.webappName, styles.nameTypo]}>WEBAPP NAME</Text>
          <Text style={[styles.userName, styles.nameTypo]}>USER NAME</Text>
          <Image
            style={styles.appicon4}
            resizeMode="cover"
            source={require("../assets/appicon6.png")}
          />
          <View style={[styles.copybutton8, styles.copybuttonPosition1]}>
            <View style={styles.copybuttonShadowBox}>
              <View style={styles.copybuttonChildShadowBox} />
              <Image
                style={styles.materialSymbolsfileCopyOutIcon}
                resizeMode="cover"
                source={require("../assets/materialsymbolsfilecopyoutline1.png")}
              />
              <Text style={[styles.copy, styles.copyTypo]}>COPY</Text>
            </View>
          </View>
        </View>
        <View style={[styles.appitem, styles.appitemBorder]}>
          <Text style={[styles.webappName, styles.nameTypo]}>WEBAPP NAME</Text>
          <Text style={[styles.userName, styles.nameTypo]}>USER NAME</Text>
          <Image
            style={styles.appicon4}
            resizeMode="cover"
            source={require("../assets/appicon7.png")}
          />
          <View style={[styles.copybutton10, styles.copybuttonPosition1]}>
            <View style={styles.copybuttonShadowBox}>
              <View style={styles.copybuttonChildShadowBox} />
              <Image
                style={styles.materialSymbolsfileCopyOutIcon}
                resizeMode="cover"
                source={require("../assets/materialsymbolsfilecopyoutline1.png")}
              />
              <Text style={[styles.copy, styles.copyTypo]}>COPY</Text>
            </View>
          </View>
        </View>
        <View style={[styles.appitem, styles.appitemBorder]}>
          <Text style={[styles.webappName, styles.nameTypo]}>WEBAPP NAME</Text>
          <Text style={[styles.userName, styles.nameTypo]}>USER NAME</Text>
          <Image
            style={styles.appicon4}
            resizeMode="cover"
            source={require("../assets/appicon8.png")}
          />
          <View style={[styles.copybutton12, styles.copybuttonLayout]}>
            <View style={styles.copybuttonShadowBox}>
              <View style={styles.copybuttonChildShadowBox} />
              <Image
                style={styles.materialSymbolsfileCopyOutIcon}
                resizeMode="cover"
                source={require("../assets/materialsymbolsfilecopyoutline1.png")}
              />
              <Text style={[styles.copy, styles.copyTypo]}>COPY</Text>
            </View>
          </View>
        </View>
        <View style={[styles.appitem, styles.appitemBorder]}>
          <Text style={[styles.webappName, styles.nameTypo]}>WEBAPP NAME</Text>
          <Text style={[styles.userName, styles.nameTypo]}>USER NAME</Text>
          <Image
            style={styles.appicon4}
            resizeMode="cover"
            source={require("../assets/appicon9.png")}
          />
          <View style={[styles.copybutton14, styles.copybuttonPosition]}>
            <View style={styles.copybuttonShadowBox}>
              <View style={styles.copybuttonChildShadowBox} />
              <Image
                style={styles.materialSymbolsfileCopyOutIcon}
                resizeMode="cover"
                source={require("../assets/materialsymbolsfilecopyoutline1.png")}
              />
              <Text style={[styles.copy, styles.copyTypo]}>COPY</Text>
            </View>
          </View>
        </View>
        <View style={[styles.appitem, styles.appitemBorder]}>
          <Text style={[styles.webappName, styles.nameTypo]}>WEBAPP NAME</Text>
          <Text style={[styles.userName, styles.nameTypo]}>USER NAME</Text>
          <Image
            style={styles.appicon4}
            resizeMode="cover"
            source={require("../assets/appicon10.png")}
          />
          <View style={[styles.copybutton16, styles.copybuttonPosition]}>
            <View style={styles.copybuttonShadowBox}>
              <View style={styles.copybuttonChildShadowBox} />
              <Image
                style={styles.materialSymbolsfileCopyOutIcon}
                resizeMode="cover"
                source={require("../assets/materialsymbolsfilecopyoutline1.png")}
              />
              <Text style={[styles.copy, styles.copyTypo]}>COPY</Text>
            </View>
          </View>
        </View>
        <View style={[styles.appitem, styles.appitemBorder]}>
          <Text style={[styles.webappName, styles.nameTypo]}>WEBAPP NAME</Text>
          <Text style={[styles.userName, styles.nameTypo]}>USER NAME</Text>
          <Image
            style={styles.appicon4}
            resizeMode="cover"
            source={require("../assets/appicon11.png")}
          />
          <View style={[styles.copybutton18, styles.copybuttonLayout]}>
            <View style={styles.copybuttonShadowBox}>
              <View style={styles.copybuttonChildShadowBox} />
              <Image
                style={styles.materialSymbolsfileCopyOutIcon}
                resizeMode="cover"
                source={require("../assets/materialsymbolsfilecopyoutline1.png")}
              />
              <Text style={[styles.copy, styles.copyTypo]}>COPY</Text>
            </View>
          </View>
        </View>
      </View>
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
      <View style={[styles.searchbar, styles.searchbarLayout]}>
        <View style={[styles.searchbarChild, styles.searchbarLayout]} />
        <Text style={[styles.typeHere, styles.copyTypo]}>Type Here ...</Text>
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
              source={require("../assets/atomsiconbackspace1.png")}
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
              source={require("../assets/atomsiconface1.png")}
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
              source={require("../assets/atomsiconmic1.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appitemBorder: {
    width: 360,
    borderWidth: 1,
    borderColor: "#000",
    borderStyle: "solid",
    backgroundColor: Color.white,
  },
  nameTypo: {
    textAlign: "left",
    color: Color.gray_200,
    left: "28.33%",
    fontFamily: FontFamily.sourceSansProBold,
    fontWeight: "700",
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
  copybuttonPosition2: {
    left: "73.33%",
    right: "2.5%",
    width: "24.17%",
    position: "absolute",
  },
  copyTypo: {
    color: Color.black,
    fontSize: 20,
    textAlign: "left",
    position: "absolute",
  },
  appiconPosition: {
    top: "-0.67%",
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0.28%",
    right: "77.78%",
    width: "21.94%",
    position: "absolute",
    overflow: "hidden",
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
  iconLayout: {
    height: 52,
    width: 52,
    overflow: "hidden",
  },
  searchbarLayout: {
    height: 53,
    width: 360,
    position: "absolute",
  },
  atomskeypadFlexBox1: {
    paddingVertical: Padding.p_11xs,
    paddingHorizontal: Padding.p_5xs,
    alignSelf: "stretch",
    justifyContent: "center",
    borderColor: "#333",
    flexDirection: "row",
    borderWidth: 1,
    borderStyle: "solid",
    alignItems: "center",
    flex: 1,
  },
  secFlexBox: {
    alignSelf: "stretch",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  atomskeypadFlexBox: {
    opacity: 0,
    paddingVertical: Padding.p_11xs,
    paddingHorizontal: Padding.p_5xs,
    alignSelf: "stretch",
    justifyContent: "center",
    borderColor: "#333",
    flexDirection: "row",
    borderWidth: 1,
    borderStyle: "solid",
    alignItems: "center",
    flex: 1,
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
    bottom: "-0.67%",
    top: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0.28%",
    right: "77.78%",
    width: "21.94%",
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
    color: Color.black,
    fontSize: 20,
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
    left: "0%",
    bottom: "0%",
    right: "0%",
    height: "100%",
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
    height: 129,
  },
  appicon1: {
    height: "101.35%",
    bottom: "-0.67%",
  },
  copybutton2: {
    top: "33.95%",
    bottom: "38.15%",
    height: "27.9%",
  },
  appicon2: {
    height: "101.36%",
    top: "-0.68%",
    bottom: "-0.68%",
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0.28%",
    right: "77.78%",
    width: "21.94%",
  },
  copybutton4: {
    height: "28.21%",
    top: "35.87%",
    bottom: "35.91%",
  },
  appitem2: {
    height: 128,
  },
  appicon3: {
    bottom: "0.67%",
    height: "100%",
    top: "-0.67%",
  },
  copybutton6: {
    top: "34.23%",
    bottom: "37.86%",
  },
  appicon4: {
    right: "78.06%",
    left: "0%",
    bottom: "0%",
    height: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
    top: "0%",
    width: "21.94%",
    position: "absolute",
    overflow: "hidden",
  },
  copybutton8: {
    top: "34.22%",
    bottom: "37.88%",
    height: "27.9%",
  },
  copybutton10: {
    top: "35.75%",
    bottom: "36.35%",
    height: "27.9%",
  },
  copybutton12: {
    top: "35.73%",
    right: "1.39%",
    bottom: "36.37%",
    left: "74.44%",
    height: "27.9%",
  },
  copybutton14: {
    top: "34.16%",
    bottom: "37.94%",
  },
  copybutton16: {
    top: "32.59%",
    bottom: "39.5%",
  },
  copybutton18: {
    top: "32.53%",
    right: "1.11%",
    bottom: "39.61%",
    left: "74.72%",
    height: "27.86%",
  },
  applist: {
    height: 423,
    paddingBottom: Padding.p_smi,
    alignItems: "center",
    top: 0,
    position: "absolute",
    left: -1,
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
    left: 0,
    width: 360,
    position: "absolute",
  },
  searchbarChild: {
    borderRadius: Border.br_4xl,
    backgroundColor: Color.gray_100,
    left: 0,
    height: 53,
    top: 0,
  },
  typeHere: {
    top: 14,
    left: 22,
    fontFamily: FontFamily.sourceSansProRegular,
  },
  searchbar: {
    top: 439,
    height: 53,
    left: -1,
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
    borderColor: "#333",
    alignSelf: "stretch",
    borderWidth: 1,
    borderStyle: "solid",
  },
  sec4: {
    marginLeft: 4,
    borderColor: "#333",
    alignSelf: "stretch",
    borderWidth: 1,
    borderStyle: "solid",
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
    borderColor: "#333",
    borderWidth: 1,
    borderStyle: "solid",
    alignItems: "center",
    left: -1,
    position: "absolute",
  },
  search: {
    height: 800,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.white,
  },
});

export default Search;
