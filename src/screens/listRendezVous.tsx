import React from "react";
import {
  View, Linking, Image, StyleSheet,
} from "react-native";
import { MainStackParamList } from "../types/navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { supabase } from "../initSupabase";
import {getall} from "../services/rendezVousService.jsx"
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
import {useEffect} from "react";
import { Ionicons } from "@expo/vector-icons";
import { googleMapIsInstalled } from "react-native-maps/lib/decorateMapComponent";
const ListRendezVous = ({ navigation }: NativeStackScreenProps<MainStackParamList, "ListRendezVous">) => {
    
      const { isDarkmode, setTheme } = useTheme();
      const [searchQuery, setSearchQuery] = React.useState('');
      const [listRendezVous,setListRendezVous]= React.useState('');
      const getListRendezVous = ()=>{
        getall().then((res)=>{
          console.log(res.data.data);
          setListRendezVous(res.data.data);
        }).catch((err)=>{
          console.log(err);
        })
      }
      useEffect(()=>{
        getListRendezVous();
      },)
      const token = localStorage.getItem("token");
    
      return (
        <Layout>
          <TopNav
            middleContent="List des Rendez-Vous"
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

       {token && listRendezVous && listRendezVous.filter(el => el.email == JSON.parse(token).email ).map((item) =>(
        <View style={styles.itemContainer} key={item._id}>
          <Image
          source={require("../../assets/logo.png")}
          style={styles.image}
          />
          <View>
            <Text style={{ fontWeight: "bold", paddingBottom: "10px" }}>nom : {item.nom}</Text>
            <Text style={{ fontWeight: "bold", paddingBottom: "10px" }}>Personnel : {item.personnel}</Text>
            <Text style={{ fontWeight: "bold", paddingBottom: "10px" }}>date : {item.date}</Text>
            <Text style={{ fontWeight: "bold", paddingBottom: "10px" }}>Adresse du Personnel : {item.adresseCabinet}</Text>
          </View>          
          
        </View>
       )) }
        </Layout>
      )
}
export default ListRendezVous;


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
  },
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
    width: "100%",
    alignContent: "center",

  }
});


