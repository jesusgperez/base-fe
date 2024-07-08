import { createContext } from "react";
import { AuthContextProps } from "./models";
import { DefaultLoginEntity } from "../../domain/models";
import { DefaultModalState } from "../../../common/presenter/components";

const AuthContext = createContext<AuthContextProps>({
  loginData: DefaultLoginEntity,
  setLoginData: () => {},
  modalState: DefaultModalState,
  setModalState: () => {}
})

export default AuthContext
