import { LoginProps } from "./models"
import AuthProvider from "../../contexts/Provider"

const Component = ({}: LoginProps) => {
  return (
    <AuthProvider>
      <h1>Hello world</h1>
    </AuthProvider>
  )
}

export default Component
