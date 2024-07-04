import { useLogin } from "../../hooks"
import Component from "./Component"

const Presenter = () => {
  const { mutateAsync: loginUser } = useLogin()


  return (
    <Component />
  )
}

export default Presenter
