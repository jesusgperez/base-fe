import { useContext, useState } from "react"
import Component from "./Component"
import { useLogin } from "../../hooks"
import AuthContext from "../../contexts/Context"
import {
  Modal, ModalTypes, IModalState, DefaultModalState
} from "../../../../common/presenter/components"


const Presenter = () => {
  const [ modalState, setModalState ] = useState<IModalState>(DefaultModalState)
  const { mutateAsync: loginUser } = useLogin()
  const { loginData } = useContext(AuthContext)

  const onLogin = () => {
    setModalState({...modalState, open: true})
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
        onExit={() => setModalState({...modalState, open: false})}
      />
    </>
  )
}

export default Presenter
