import React from "react";
import {
  View, Linking, Image, StyleSheet,
} from "react-native";
import { MainStackParamList } from "../types/navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { supabase } from "../initSupabase";
import {getall} from "../services/resultat-RadiologueService";
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
//import { googleMapIsInstalled } from "react-native-maps/lib/decorateMapComponent";
const ResultatRadiologie = ({ navigation }: NativeStackScreenProps<MainStackParamList, "ResultatRadiologie">) => {
    
      const { isDarkmode, setTheme } = useTheme();
      const [searchQuery, setSearchQuery] = React.useState('');
      const [listResultatRadiologie,setListResultatRadiologie]= React.useState('');
      const getListResultatRadiologie = ()=>{
        getall().then((res)=>{
          console.log(res.data.data);
          setListResultatRadiologie(res.data.data);
        }).catch((err)=>{
          console.log(err);
        })
      }
      useEffect(()=>{
        getListResultatRadiologie();
      },)
      const token = localStorage.getItem("token");
      return (
        <Layout>
          <TopNav
            middleContent="List des Resultats Radiologie"
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

       {token && listResultatRadiologie && listResultatRadiologie.filter(el => el.emailpatient == JSON.parse(token).email ).map((item) =>(
        <View style={styles.itemContainer} key={item._id}>
          <Image
          source={require("../../assets/logo.png")}
          style={styles.image}
          />
          <View>
            <Text style={{ fontWeight: "bold", paddingBottom: "10px" }}>{item.nompatient}</Text>
            <Text style={{ color: "grey" }}>{item.prenompatient}</Text>
          </View>          
          <div style={{width: "100px", margin: "auto"}}>
              <Button 
              style={styles.btn}
              text="plus d'info"
              onPress={() => {
                  navigation.navigate("ResultatRadiologieInfo", { item });
            }}
            />
          </div>
        </View>
       )) }
        </Layout>
      )
}
export default ResultatRadiologie;


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


