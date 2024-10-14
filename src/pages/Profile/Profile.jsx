import React, {useContext} from "react";
import { Container, Message, Name, NewLink, NewText, LogoutButton, LogoutText } from "./style";

import { Header } from "../../components/Header/Header";

import { AuthContext } from "../../contexts/auth";
import { useNavigation } from "@react-navigation/native";

export function Profile(){
  const {user, signOut} = useContext(AuthContext);
  const navigation = useNavigation()

  return(
    <Container>
      <Header title="Meu Perfil" />
      <Message>
       Hey
      </Message>
      <Name numberOfLines={1}>
        {user && user.name}
      </Name>

      <NewLink onPress={()=> navigation.navigate('Registrar')}>
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