import React from "react";
import { Container, Title, ButtonMenu } from "./styles";
import Icon from 'react-native-vector-icons/Feather'
import { useNavigation } from "@react-navigation/native";

export function Header({ title }) {
  const navigation = useNavigation();

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
    </Container>
  )
}