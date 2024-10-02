import React, { createContext, useState } from "react";
import { api } from "../services/api";
import { useNavigation } from "@react-navigation/native";

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
  const [user, setUser] = useState({
    nome: 'Ramon',
  })

  const navigation = useNavigation();

  async function signUp(email, password, nome) {
    try {
      const response = await api.post('/users', {
        name: nome,
        password: password,
        email: email
      })

      alert('Conta criada com sucesso!')
      navigation.goBack()

    } catch (err) {
      console.log(`Erro ao Cadastrar User: ${err}`)
    }
  }

  return (
    <AuthContext.Provider value={{ user, signUp }}>
      {children}
    </AuthContext.Provider>
  )
}