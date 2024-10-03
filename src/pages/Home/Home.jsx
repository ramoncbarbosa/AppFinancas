import React, {useContext} from "react";
import {Button, Text, TouchableOpacity, View} from 'react-native';

import { AuthContext } from "../../contexts/auth";


export function Home(){
  const {signOut} = useContext(AuthContext)
  return (
    <View>
      <TouchableOpacity onPress={()=> signOut()}>
        <Text>Sair</Text>
      </TouchableOpacity>
      {/* <Button title="Siar" onPress={()=> signOut()}/> */}
    </View>
  )
}
