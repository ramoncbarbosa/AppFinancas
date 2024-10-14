import React from "react";
import { Container, TypeTex, Type, IconView, ValueText } from './style'
import Icon from 'react-native-vector-icons/Feather'
import { TouchableWithoutFeedback, Alert } from "react-native";

export function HistoryList({ data, deleteItem }){
  //function para deletar o item da home
  function handleDeleteItem(){
    Alert.alert(
      'Atenção',
      'Você tem certeza que deseja deletar esse registro?',
      [
        {
          text: 'Cancelar',
          style: 'cancel'
        },
        {
          text: 'Continuar',
          onPress: () => deleteItem(data.id)
        }
      ]
    )
  }
  
  return(
    <TouchableWithoutFeedback onLongPress={handleDeleteItem}>
      <Container>
        <Type>
          <IconView type={data.type}>
            <Icon
              name={data.type === 'despesa' ? 'arrow-down': 'arrow-up'}
              size={20} 
              color="#FFF" />
            <TypeTex>{data.type}</TypeTex>
          </IconView>
        </Type>
        <ValueText>R$: {data.value}</ValueText>
      </Container>
    </TouchableWithoutFeedback>
  )
}