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
  navigation,
}: NativeStackScreenProps<MainStackParamList, "MainTabs">) {

  const { isDarkmode, setTheme } = useTheme();
  const list = ["Date de naissance","Email", "Mot de passe", "Téléphone", "Adresse"]
    const listItem = list.map((value)=>{
        return(<div style={{
            display: "flex",
            flexDirection: "column"
        }}>
            <Text style={{padding: "25px", fontWeight: "bold"}}> {value}</Text>
            <Divider/>
        </div>)
    })
    const token = localStorage.getItem("token")
  return (
    <Layout>
      <TopNav
        middleContent="Profile"
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
                <Image
                    source={{uri: "https://source.unsplash.com/random?sig=1"}}
                    containerStyle={styles.item}
                />
                <div
                    style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        marginTop: "-65px",
                        zIndex: "100"
                    }}>
                    <Avatar
                        size={130}
                        rounded
                        title="Rd"
                        containerStyle={{ backgroundColor: "blue" }}
                    />
                    <div style={{padding: "10px"}}>
                        <Text> {token && JSON.parse(token).firstname} </Text>
                    </div>

                </div>
            </div>
        </div>
        <div style={{display: "flex", flexDirection: "column"}}>
          {  token && 
        <div style={{
            display: "flex",
            flexDirection: "column"
        }}>
            <Text style={{padding: "25px", fontWeight: "bold"}}>NOM: {JSON.parse(token).firstname}</Text>
            <Divider/>
            <Text style={{padding: "25px", fontWeight: "bold"}}>Prenom: {JSON.parse(token).lastname}</Text>
            <Divider/>
            <Text style={{padding: "25px", fontWeight: "bold"}}>Email: {JSON.parse(token).email}</Text>
            <Divider/>
            <Text style={{padding: "25px", fontWeight: "bold"}}>Telephone: {JSON.parse(token).phone}</Text>
            <Divider/>
            <Text style={{padding: "25px", fontWeight: "bold"}}>Date de Naissance: {JSON.parse(token).dateNaissance}</Text>
        </div>
        }
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
          </ScrollView>
      </View>
    </Layout>
  );
}




