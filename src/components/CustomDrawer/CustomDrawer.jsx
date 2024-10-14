import React, {useContext} from "react";
import { View, Text, Image } from "react-native";

import { DrawerItemList, DrawerContentScrollView } from "@react-navigation/drawer";

import { AuthContext } from "../../contexts/auth";

export function CustomDrawer( {props} ){
  const {user} = useContext(AuthContext)

  return(
    <DrawerContentScrollView {...props} >
      <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 25}}>
        <Image 
          source={require('../../assets/logo.png')}
          style={{width: 90, height: 90}}
          resizeMethod="contain"
        />
      </View>
      <Text style={{fontSize: 18, marginTop: 14}}>
        Bem-Vindo
      </Text>
      <Text style={{fontSize: 17, fontWeight: 'bold', marginBottom: 14, paddingHorizontal: 20}} numberOfLines={1}>
        {user.name}
      </Text>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  )
}