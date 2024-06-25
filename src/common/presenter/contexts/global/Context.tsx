import { createContext } from "react";
import { GlobalContextProps } from "./models";
import { EmptyUser } from "../../../domain/models";

const GlobalContext = createContext<GlobalContextProps>({
  user: EmptyUser,
  setUser: () => {}
})

export default GlobalContext
