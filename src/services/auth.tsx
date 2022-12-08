import http from "./axiosContext";
import { AuthStackParamList, MainStackParamList } from "../types/navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export const register = (data)=>{
        
  return  http.post("/patients/register",data);
}
export const logout =({
    navigation,
  }: NativeStackScreenProps <MainStackParamList, "Login">)=>{
    localStorage.removeItem("user");
}
export const login = (data)=>{
   return http.post("/auth/login",data);
}