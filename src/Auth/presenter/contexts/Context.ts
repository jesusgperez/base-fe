import { createContext } from "react";
import { AuthContextProps } from "./models";
import { EmptyLoginData } from "./models";

const AuthContext = createContext<AuthContextProps>({
  loginData: EmptyLoginData,
  setLoginData: () => {}
})

export default AuthContext
