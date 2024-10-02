import React, { useContext } from "react";
import { AuthContext } from "../contexts/auth";
import { AuthRoutes } from "./Auth.routes";
import {AppRoutes} from './app.routes';

export function Routes(){
  const loading = false;
  const {logado} = useContext(AuthContext)

  return(
    logado ?
      <AppRoutes/> : <AuthRoutes/>
  )
}
