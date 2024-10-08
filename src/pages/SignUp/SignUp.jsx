import React, { useContext, useState } from "react";
import { ActivityIndicator, Platform } from "react-native";
import { Background, Container, Logo, AreaInput, Input, SubmiteButton, SubmiteText, Link, LinkText } from "./styles";

import { useNavigation } from "@react-navigation/native";

import { AuthContext } from "../../contexts/auth";


export function SignUp() {
  const { signUp, loadingAuth } = useContext(AuthContext)

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigation = useNavigation();

  function handleReturnSignIn() {
    navigation.navigate('SignIn')
  }

  function handleSignUp() {
    if (nome === "" || email === "" || password === "") {
      console.log("Preencha todos os dados!")
    } else {
      signUp(
        email,
        password,
        nome
      )
      alert(signUp)
    }
  }

  return (
    <Background
      behavior={Platform.OS === 'ios' ? 'padding' : ''}
      enabled
    >
      <Container>
        <Logo source={require('../../assets/logo.png')} />
        <AreaInput>
          <Input
            placeholder="Nome"
            value={nome}
            onChangeText={(textoDigitado) => setNome(textoDigitado)}
          />
        </AreaInput>
        <AreaInput>
          <Input
            placeholder="Seu e-mail"
            value={email}
            onChangeText={(emailDigitado) => setEmail(emailDigitado)}
          />
        </AreaInput>
        <AreaInput>
          <Input
            placeholder="Sua senha"
            value={password}
            onChangeText={(passwordDigitado) => setPassword(passwordDigitado)}
            secureTextEntry={true}
          />
        </AreaInput>
        <SubmiteButton activeOpacity={0.8} onPress={handleSignUp}>
          {loadingAuth ? (
            <ActivityIndicator size={20} color="#FFF" />
          ) : (
            <SubmiteText>Cadastrar</SubmiteText>
          )}
        </SubmiteButton >
        <Link onPress={handleReturnSignIn}>
          <LinkText>
            Já tem uma conta? Faça login
          </LinkText>
        </Link>
      </Container>
    </Background>
  )
}