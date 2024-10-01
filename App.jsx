import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { AppRoutes } from "./src/routes/routes";

import { AuthProvider } from "./src/contexts/auth";

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar backgroundColor="#F0F4FF" barStyle="dark-content" />
        <AppRoutes />
      </AuthProvider>
    </NavigationContainer>
  )
}