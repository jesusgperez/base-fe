import { useState } from "react";
import AuthContext from "./Context";
import { AuthContextProps, AuthProviderProps } from "./models";
import { ILoginEntity, DefaultLoginEntity } from "../../domain/models";
import { IModalState, DefaultModalState } from "../../../common/presenter/components";

const AuthProvider = ({children}: AuthProviderProps) => {
  const [ loginData, setLoginData ] = useState<ILoginEntity>(DefaultLoginEntity)
  const [ modalState, setModalState ] = useState<IModalState>(DefaultModalState)

  const defaultAuthContext: AuthContextProps = {
    loginData,
    setLoginData,
    modalState,
    setModalState
  }

  return (
    <AuthContext.Provider value={defaultAuthContext}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
