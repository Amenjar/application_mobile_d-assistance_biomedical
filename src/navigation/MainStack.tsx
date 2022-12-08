import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SecondScreen from "../screens/SecondScreen";
import MainTabs from "./MainTabs";
import RendezVousMed from "../screens/RendezVousMed";
import RendezVousAna from "../screens/RendezVousAna";
import RendezVousRad from "../screens/RendezVousRad";
import PasserRendezVous from "../screens/PasserRendezVous";
import Medecins from "../screens/Medecins";
import MedecinInfo from "../screens/MedecinInfo";
import Analyses from "../screens/Analyses";
import AnalyseInfo from "../screens/AnalyseInfo";
import RadioInfo from "../screens/RadioInfo";
import Radios from "../screens/Radios";
import ListRendezVous from "../screens/listRendezVous";
import Certificats from "../screens/certificat";
import CertificatInfo from "../screens/CertificatInfo";
import Ordonnaces from "../screens/ordonnace";
import OrdonnaceInfo from "../screens/OrdonnaceInfo";
import Resultat from "../screens/resultat";
import ResultatAnalyse from "../screens/resultatAnalyse";
import ResultatAnalyseInfo from "../screens/ResultatAnalyseInfo";
import ResultatRadiologie from "../screens/resultatRadiologie";
import resultatRadiologieInfo from "../screens/resultatRadiologieInfo";
import Login from "../screens/auth/Login";
import Register from "../screens/auth/Register";

const MainStack = createNativeStackNavigator();
const Main = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <MainStack.Screen name="MainTabs" component={MainTabs} />
      <MainStack.Screen name="SecondScreen" component={SecondScreen} />
      <MainStack.Screen name="RendezVousMed" component={RendezVousMed} />
      <MainStack.Screen name="RendezVousAna" component={RendezVousAna} />
      <MainStack.Screen name="RendezVousRad" component={RendezVousRad} />
      <MainStack.Screen name="PasserRendezVous" component={PasserRendezVous} />
      <MainStack.Screen name="Medecins" component={Medecins} />
      <MainStack.Screen name="MedecinInfo" component={MedecinInfo}  />
      <MainStack.Screen name="Analyses" component={Analyses}  />
      <MainStack.Screen name="AnalyseInfo" component={AnalyseInfo} />
      <MainStack.Screen name="Radios" component={Radios} />
      <MainStack.Screen name="RadioInfo" component={RadioInfo} />
      <MainStack.Screen name="ListRendezVous" component={ListRendezVous} />
      <MainStack.Screen name="Certificats" component={Certificats} />
      <MainStack.Screen name="CertificatInfo" component={CertificatInfo} />
      <MainStack.Screen name="Ordonnaces" component={Ordonnaces} />
      <MainStack.Screen name="OrdonnaceInfo" component={OrdonnaceInfo} />
      <MainStack.Screen name="Resultat" component={Resultat} />
      <MainStack.Screen name="ResultatAnalyse" component={ResultatAnalyse} />
      <MainStack.Screen name="ResultatAnalyseInfo" component={ResultatAnalyseInfo}/>
      <MainStack.Screen name="ResultatRadiologie" component={ResultatRadiologie}/>
      <MainStack.Screen name="ResultatRadiologieInfo" component={resultatRadiologieInfo}/>
      <MainStack.Screen name="Login" component={Login}/>
      <MainStack.Screen name="Register" component={Register} />
    </MainStack.Navigator>
  );
};

export default Main;
