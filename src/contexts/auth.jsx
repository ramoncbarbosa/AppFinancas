import React, { createContext, useState, useEffect } from "react";
import { api } from "../services/api";
import { useNavigation } from "@react-navigation/native";

import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loadingAuth, setLoadingAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();

  //usando useEffect para permanecer logado caso o token esteja correto
  useEffect(() => {
    async function loadStorage() {
      const storageUser = await AsyncStorage.getItem('@tokenApp');
      if (storageUser) {
        const response = await api.get('/me', {
          headers: {
            'Authorization': `Bearer ${storageUser}`
          }
        })
        
        //qualquer problema com o token, vai ter redirecionamento para a tela incial
        .catch(() => {
          setUser(null);
        })

        //se deu tudo certo, vai logar e permanecer logado
        api.defaults.headers['Authorization'] = `Bearer ${storageUser}`;
        setUser(response.data);
        setLoading(false);
      }

      setLoading(false);
    }

    loadStorage();
  }, [])

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
    try {
      const response = await api.post('/login', {
        email: email,
        password: password
      })

      const { id, name, token } = response.data
      const data = {
        id,
        name,
        token,
        email,
      }

      //passando para a api que as requisições devem usar o Bearer Token
      api.defaults.headers['Authorization'] = `Bearer ${token}`

      //permanecendo logado
      await AsyncStorage.setItem('@tokenApp', token)

      setUser({
        id,
        name,
        email,
      })

      setLoadingAuth(false);

    } catch (err) {
      alert('Erro ao logar, verifique seus dados de login', err)
      setLoadingAuth(false);
    }
  }

  return (
    <AuthContext.Provider value={{ logado: !!user, user, signUp, loadingAuth, signIn, loading }}>
      {children}
    </AuthContext.Provider>
  )
}