import React, { useContext } from "react";
import { AuthContext } from "../contexts/auth";
import { AuthRoutes } from "./Auth.routes";
import {AppRoutes} from './app.routes';
import { ActivityIndicator, View } from "react-native";

export function Routes(){
  const {logado, loading} = useContext(AuthContext)

  if(loading){
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F0F4FF'}}>
        <ActivityIndicator size="large" color="#131313"/>
      </View>
    )
  }

  return(
    logado ?
      <AppRoutes/> : <AuthRoutes/>
  )
}
