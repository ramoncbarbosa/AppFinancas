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
  const [dateHoje, setDateHoje] = useState(new Date()); //mostra as movimentações do dia
  const [movimentos, setMovimentos] = useState([])

  //consultando a receita do user
  useEffect(() => {
    let isActive = true;

    async function getMovimentos() {
      let dataFormatada = format(dateHoje, 'dd/MM/yyyy');

      //buscando as movimentações financeiras
      const receives = await api.get('/receives', {
        params: {
          date: dataFormatada
        }
      })

      //pegando os dados financeiros
      const balance = await api.get('/balance', {
        params: {
          date: dataFormatada
        }
      })

      if (isActive) {
        setMovimentos(receives.data);
        setListaReceita(balance.data);
      }

    }

    getMovimentos();

    return () => isActive = false;
    
  }, [isFocused, movimentos])


  //criando função de deletar um item
  async function handleDelete(id) {
    try{
      await api.delete('/receives/delete', {
        params: {
          item_id: id
        }
      })

      setDateHoje(new Date())
      
    } catch(err){
      alert(err)
    }
  }


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
        data={movimentos}
        keyExtrator={(item)=> item.id}
        renderItem={ ({item}) => <HistoryList data={item} deleteItem={handleDelete} /> }
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      />

    </Background>
  )
}
