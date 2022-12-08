import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { MainStackParamList } from "../types/navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  Layout,
  TopNav,
  Text,
  themeColor,
  useTheme,
} from "react-native-rapi-ui";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { Searchbar } from 'react-native-paper';

const persons = [ /* list of person data from earlier */{ name: "med 1", id: 1 }, { name: "med 2", id: 2 }];

export default function ({
  navigation,
}: NativeStackScreenProps<MainStackParamList, "SecondScreen">) {
  const { isDarkmode, setTheme } = useTheme();
  const [searchQuery, setSearchQuery] = React.useState('');

  return (
    <Layout>
      <TopNav
        middleContent="Second Screen"
        leftContent={
          <Ionicons
            name="chevron-back"
            size={20}
            color={isDarkmode ? themeColor.white100 : themeColor.dark}
          />
        }
        leftAction={() => navigation.goBack()}
        rightContent={
          <Ionicons
            name={isDarkmode ? "sunny" : "moon"}
            size={20}
            color={isDarkmode ? themeColor.white100 : themeColor.dark}
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
      <SafeAreaView style={styles.container}>
        <Searchbar
          placeholder="Search"
          value={searchQuery}
        />
        <Searchbar
         style={styles.Searchbar}
          placeholder="Search"
          value={searchQuery}
        />

        
      </SafeAreaView>
    </Layout>
  );
}



const styles = StyleSheet.create({
  container: {
    padding: 50,
    flex: 1,
  },
  item: {
    padding: 20,
    fontSize: 15,
    marginTop: 5,
  },
  Searchbar:{
    marginTop:5
  }
});