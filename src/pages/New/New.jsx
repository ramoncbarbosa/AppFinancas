import React, { useState } from "react";
import { Background, Input, SubmitButton, SubmitText } from "./styles";

import { Header } from "../../components/Header/Header";
import { SafeAreaView, TouchableWithoutFeedback, Keyboard, Alert } from "react-native";

import {RegisterTypes} from '../../components/RegisterTypes/RegisterTypes'

import {api} from '../../services/api.js'
import {format} from 'date-fns'

import { useNavigation } from "@react-navigation/native";

export function New(){
  const navigation = useNavigation(); 

  const [labelInput, setLabelInput] = useState('');
  const [valueInput, setValueInput] = useState('');
  const [type, setType] = useState('receita')

  function handleSubmit(){
    Keyboard.dismiss();

    if(isNaN(parseFloat(valueInput)) || type === null){
      alert('Preencha todos os campos');
      return;
    }

    Alert.alert(
      'Confirmando dados',
      `Tipo: ${type}, valor: ${parseFloat(valueInput)}`,
      [
        {
          text: 'Cancelar',
          style: 'cancel'
        },
        {
          text: "Continuar",
          onPress: () => handleAdd()
        }
      ]
    )
  }

  //funcao para cadastrar despesa ou receita
  async function handleAdd() {
    Keyboard.dismiss();

    await api.post('/receive', {
      description: labelInput,
      value: Number(valueInput),
      type: type,
      date: format(new Date(), 'dd/MM/yyyy')
    })

    setLabelInput("");
    setValueInput("");
    navigation.navigate('Home');
  }


  return(
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Background>
        <Header title="Registrando"/>

        <SafeAreaView style={{marginTop: 14, alignContent: "center", alignItems: "center"}}>

          <Input
            placeholder="Descrição desse registro"
            value={labelInput}
            onChangeText={(textoDigitado)=> setLabelInput(textoDigitado)}
          />
          <Input
            placeholder="Valor desejado"
            keyboardType="numeric"
            value={valueInput}
            onChangeText={(valorDigitado) => setValueInput(valorDigitado)}
            />
            
            {/* o sendTypechanged e para trocar entre receita e despesa no states no compoentn RegisterTypes */}
            <RegisterTypes type={type} sendTypeChenged={(item) => setType(item)}/>

          <SubmitButton onPress={handleSubmit}>
            <SubmitText>
              Registrar
            </SubmitText>
          </SubmitButton>
        </SafeAreaView>

      </Background>
    </TouchableWithoutFeedback>
  )
}