import React from "react";
import { useState } from "react";
import { FlatList, Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { MainStackParamList } from "../types/navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Layout, Text, TopNav, useTheme, themeColor } from "react-native-rapi-ui";
import { Ionicons } from "@expo/vector-icons";
import SearchBar from "./SearchBar";
import { Button, List, Colors } from "react-native-paper";

import RadioButtonGroup from "react-native-paper/lib/typescript/components/RadioButton/RadioButtonGroup";

export default function ({navigation}: NativeStackScreenProps<MainStackParamList, "MainTabs">) {

  const { isDarkmode, setTheme } = useTheme();
  const [searchPhrase, setSearchPhrase ] = useState("");
  const [clicked, setClicked] = useState(false);
  const [searchBtn, setSearchBtn] = useState(false);
  const [mapsBtn, setMapsBtn] = useState(false);
  const itemsMAp = [
    {
      id: 1,
      title: "First Item",
      description: "Item description",
      description2: "Item description2",
      image: "../../assets/logo.png",
    },
    {
      id: 2,
      title: "Second Item",
      description: "Item description",
      description2: "Item description2",
      image: "../../assets/logo.png",
    },
    {
      id: 3,
      title: "Third Item",
      description: "Item description",
      description2: "Item description2",
      image: "../../assets/logo.png",
    }
  ]

  return (
    <Layout>
      <TopNav
        middleContent="About"
        rightContent={
          <Ionicons
            name={isDarkmode ? "sunny" : "moon"}
            size={20}
            color={isDarkmode ? themeColor.white100 : themeColor.dark}
          />
        }
        leftContent={
          <Image
            source={require("../../assets/logo.png")}
            style={{ width: 60, height: 60 }}
          />
          }
        rightAction={() => {
          if (isDarkmode) {
            setTheme("light");
          } else {
            setTheme("dark");
          }
        }}
      />
      <TopNav
        leftContent={
          <Button
            onPress={()=> {setSearchBtn(true); setMapsBtn(false)}}
            >
              Chercher
            </Button>
        
        }
        rightContent={
          <Button
            onPress={()=> {setMapsBtn(true); setSearchBtn(false)}}
            >
              Maps
            </Button>
        
        }
      />
      {searchBtn &&
      <>
        <TopNav
          middleContent={
            <SearchBar
            clicked={clicked}
            searchPhrase={searchPhrase}
            setSearchPhrase={setSearchPhrase}
            setCLicked={setClicked}
          />
        }
        />
      
      </>
      } 
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: isDarkmode ? "#17171E" : themeColor.white100,
          }}
        >

        </View>

      </View>
    </Layout>
  );
}
const styles = StyleSheet.create({
  itemContainer: {
    display: "flex",
    flexDirection: 'row',
    margin: "10px",
    alignItems: "center",
    borderColor: "#ccc",
    backgroundColor: "#fff",
    height: 110,
    width: 350,

  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  title: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  details: {
    color: "#666",
  },
  btn: {
    backgroundColor: "#FFC107",
    color: "#ffffff",
    margin: "auto",

  }
});
