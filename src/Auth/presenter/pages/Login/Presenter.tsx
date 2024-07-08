import { useContext, useState } from "react"
import Component from "./Component"
import { useLogin } from "../../hooks"
import AuthContext from "../../contexts/Context"
import {
  Modal, ModalTypes, IModalState, DefaultModalState
} from "../../../../common/presenter/components"
import { IServerError } from "../../../../common/domain/models"


const Presenter = () => {
  const [ modalState, setModalState ] = useState<IModalState>(DefaultModalState)
  const { mutateAsync: loginUser } = useLogin()
  const { loginData } = useContext(AuthContext)

  const onLogin = () => {
    try {
      (async () => await loginUser(loginData))
    } catch (e: unknown) {
      const error = e as IServerError

      setModalState({
        open: true,
        title: "Error",
        content: error.detail
      })
    }
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
