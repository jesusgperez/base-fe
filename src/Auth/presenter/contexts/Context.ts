import { createContext } from "react";
import { AuthContextProps } from "./models";
import { EmptyLoginEntity } from "../../domain/models";
import { DefaultModalState } from "../../../common/presenter/components";

const AuthContext = createContext<AuthContextProps>({
  loginData: EmptyLoginEntity,
  setLoginData: () => {},
  modalState: DefaultModalState,
  setModalState: () => {}
})

export default AuthContext
