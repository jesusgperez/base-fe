import { useState } from "react";
import GlobalContext from "./Context";
import { GlobalContextProps, GlobalProviderProps } from "./models";
import { IUserEntity, EmptyUser } from "../../../domain/models";

const GlobalProvider = ({children}: GlobalProviderProps) => {
  const [ user, setUser ] = useState<IUserEntity>(EmptyUser)

  const defaultGlobalContext: GlobalContextProps = {
    user,
    setUser
  }

  return (
    <GlobalContext.Provider value={defaultGlobalContext}>
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalProvider
