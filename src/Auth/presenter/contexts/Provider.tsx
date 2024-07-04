import { useState } from "react";
import AuthContext from "./Context";
import { AuthContextProps, AuthProviderProps } from "./models";
import { ILoginEntity, EmptyLoginEntity } from "../../domain/models";

const AuthProvider = ({children}: AuthProviderProps) => {
  const [ loginData, setLoginData ] = useState<ILoginEntity>(EmptyLoginEntity)

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
