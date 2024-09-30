import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { SignIn } from "../pages/SignIn/SignIn";
import { SignUp } from "../pages/SignUp/SignUp";

const AuthStack = createNativeStackNavigator();

export function AuthRoutes(){
  return(
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="SignIn"
        component={SignIn}
      />
      <AuthStack.Screen 
        name="SignUp"
        component={SignUp}
      />
    </AuthStack.Navigator>
  )
}