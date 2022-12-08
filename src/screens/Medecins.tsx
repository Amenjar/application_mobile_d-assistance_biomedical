import React from "react";
import {
  View, Linking, Image, StyleSheet,
} from "react-native";
import { MainStackParamList } from "../types/navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { supabase } from "../initSupabase";
import {getall} from "../services/medecinsService.jsx"
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
const Medecins = ({ navigation }: NativeStackScreenProps<MainStackParamList, "Medecins">) => {
    const med = [
        {
            name: "Dr. John Doe",
            email: "DrJohn@gmailcom",
            phone: "123456789",
            specialite: "Cardiologue",
            adresse: "Rue 1, Ville 1",
            id: 1
        },
        {
          name: "Dr. leen son",
          email: "DrLee@gmailcom",
          phone: "1237405289",
          specialite: "Dentiste",
          adresse: "Rue 2, Ville 2",
          id: 2
        },
    ]
      const { isDarkmode, setTheme } = useTheme();
      const [searchQuery, setSearchQuery] = React.useState('');
      const [listMedecin,setListMedecin]= React.useState('');
      const getListMedecins = ()=>{
        getall().then((res)=>{
          console.log(res.data.data);
          setListMedecin(res.data.data);
        }).catch((err)=>{
          console.log(err);
        })
      }
      useEffect(()=>{
       getListMedecins();
      },)
    
      return (
        <Layout>
          <TopNav
            middleContent="List des médecins"
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

       {listMedecin && listMedecin.filter(med => med.verify == "accepter" ).map((item) =>(
        <View style={styles.itemContainer} key={item._id}>
          <Image
          source={require("../../assets/logo.png")}
          style={styles.image}
          />
          <View>
            <Text style={{ fontWeight: "bold", paddingBottom: "10px" }}>{item.firstname}</Text>
            <Text style={{ color: "grey" }}>{item.lastname}</Text>
          </View>          
          <div style={{width: "100px", margin: "auto"}}>
              <Button 
              style={styles.btn}
              text="plus d'info"
              onPress={() => {
                  navigation.navigate("MedecinInfo", { item });
            }}
            />
          </div>
        </View>
       )) }
        </Layout>
      )
}
export default Medecins;


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


