import React from "react";
import { Platform } from "react-native";
import { Background, Container, AreaInput, Input, SubmiteButton, SubmiteText, Link, LinkText } from "./styles";

export function SignUp(){
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
        <SubmiteButton>
          <SubmiteText>
            Cadastrar
          </SubmiteText>
        </SubmiteButton>
      </Container>
    </Background>
  )
}