import { useContext } from "react"
import Component from "./Component"
import { useLogin } from "../../hooks"
import AuthContext from "../../contexts/Context"

const Presenter = () => {
  const { mutateAsync: loginUser } = useLogin()
  const { loginData } = useContext(AuthContext)

  const onLogin = () => {

  }

  return (
    <Component
      onLogin={onLogin}
    />
  )
}

export default Presenter
