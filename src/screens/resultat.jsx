import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { MainStackParamList } from "../types/navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
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

  const Resultat = ({
    navigation,
}: NativeStackScreenProps<MainStackParamList, "Resultat">)=>{

    const { isDarkmode, setTheme } = useTheme();

    return (
        <Layout>
<TopNav
    middleContent="Résultat"
    rightContent={
        <Ionicons
            name={isDarkmode ? "sunny" : "moon"}
            size={20}
            color={isDarkmode ? themeColor.white100 : themeColor.dark}
        />
    }
    leftAction={() => navigation.goBack()}
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

<Section style={{ marginTop: 5 }}>
    <SectionContent>
        <Text fontWeight="bold" style={{ textAlign: "center" }}>
            Votre choix
        </Text>
        <Button
            style={{ marginTop: 10 }}
            text="Résultat Analyse"
            status="info"
            onPress={() => {
                navigation.navigate("ResultatAnalyse");
            }}
        />
        <Button
            style={{ marginTop: 10 }}
            text="Résultat Radiologie"
            status="info"
            onPress={() => {
                navigation.navigate("ResultatRadiologie");
            }}
        />
   
     
    </SectionContent>
</Section>
</Layout>
    );
} 
export default Resultat;
