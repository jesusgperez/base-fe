import { useState } from "react";
import AuthContext from "./Context";
import {
  AuthContextProps, AuthProviderProps, ILoginData, EmptyLoginData
} from "./models";

const AuthProvider = ({children}: AuthProviderProps) => {
  const [ loginData, setLoginData ] = useState<ILoginData>(EmptyLoginData)

  const defaultAuthContext: AuthContextProps = {
    loginData,
    setLoginData
  }

  return (
    <AuthContext.Provider value={defaultAuthContext}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
