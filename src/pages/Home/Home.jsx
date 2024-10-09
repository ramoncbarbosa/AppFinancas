import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/auth";
import {
  Background,
  ListReceita,
  Area,
  Title,
  List
 } from "./styles";
import { Header } from "../../components/Header/Header";
import { api } from "../../services/api";
import { format } from "date-fns";
import { useIsFocused } from "@react-navigation/native";
import { BalanceItem } from "../../components/BalanceItem/BalanceItem";
import { TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons'
import { HistoryList } from "../../components/HistoryList/HistoryList";

export function Home() {
  const isFocused = useIsFocused();

  const [listReceita, setListaReceita] = useState([])
  const [dateHoje, setDateHoje] = useState(new Date());

  //consultando a receita do user
  useEffect(() => {
    let isActive = true;

    async function getMovimentos() {
      let dataFormatada = format(dateHoje, 'dd/MM/yyyy');

      const balance = await api.get('/balance', {
        params: {
          date: dataFormatada
        }
      })

      if (isActive) {
        setListaReceita(balance.data);
      }

    }

    getMovimentos();
    return () => {
      isActive = false;
    }
  }, [isFocused])

  const { user } = useContext(AuthContext)


  return (
    <Background>
      <Header title="Minha MovimentaÇões" />
      <ListReceita
        data={listReceita}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtrator={item => item.tag}
        renderItem={({ item }) => (<BalanceItem data={item} />)}
      />

      <Area>
        <TouchableOpacity>
          <Icon name="event" color="#121212" size={30} />
          <Title>
            Ultimas Movimentações
          </Title>
        </TouchableOpacity>
      </Area>

      <List
        data={[]}
        keyExtrator={(item)=> item.id}
        renderItem={(item)=> <HistoryList/>}
        showsVerticalScrollIndicator={false}
      />

    </Background>
  )
}
