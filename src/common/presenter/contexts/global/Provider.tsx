import GlobalContext from "./Context";
import { GlobalContextProps, GlobalProviderProps } from "./models";

const GlobalProvider = ({children}: GlobalProviderProps) => {
  const defaultGlobalContext: GlobalContextProps = {

  }

  return (
    <GlobalContext.Provider value={defaultGlobalContext}>
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalProvider
