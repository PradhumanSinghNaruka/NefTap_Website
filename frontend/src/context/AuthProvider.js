import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext();
export default function AuthProvider({ children }) {
  const initialAuthRegister = localStorage.getItem("Registers");
  const [authRegister, setAuthRegister] = useState(
    initialAuthRegister ? JSON.parse(initialAuthRegister) : undefined
  );
  return (
    <AuthContext.Provider value={[authRegister, setAuthRegister]}>
      {children}
    </AuthContext.Provider>
  );
}
export const useAuth = () => useContext(AuthContext);