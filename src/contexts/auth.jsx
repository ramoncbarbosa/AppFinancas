import React, { createContext, useState } from "react";
import { create } from "react-test-renderer";

export const AuthContext = createContext({});

export function AuthProvider({ children }){
  const [user, setUser] = useState({
    nome: 'Teste',
  })
  return(
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  )
}