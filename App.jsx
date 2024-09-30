import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { AppRoutes } from "./src/routes/routes";

export default function App(){
  return(
    <NavigationContainer>
      <StatusBar backgroundColor="#F0F4FF" barStyle="dark-content" />
      <AppRoutes/>
    </NavigationContainer>
  )
}