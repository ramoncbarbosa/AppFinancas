import React from "react";
import { Background, Container, Logo, AreaInput, Input, SubmiteButton, SubmiteText, Link, LinkText } from "./styles";
import { Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";

export function SignIn(){

  const navigation = useNavigation();

  function navegarAtéSignUp(){
    navigation.navigate('SignUp')
  }

  return(
    <Background>
      <Container
        behavior={Platform.OS === 'ios' ? 'padding' : ''}
        enable
      >
        <Logo source={require('../../assets/logo.png')} />
        <AreaInput>
          <Input 
            placeholder='Digite seu e-mail'
          />
        </AreaInput>
        <AreaInput>
          <Input 
            placeholder='Digite sua senha'
          />
        </AreaInput>
        <SubmiteButton activeOpacity={0.8} >
          <SubmiteText>
            Acessar
          </SubmiteText>
        </SubmiteButton >
        <Link activeOpacity={0.4} onPress={navegarAtéSignUp}>
          <LinkText>
            Criar uma conta
          </LinkText>
        </Link>
      </Container>
    </Background>
  )
}