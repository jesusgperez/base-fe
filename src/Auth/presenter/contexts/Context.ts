import { createContext } from "react";
import { AuthContextProps } from "./models";
import { EmptyLoginEntity } from "../../domain/models";

const AuthContext = createContext<AuthContextProps>({
  loginData: EmptyLoginEntity,
  setLoginData: () => {}
})

export default AuthContext
