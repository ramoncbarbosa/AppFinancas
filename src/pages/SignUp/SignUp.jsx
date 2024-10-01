import React, { useContext } from "react";
import { Platform } from "react-native";
import { Background, Container, Logo, AreaInput, Input, SubmiteButton, SubmiteText, Link, LinkText } from "./styles";

import { AuthContext } from "../../contexts/auth";

export function SignUp(){

  const { user } = useContext(AuthContext)

  function handleSignUp(){
    console.log( user );
  }

  return(
    <Background
      behavior={Platform.OS === 'ios' ? 'padding' : ''}
      enabled
    >
      <Container>
        <AreaInput>
          <Input 
            placeholder="Nome"
          />
        </AreaInput>
        <AreaInput>
          <Input 
            placeholder="Seu e-mail"
          />
        </AreaInput>
        <AreaInput>
          <Input 
            placeholder="Sua senha"
          />
        </AreaInput>
        <SubmiteButton activeOpacity={0.8} onPress={handleSignUp}>
          <SubmiteText>
            Acessar
          </SubmiteText>
        </SubmiteButton >
         <SubmiteText>
            Acessar
          </SubmiteText>
      </Container>
    </Background>
  )
}