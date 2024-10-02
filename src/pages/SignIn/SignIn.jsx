import React, { useState, useContext } from "react";
import { Background, Container, Logo, AreaInput, Input, SubmiteButton, SubmiteText, Link, LinkText } from "./styles";
import { Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { AuthContext } from "../../contexts/auth";

export function SignIn(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const { signIn, loadingAuth } = useContext(AuthContext)

  function navegarAtéSignUp(){
    navigation.navigate('SignUp')
  }

  function handleLogin(){
    if(email === '' || password === ''){
      alert('Preencha todos os campos');
    } else{
      signIn(
        email,
        password
      )
    }
    
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
            value={email}
            onChangeText={(emailDigitado)=> setEmail(emailDigitado)}
          />
        </AreaInput>
        <AreaInput>
          <Input 
            placeholder='Digite sua senha'
            value={password}
            onChangeText={(senhaDigitada)=> setPassword(senhaDigitada)}
            secureTextEntry={true}
          />
        </AreaInput>
        <SubmiteButton activeOpacity={0.8} onPress={handleLogin}>
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