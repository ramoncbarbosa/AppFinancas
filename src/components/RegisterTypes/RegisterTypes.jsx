import React, {useState} from "react";
import { RegisterContainer, RegisterTypeButton, RegisterLabel } from "./styles";
import Feather from 'react-native-vector-icons/Feather'

export function RegisterTypes({ type, sendTypeChenged }){
  const [typeChecked, setTypeChecked] = useState(type)

  function changeType(name){
    if(name === 'receita'){
      setTypeChecked('receita');
      sendTypeChenged('receita')
    } else{
      setTypeChecked('despesa');
      sendTypeChenged('despesa');
    }
  }

  return(
    <RegisterContainer>
      <RegisterTypeButton
        checked={typeChecked === 'receita' ? true: false} onPress={() => changeType('receita')}
      >
        <Feather name='arrow-up' size={25} color='#121212'/>
        <RegisterLabel>
          Receita
        </RegisterLabel>
      </RegisterTypeButton>

      <RegisterTypeButton
        checked={typeChecked === 'despesa' ? true: false}
        onPress={()=> changeType('depesa')}  
      >
        <Feather name='arrow-down' size={25} color='#121212'/>
        <RegisterLabel>
          Despesa
        </RegisterLabel>
      </RegisterTypeButton>
      
    </RegisterContainer>
  )
}