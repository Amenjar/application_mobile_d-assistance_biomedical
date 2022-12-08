import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Image,
} from "react-native";


import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  Layout,
  Text,
  TextInput,
  Button,
  useTheme,
  themeColor,
  TopNav,
} from "react-native-rapi-ui";
import { MainStackParamList } from "../types/navigation";
import { Ionicons } from "@expo/vector-icons";
import { DateTimePickerModal } from 'react-native-paper-datetimepicker';
import {create} from '../services/rendezVousService.jsx';


export default function ({
  navigation,
}: NativeStackScreenProps<MainStackParamList, "PasserRendezVous">) {
  const { isDarkmode, setTheme } = useTheme();
  const [email, setEmail] = useState<string>("");
  const [nom, setNom] = useState<string>("");
  const [prenom, setPrenom] = useState<string>("");
  const [personnel, setPersonnel] = useState<string>("");
  const [adresseCabinet,setAdresseCabinet] = useState<string>("");
  
  const [loading, setLoading] = useState<boolean>(false);

  const [visible, setVisible] = React.useState(false);
  const onDismiss = React.useCallback(() => {
    setVisible(false);
  }, [setVisible]);
 
  const onChange = React.useCallback(({ date }) => {
    setVisible(false);
    console.log({ date });
  }, []);
 
  const date = new Date();
  const createRendezVous =()=>{
    create({nom,prenom,email,personnel,date,adresseCabinet}).then((res)=>{
      console.log(res.data.data);
      navigation.navigate("ListRendezVous");
    }).catch((err)=>{
      console.log(err);
    })
  }
  
   
  return (
    <KeyboardAvoidingView behavior="height" enabled style={{ flex: 1 }}>
      <Layout>
      <TopNav
        middleContent="Rendez-Vous"
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
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
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
            <Image
              resizeMode="contain"
              style={{
                height: 220,
                width: 220,
              }}
              source={require("../../assets/logo.png")}
            />
          </View>
          <View
            style={{
              flex: 3,
              paddingHorizontal: 20,
              paddingBottom: 20,
              backgroundColor: isDarkmode ? themeColor.dark : themeColor.white,
            }}
          >
            <Text
              fontWeight="bold"
              size="h3"
              style={{
                alignSelf: "center",
                padding: 30,
              }}
            >
              Passer Rendez-vous
            </Text>
            <Text style={{ marginTop: 15 }}>Nom</Text>
            <TextInput
              containerStyle={{ marginTop: 15 }}
              placeholder="Enter your name"
              value={nom}
              autoCapitalize="none"
              autoCompleteType="off"
              autoCorrect={false}
              onChangeText={(text) => setNom(text)}
            />
            <Text style={{ marginTop: 15 }}>Prenom</Text>
            <TextInput
              containerStyle={{ marginTop: 15 }}
              placeholder="Enter your last name"
              value={prenom}
              autoCapitalize="none"
              autoCompleteType="off"
              autoCorrect={false}
              onChangeText={(text) => setPrenom(text)}
            />
            <Text>Email</Text>
            <TextInput
              containerStyle={{ marginTop: 15 }}
              placeholder="Enter your email"
              value={email}
              autoCapitalize="none"
              autoCompleteType="off"
              autoCorrect={false}
              keyboardType="email-address"
              onChangeText={(text) => setEmail(text)}
            />
            <Text style={{ marginTop: 15 }}>Personnel</Text>
            <TextInput
              containerStyle={{ marginTop: 15 }}
              placeholder="Enter your Personnel"
              value={personnel}
              autoCapitalize="none"
              autoCompleteType="off"
              autoCorrect={false}
              onChangeText={(text) => setPersonnel(text)}
            />
            <Text style={{ marginTop: 15 }}>Adresse du Personnel</Text>
            <TextInput
              containerStyle={{ marginTop: 15 }}
              placeholder="Enterer Address du Personnel"
              value={adresseCabinet}
              autoCapitalize="none"
              autoCompleteType="off"
              autoCorrect={false}
              onChangeText={(text) => setAdresseCabinet(text)}
            />
              <>
                <DateTimePickerModal
                  visible={visible}
                  onDismiss={onDismiss}
                  date={date}
                  onConfirm={onChange}

                  label="choisir une date"
                />
              
                <Button text="choisir une date" onPress={() => setVisible(true)}/>
              </>
            <Button
              text={loading ? "Loading" : "Passer Rendez-vous"}
              onPress ={()=>createRendezVous()}
              style={{
                marginTop: 20,
              }}
              disabled={loading}
            />
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 30,
                justifyContent: "center",
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  isDarkmode ? setTheme("light") : setTheme("dark");
                }}
              >
                <Text
                  size="md"
                  fontWeight="bold"
                  style={{
                    marginLeft: 5,
                  }}
                >
                  {isDarkmode ? "☀️ light theme" : "🌑 dark theme"}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </Layout>
    </KeyboardAvoidingView>
  );
}            
