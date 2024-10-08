import React, {useContext, useEffect, useState} from "react";
import {Button, Text, TouchableOpacity, View} from 'react-native';

import { AuthContext } from "../../contexts/auth";
import { Background } from "./styles";

import { Header } from "../../components/Header/Header";

import { api } from "../../services/api";
import { format } from "date-fns";


export function Home(){
  const [listReceita, setListaReceita] = useState([])
  const [dateHoje, setDateHoje] = useState(new Date());

  //consultando a receita do user
  useEffect(()=> {
    let isActive = true;

    async function getMovimentos() {
      let dataFormatada = format(dateHoje, 'dd/mm/yyyy');

      const balance = await api.get('/balance', {
        params: {
          date: dataFormatada
        }
      })

      if(isActive){
        setListaReceita(balance.data);
      }

    }
    
    getMovimentos();
    return() => {
      isActive = false;
    }
  }, [])

  const {user} = useContext(AuthContext)

  
  return (
    <Background>
      <Header title="Minha MovimentaÇões"/>
    </Background>
  )
}
