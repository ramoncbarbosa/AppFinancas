import React, { createContext, useState } from "react";
import { api } from "../services/api";
import { useNavigation } from "@react-navigation/native";

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loadingAuth, setLoadingAuth] = useState(false);

  const navigation = useNavigation();

  async function signUp(email, password, nome) {
    setLoadingAuth(true);

    try {
      const response = await api.post('/users', {
        name: nome,
        password: password,
        email: email
      })

      alert('Conta criada com sucesso!')
      setLoadingAuth(false);
      navigation.goBack()

    } catch (err) {
      console.log(`Erro ao Cadastrar User: ${err}`)
      setLoadingAuth(false);
    }
  }

  return (
    <AuthContext.Provider value={{ user, signUp, loadingAuth }}>
      {children}
    </AuthContext.Provider>
  )
}