import { useContext } from "react"
import Component from "./Component"
import { useLogin } from "../../hooks"
import AuthContext from "../../contexts/Context"
import {
  Modal, ModalTypes, DefaultModalState
} from "../../../../common/presenter/components"


const Presenter = () => {
  const { mutateAsync: loginUser } = useLogin()
  const { loginData, modalState, setModalState } = useContext(AuthContext)

  const onLogin = () => {
    const login = async () => await loginUser(loginData)

    login()
  }

  return (
    <>
      <Component
        onLogin={onLogin}
      />

      <Modal
        title={modalState.title}
        content={modalState.content}
        open={modalState.open}
        type={ModalTypes.base}
        onExit={() => setModalState(DefaultModalState)}
      />
    </>
  )
}

export default Presenter
