import React from "react";
import {ScrollView, StyleSheet, View} from "react-native";
import { MainStackParamList } from "../types/navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Layout, Text, TopNav, useTheme, themeColor } from "react-native-rapi-ui";
import { Ionicons } from "@expo/vector-icons";
import {Avatar, Button, ButtonGroup, Divider, Image, withTheme} from '@rneui/themed';

const styles = StyleSheet.create({
    list: {
        width: '100%',
        backgroundColor: '#000',
    },
    item: {
        aspectRatio: 1,
        width: '100%',
        height: "170px",
        display: "flex",
        justifyContent: "flex-start",
        flex: 1,
    },
});
export default function ({
  route,
  navigation,
}: NativeStackScreenProps<MainStackParamList, "MainTabs">) {

  const { isDarkmode, setTheme } = useTheme();
  const item = route.params;
  const list = [ `Email: ${JSON.stringify(item.item.email)}`, `Téléphone: ${JSON.stringify(item.item.phone)}`, `Adresse: ${JSON.stringify(item.item.adresseLocal)}`]
    const listItem = list.map((value)=>{
        return(<div style={{
            display: "flex",
            flexDirection: "column"
        }}>
            <Text style={{padding: "25px", fontWeight: "bold"}}> {value}</Text>
            <Divider/>
        </div>)
    })
  return (
    <Layout>
      <TopNav
        middleContent="Radio Info"
        rightContent={
          <Ionicons
            name={isDarkmode ? "sunny" : "moon"}
            size={20}
            color={isDarkmode ? themeColor.white100 : themeColor.dark}
          />
        }
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
      <View
        style={{
          flex: 1,
          backgroundColor: "#FFFF",
            display: "flex",
            flexDirection: "column"
        }}
      >
        <ScrollView>
        <div>
            <div>
                <div
                    style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        marginTop: "10px",
                        zIndex: "100"
                    }}>
                    <Avatar
                        size={130}
                        rounded
                        title="Rd"
                        containerStyle={{ backgroundColor: "blue" }}
                    />
                    <div style={{padding: "10px"}}>
                        <Text> {`${JSON.stringify(item.item.name)}`} </Text>
                    </div>

                </div>
            </div>
        </div>
        <div style={{display: "flex", flexDirection: "column"}}>
            {listItem}
        </div>
          <div
              style={{
                display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "10px"
                }}
          >
          </div>
          <Button
          size="md"
            onPress={() => navigation.navigate("PasserRendezVous")}
          >
              <Text> Passez RV</Text>
          </Button>
          </ScrollView>
      </View>
    </Layout>
  );
}
