import React, { useMemo } from 'react';
import { Container, Label, Balance } from './styles';

export function BalanceItem({data}){

  const labelName = useMemo(()=> {
    if(data.tag === 'saldo'){
      return{
        label: 'Saldo atual',
        color: '3B3DBF',
      };
    } else if(data.tag === 'receita'){
      return{
        label: 'Entradas de Hoje',
        color: '00B94A',
      };
    }else{
      return{
        label: 'Saidas de Hoje',
        color: 'EF463A',
      };
    }
  }, [data]);

  return(
    <Container bg={labelName.color}>
      <Label> {labelName.label} </Label>
      <Balance>R$: {data.saldo}</Balance>
    </Container>
  );
}
