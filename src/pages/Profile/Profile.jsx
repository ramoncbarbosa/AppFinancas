import React, { useContext } from "react";
import { Container, Message, Name, NewLink, NewText, LogoutButton, LogoutText } from "./style";
import { Header } from "../../components/Header/Header";
import { AuthContext } from "../../contexts/auth";
import { useNavigation } from "@react-navigation/native";
import { Avatar } from '@rneui/themed';
import greetings from '../../services/hi.json'


export function Profile() {
  const { user, signOut } = useContext(AuthContext);
  const navigation = useNavigation()

  //funcao para pegar o nome do user logado e fatiar o mesmo caso seja possivel
  function getName(name) {
    if (!name) return '';

    const nameFatiado = name.split()
    const inicial = nameFatiado.map(partes => partes[0]).join('');
    return inicial.toUpperCase();
  }

  //função para pegar as saudações do json
  function getHis() {
    const his = Math.floor(Math.random() * greetings.greetings.length);
    return greetings.greetings[his]
  }


  return (
    <Container>
      <Header title="Meu Perfil" />
      <Message>
        {getHis()}
      </Message>

      {/*  de uso da lib externa para avatares */}
      <Avatar
        size="xlarge"
        source={user?.image ? { uri: user.image } : null} 
        title={getName(user?.name)} 
        overlayContainerStyle={{ backgroundColor: '#1E90FF' }}
        rounded
      />
      <Name numberOfLines={1}>
        {user && user.name}
      </Name>

      <NewLink onPress={() => navigation.navigate('Registrar')}>
        <NewText>
          Fazer Registro
        </NewText>
      </NewLink>
      <LogoutButton onPress={signOut}>
        <LogoutText>
          Sair
        </LogoutText>
      </LogoutButton>
    </Container>
  )
}