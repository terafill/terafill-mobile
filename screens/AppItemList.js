import { memo, useEffect, useState, useRef } from "react";
import { View, Text, Pressable, Image, StyleSheet, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Button } from "react-native-paper";
import { useTokenExpiration } from '../utils/TokenTools';
import { getDefaultVaultItems, updateVaultItem, createVaultItem, deleteVaultItem } from '../utils/data';

const AppItem = memo(({ id, website, title, username, itemDataList }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.appItem}
      onPress={
        () => {
          navigation.navigate(
            "AppHome",
            {
              screen: "AppItemPage",
              params: {itemId: id, itemDataList: itemDataList}
            }
          )
        }
      }
    >
      <Image
        style={styles.appItemIcon}
        resizeMode="cover"
        source={{
          uri: `https://cool-rose-moth.faviconkit.com/${website}/256`
        }}
      />
      <View style={styles.appItemData}>
        <Text style={styles.appItemTitle}>{title}</Text>
        <Text style={styles.appItemUsername}>{username}</Text>
      </View>
    </Pressable>
  );
});


const AppItemList = () => {
  const [appListFlatListData, setAppListFlatListData] = useState({
      1: {
        id: 1,
        title: 'Netflix',
        icon: null,
        password: "Test@1234",
        website: "netflix.com",
        username: 'john.doe@keylance.in',
      },
      2: {
        id: 2,
        title: 'Facebook',
        icon: null,
        password: "Test@1234",
        website: "facebook.com",
        username: 'john.doe@keylance.in',
      },
      3: {
        id: 3,
        title: 'Pinterest',
        icon: null,
        password: "Test@1234",
        website: "pinterest.com",
        username: 'john.doe@keylance.in',
      },
      4: {
        id: 4,
        title: 'Instagram',
        icon: null,
        password: "Test@1234",
        website: "instagram.com",
        username: 'john.doe@keylance.in',
      },
      5: {
        id: 5,
        title: 'Gmail',
        icon: null,
        password: "Test@1234",
        website: "gmail.com",
        username: 'john.doe@keylance.in',
      },
      6: {
        id: 6,
        title: 'Roblox',
        icon: null,
        password: "Test@1234",
        website: "roblox.com",
        username: 'john.doe@keylance.in',
      },
      7: {
        id: 7,
        title: 'swiggy',
        icon: null,
        password: "Test@1234",
        website: "swiggy.com",
        username: 'john.doe@keylance.in',
      },
      8: {
        id: 8,
        title: 'zomato',
        icon: null,
        password: "Test@1234",
        website: "zomato.com",
        username: 'john.doe@keylance.in',
      },
      9: {
        id: 9,
        title: 'microsoft',
        icon: null,
        password: "Test@1234",
        website: "microsoft.com",
        username: 'john.doe@keylance.in',
      }
    }
  );

  const [itemDataList, setItemDataList] = useState([]);
  const shouldLoad = useRef(true);

  useTokenExpiration();

  useEffect(() => {
    if(shouldLoad.current){
      (async () => {
        console.log("Data loading!")
        const data = await getDefaultVaultItems();
        const morphedData = {};
        for (let idx=0;idx<data.length;idx+=1){
          morphedData[data[idx].id] = data[idx];
          morphedData[data[idx].id].icon =  `https://cool-rose-moth.faviconkit.com/${data[idx].website}/256`;
        }
        setItemDataList(morphedData);
      })();
      shouldLoad.current = false;
    }
  }, []);

  useEffect(()=>{
    console.log("itemDataList", itemDataList);
  }, [itemDataList])

  const updateItem = (itemId, attribute, value) => {
    setItemDataList(prevItemDataList=>({
      ...prevItemDataList,
      [itemId]: {
        ...prevItemDataList[itemId],
        [attribute]: value
      }
    }));
  }

    return (
        <View style={{
          height: '100%',
          flexDirection: 'column',
        }}
        id="mainFrame">
          <View style={{
            flex: 1,
            height: '100%',
          }}
          id="innerFrame">
            <FlatList
              vertical={true}
              style={{
                width: "100%",
                zIndex: 0,
                flex: 1
              }}
              data={Object.entries(itemDataList).map(([id, value]) => value)}
              renderItem={({ item }) =>{
                 return <AppItem
                  key={item.id}
                  id={item.id}
                  website={item.website}
                  title={item.title}
                  username={item.username}
                  itemDataList={itemDataList}
                  />
                  }
                }
            />
    {/*        <Button
              buttonType="blue"
              label="Sync using code"
            />*/}
          </View>
          <View style={{
            flex: null,
            width: "100%"
          }}
          id="footer">
          </View>
        </View>
    );

}

const styles = StyleSheet.create({
  appItem: {
    flexDirection: "row",
    alignItems: 'center',
    gap: "4px",
    padding: "8px",
    borderBottomColor: '#e2e2e2',
    borderBottomWidth: 1,
  },
  appItemIcon: {
    height: 48,
    width: 48,
  },
  appItemData: {
    flexDirection: 'column',
    padding: "4px"
  },
  appItemTitle: {
    flex: 1,
    fontWeight: 500,
    fontSize: 28,
  },
  appItemUsername: {
    flex: 1,
    fontWeight: 400,
    fontSize: 20,
  }
});

export default AppItemList;