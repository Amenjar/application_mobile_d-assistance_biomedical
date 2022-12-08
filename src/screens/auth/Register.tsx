import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Image,
} from "react-native";
import { supabase } from "../../initSupabase";
import {  AuthStackParamList, MainStackParamList } from "../../types/navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  Layout,
  Text,
  TextInput,
  Button,
  useTheme,
  themeColor,
} from "react-native-rapi-ui";
import {register} from "../../services/auth"

export default function ({
  navigation,
}: NativeStackScreenProps<AuthStackParamList, "Register">) {
  const { isDarkmode, setTheme } = useTheme();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [firstname, setFirstname] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");
  const [phone, setPhone] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [dateNaissance, setNaissance] = useState<string>('');
  const [auth,setAuth] = useState<string>("false");

  /*async function register() {
    setLoading(true);
    const { user, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });
    if (!error && !user) {
      setLoading(false);
      alert("Check your email for the login link!");
    }
    if (error) {
      setLoading(false);
      alert(error.message);
    }
  }
*/
 const registre =() =>{
  register({firstname,lastname,email,password,dateNaissance,phone}).then ((res)=>{
    
    console.log(res.data.data);
   
    localStorage.setItem("token",JSON.stringify(res.data.data));
    console.log(`user: ${localStorage.getItem("token")}`)
    navigation.navigate("MainTabs");
  }).catch((err)=>{
    console.log(err);
  })
 }
  const onChangeText =(text: string | any[]) =>{
    let newText = '';
    let numbers = '0123456789';

    for (var i=0; i < text.length; i++) {
        if(numbers.indexOf(text[i]) > -1 ) {
            newText = newText + text[i];
        }
    }
    setPhone(newText);
}


  return (
    <KeyboardAvoidingView behavior="height" enabled style={{ flex: 1 }}>
      <Layout>
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
              height:"10px"
            }}
          >
            <Image
              resizeMode="contain"
              style={{
                height: 150,
                width: 150,
              }}
              source={require("../../../assets/logo.png")}
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
              Inscription
            </Text>

            <Text> Prénom </Text>
            <TextInput
              containerStyle={{ marginTop: 15 }}
              placeholder="Entrez votre prénom"
              value={firstname}
              autoCapitalize="none"
              autoCompleteType="off"
              autoCorrect={false}
              keyboardType="email-address"
              onChangeText={(text) => setFirstname(text)}
            />
            
            <Text> Nom </Text>
            <TextInput
              containerStyle={{ marginTop: 15 }}
              placeholder="Entrez votre nom"
              value={lastname}
              autoCapitalize="none"
              autoCompleteType="off"
              autoCorrect={false}
              keyboardType="email-address"
              onChangeText={(text) => setLastname(text)}
            />
            
            <Text> Téléphone </Text>
            <TextInput
              containerStyle={{ marginTop: 15 }}
              placeholder="Entrez votre numéro de téléphone"
              value={phone}
              autoCapitalize="none"
              autoCompleteType="off"
              autoCorrect={false}
              keyboardType="numeric"
              onChangeText={(text) => onChangeText(text)}
            />
          <Text> Date de naissance </Text>
            <TextInput
              containerStyle={{ marginTop: 15 }}
              placeholder="Entrez votre date de naissance"
              value={dateNaissance}
              autoCapitalize="none"
              autoCompleteType="off"
              autoCorrect={false}
              keyboardType="email-address"
              onChangeText={(text) => setNaissance(text)}
            />
            
            <Text>Email</Text>
            <TextInput
              containerStyle={{ marginTop: 15 }}
              placeholder="Entrez votre email"
              value={email}
              autoCapitalize="none"
              autoCompleteType="off"
              autoCorrect={false}
              keyboardType="email-address"
              onChangeText={(text) => setEmail(text)}
            />

            <Text style={{ marginTop: 15 }}>Mot de passe</Text>
            <TextInput
              containerStyle={{ marginTop: 15 }}
              placeholder="Entrez votre mot de passe"
              value={password}
              autoCapitalize="none"
              autoCompleteType="off"
              autoCorrect={false}
              secureTextEntry={true}
              onChangeText={(text) => setPassword(text)}
            />
            <Button
              text="Créer votre compte"
              onPress={() => {
               registre();
              
              }}
              style={{
                marginTop: 20,
              }}
             
            />

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 15,
                justifyContent: "center",
              }}
            >
              <Text size="md">Déja j'ai un compte</Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Login");
                }}
              >
                <Text
                  size="md"
                  fontWeight="bold"
                  style={{
                    marginLeft: 5,
                  }}

                >
                  Connexion
                </Text>
              </TouchableOpacity>
            </View>
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
