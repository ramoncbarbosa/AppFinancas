import { ActivityIndicator, View } from "react-native";
import { AuthRoutes } from "./Auth.routes";

export function AppRoutes(){
  const loading = false;
  const logado = false;

  return(
    logado ? <View></View> : <AuthRoutes/>
  )
}