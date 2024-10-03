import React, {useContext} from "react";
import {Button, Text, TouchableOpacity, View} from 'react-native';

import { AuthContext } from "../../contexts/auth";


export function Home(){
  const {signOut, user} = useContext(AuthContext)
  return (
    <View>
      <Text>Nome: {user.name}</Text>
      {/* <TouchableOpacity onPress={()=> signOut()}>
        <Text>Sair</Text>
      </TouchableOpacity> */}
    </View>
  )
}
