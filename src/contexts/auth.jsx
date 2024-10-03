import React, { createContext, useState } from "react";
import { api } from "../services/api";
import { useNavigation } from "@react-navigation/native";

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loadingAuth, setLoadingAuth] = useState(false);

  const navigation = useNavigation();

  //criando users
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

  //logando
  async function signIn(email, password) {
    setLoadingAuth(false); 
    try{
      const response = await api.post('/login', {
        email: email,
        password: password
      })

      const {id, name, token} = response.data
      const data = {
        id, 
        name,
        token,
        email,
      }

    } catch(err){
      alert('Erro ao logar, verifique seus dados de login', err)
      setLoadingAuth(false);
    }
  }

  return (
    <AuthContext.Provider value={{ logado: !!user, user, signUp, loadingAuth, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}