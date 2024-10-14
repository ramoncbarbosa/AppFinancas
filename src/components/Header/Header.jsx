import React, { useContext } from "react";
import { Container, Title, ButtonMenu, ButtonMenuLogout, TitleLogout } from "./styles";
import Icon from 'react-native-vector-icons/Feather'
import { useNavigation } from "@react-navigation/native";

import { AuthContext } from "../../contexts/auth";

export function Header({ title }) {
  const navigation = useNavigation();
  const { signOut } = useContext(AuthContext);

  return (
    <Container>
      <ButtonMenu onPress={() => navigation.openDrawer()}>
        <Icon name="menu" size={32} color="#121212" />
      </ButtonMenu>

      {title && (
        <Title>
          {title}
        </Title>
      )}


      {/* <ButtonMenuLogout
        onPress={() => signOut()}
      >
        <Icon name="log-out" size={32} color="#121212" />
      </ButtonMenuLogout> */}
    </Container>
  )
}