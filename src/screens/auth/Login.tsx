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
import { AuthStackParamList, MainStackParamList } from "../../types/navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import {
  Layout,
  Text,
  TextInput,
  Button,
  useTheme,
  themeColor,
} from "react-native-rapi-ui";
import { login } from "../../services/auth";

export default function ({
  navigation,
}: NativeStackScreenProps<AuthStackParamList, "Login">) {
  const { isDarkmode, setTheme } = useTheme();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

 /* async function login({}) {
    setLoading(true);

    
    const { user, error } = await supabase.auth.signIn({
      email: email,
      password: password,
    });
    if (!error && !user) {
      setLoading(false);
      ///alert("Check your email for the login link!");
    }
    if (error) {
      setLoading(false);
      alert(error.message);
    }
  }*/
  const connect =() =>{
    login({email,password}).then ((res)=>{
      
      console.log(res.data.data);
     
      localStorage.setItem("token",JSON.stringify(res.data.data));
      console.log(`user: ${localStorage.getItem("token")}`)
     
    }).catch((err)=>{
      console.log(err);
    })
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
              height:"90px"
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
              style={{
                alignSelf: "center",
                padding: 30,
              }}
              size="h3"
            >
              Connexion
            </Text>
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
              text="Connecter"
              onPress={() => {
                connect()
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
              <Text size="md">Vous n'avez pas un compte?</Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Register");
                }}
              >
                <Text
                  size="md"
                  fontWeight="bold"
                  style={{
                    marginLeft: 5,
                  }}
                >
                  Registrer 
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 10,
                justifyContent: "center",
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("ForgetPassword");
                }}
              >
                <Text size="md" fontWeight="bold">
                  Mot de passe oublié
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
