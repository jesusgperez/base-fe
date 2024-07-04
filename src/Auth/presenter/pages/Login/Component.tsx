import { useContext } from "react"
import { LoginProps } from "./models"
import AuthContext from "../../contexts/Context"

const Component = ({}: LoginProps) => {
  const { setLoginData } = useContext(AuthContext)

  return (
      <h1>Hello world</h1>
  )
}

export default Component
