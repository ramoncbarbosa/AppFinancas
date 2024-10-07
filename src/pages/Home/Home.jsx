import React, {useContext} from "react";
import {Button, Text, TouchableOpacity, View} from 'react-native';

import { AuthContext } from "../../contexts/auth";
import { Background } from "./styles";

import { Header } from "../../components/Header/Header";


export function Home(){
  const {user} = useContext(AuthContext)
  return (
    <Background>
      <Header title="Minha MovimentaÇões"/>
    </Background>
  )
}
