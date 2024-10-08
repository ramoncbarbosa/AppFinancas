import React, { useState } from "react";
import { Background, Input, SubmitButton, SubmitText } from "./styles";

import { Header } from "../../components/Header/Header";
import { SafeAreaView, TouchableWithoutFeedback, Keyboard } from "react-native";

export function New(){
  const [labelInput, setLabelInput] = useState('');
  const [valueInput, setValueInput] = useState('');
  const [type, setType] = useState('receita')

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

          <SubmitButton>
            <SubmitText>
              Registrar
            </SubmitText>
          </SubmitButton>
        </SafeAreaView>

      </Background>
    </TouchableWithoutFeedback>
  )
}