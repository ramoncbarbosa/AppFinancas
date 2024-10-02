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

  async function signIn(email, password) {
    try{
      alert(`Teste ${email} e ${password}`)
    } catch(err){
      alert('Erro ao tentar logar, verifique seus dados de login', err)
    }
  }

  return (
    <AuthContext.Provider value={{ logado: !!user, user, signUp, loadingAuth, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}