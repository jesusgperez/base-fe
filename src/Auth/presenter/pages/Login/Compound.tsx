import Presenter from "./Presenter";
import AuthProvider from "../../contexts/Provider";

const Compound = () => {
  return (
    <AuthProvider>
      <Presenter />
    </AuthProvider>
  )
}

export default Compound
