import React from "react";
import { Container, TypeTex, Type, IconView, ValueText } from './style'
import Icon from 'react-native-vector-icons/Feather'

export function HistoryList({ data }){
  return(
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
  )
}