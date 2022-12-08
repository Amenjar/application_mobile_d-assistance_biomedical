import React from "react";
import {
  View, Linking, Image, StyleSheet,
} from "react-native";
import { MainStackParamList } from "../types/navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { supabase } from "../initSupabase";
import {
  Layout,
  Button,
  Text,
  TopNav,
  Section,
  SectionContent,
  useTheme,
  themeColor,
} from "react-native-rapi-ui";
import { Ionicons } from "@expo/vector-icons";
import PagerView from 'react-native-pager-view';
import {Avatar, Divider} from '@rneui/themed';
import { logout } from "../services/auth";

export default function ({
  navigation,
}: NativeStackScreenProps<MainStackParamList, "MainTabs">) {
  const { isDarkmode, setTheme } = useTheme();
  
  
  return (
    <Layout>
    
      <TopNav
        middleContent="Acceuil"
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
            display: "flex",
            flexDirection: "column",
            flex: 1,
            alignItems: "flex-start",
            justifyContent: "center"
        }}
      >
          <div
              style={{
                  display: "flex",
                  flexDirection: "row",
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%"
          }}>
              <div>
                <Avatar
                    size={110}
                    rounded
                    title="Rd"
                    containerStyle={{ backgroundColor: "blue"}}
                      avatarStyle={{ resizeMode: "center" }}
                    source={require("../../assets/image2.png")}
                    onPress={() => navigation.navigate('Medecins')}
                />
                <div style={{
                  width: "100%", 
                  margin: "auto",
                  display:"flex", 
                  justifyContent: "space-around",
                  padding: "5px 0px 5px 0px"
                  }}
                  >
                  <Text> Médecin </Text>
                </div>
              </div>
              <div >
                  <Avatar
                      size={110}
                      rounded
                      title="Rd"
                      containerStyle={{ backgroundColor: "blue"}}
                      avatarStyle={{ resizeMode: "center" }}
                      source={require("../../assets/image3.png")}
                      onPress={() => navigation.navigate('Radios')}
                  />
                  <div style={{
                    width: "100%", 
                    margin: "auto",
                    display:"flex", 
                    justifyContent: "space-around",
                    padding: "5px 0px 5px 0px"
                    }}
                  >
                    <Text> Radiologie </Text>
                  </div>
              </div>
              <div>
                  <Avatar
                      size={110}
                      rounded
                      title="Rd"
                      containerStyle={{ backgroundColor: "blue"}}
                      avatarStyle={{ resizeMode: "center" }}
                      source={require("../../assets/image3.png")}
                      onPress={() => navigation.navigate('Analyses')}
                  />
                  <div style={{
                    width: "100%", 
                    margin: "auto",
                    display:"flex", 
                    justifyContent: "space-around",
                    padding: "5px 0px 5px 0px"
                    }}
                  >
                    <Text> Analyse </Text>
                  </div>
              </div>
          </div>
          <div
              style={{ width: "70vh", margin:"auto" }}>
              <Divider
                  color="black"
                  width={1}
                  orientation="horizontal"
              />
          </div>
          <div
              style={{
                  display: "flex",
                  flexDirection: "row",
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%"
              }}>
              <div>
                  <Avatar
                      size={110}
                      rounded
                      title="Rd"
                      containerStyle={{ backgroundColor: "blue"}}
                      avatarStyle={{ resizeMode: "center" }}
                      source={require("../../assets/image.png")}
                      onPress={() => navigation.navigate('Ordonnaces')}
                  />
                  <div style={{
                    width: "100%", 
                    margin: "auto",
                    display:"flex", 
                    justifyContent: "space-around",
                    padding: "5px 0px 5px 0px"
                    }}
                  >
                    <Text> Ordonnacement </Text>
                  </div>
              </div>
              <div>
                  <Avatar
                      size={110}
                      rounded
                      title="Rd"
                      containerStyle={{ backgroundColor: "blue"}}
                      avatarStyle={{ resizeMode: "center" }}
                      source={require("../../assets/image5.png")}
                      onPress={() => navigation.navigate('ListRendezVous')}
                  />
                  <div style={{
                    width: "100%", 
                    margin: "auto",
                    display:"flex", 
                    justifyContent: "space-around",
                    padding: "5px 0px 5px 0px"
                    }}
                  >
                    <Text> Rendez vous </Text>
                  </div>
              </div>
              <div >
                  <Avatar
                      size={110}
                      rounded
                      title="Rd"
                      containerStyle={{ backgroundColor: "blue"}}
                      avatarStyle={{ resizeMode: "center" }}
                      source={require("../../assets/image.png")}
                      onPress={() => navigation.navigate('Resultat')}
                     
                  />
                  <div style={{
                    width: "100%", 
                    margin: "auto",
                    display:"flex", 
                    justifyContent: "space-around",
                    padding: "5px 0px 5px 0px"
                    }}
                  >
                    <Text> Résultas </Text>
                  </div>
              </div>
          </div>
          <div
              style={{ width: "70vh", margin:"auto" }}>
              <Divider
                  color="black"
                  width={1}
                  orientation="horizontal"
              />
          </div>
          <div
              style={{
                  display: "flex",
                  flexDirection: "row",
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "space-evenly",
                  width: "100%"
              }}>
              <div>
                  <Avatar
                      size={110}
                      rounded
                      title="Rd"
                      containerStyle={{ backgroundColor: "blue"}}
                      avatarStyle={{ resizeMode: "center" }}
                      source={require("../../assets/image.png")}
                      onPress={() => navigation.navigate('Certificats')}
                  />
                  <div style={{
                    width: "100%", 
                    margin: "auto",
                    display:"flex", 
                    justifyContent: "space-around",
                    padding: "5px 0px 5px 0px"
                    }}
                  >
                    <Text> Certificats </Text>
                  </div>
              </div>
              <div>
                  <Avatar
                      size={110}
                      rounded
                      title="Rd"
                      containerStyle={{ backgroundColor: "blue"}}
                      avatarStyle={{ resizeMode: "center" }}
                      source={require("../../assets/image8.png")}
                      onPress={() => {localStorage.removeItem("token");navigation.navigate("Login");console.log(`token apres supression: ${localStorage.getItem("token")}`)} }

                  />
                  <div style={{
                    width: "100%", 
                    margin: "auto",
                    display:"flex", 
                    justifyContent: "space-around",
                    padding: "5px 0px 5px 0px"
                    }}
                  >
                    <div style={{
                    width: "100%", 
                    margin: "auto",
                    display:"flex", 
                    justifyContent: "space-around",
                    padding: "5px 0px 5px 0px"
                    }}
                   
                  >
                    <Text> Déconnexion </Text>
                  </div>
                  </div>
              </div>
          </div>
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  viewPager: {
    flex: 1,
  },
  page: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
