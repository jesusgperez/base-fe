import { useState } from "react";
import AuthContext from "./Context";
import { AuthContextProps, AuthProviderProps } from "./models";
import { ILoginEntity, EmptyLoginEntity } from "../../domain/models";
import { IModalState, DefaultModalState } from "../../../common/presenter/components";

const AuthProvider = ({children}: AuthProviderProps) => {
  const [ loginData, setLoginData ] = useState<ILoginEntity>(EmptyLoginEntity)
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
