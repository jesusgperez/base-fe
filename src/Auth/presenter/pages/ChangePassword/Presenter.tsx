import { useContext } from "react"
import { useChange } from "../../hooks"
import Component from "./Component"
import { IChangeEntity } from "../../../domain/models"
import AuthContext from "../../contexts/Context"
import { Modal, ModalTypes, DefaultModalState } from "../../../../common/presenter/components"


const Presenter = () => {
  const { mutateAsync: changePassword } = useChange()
  const { modalState, setModalState } = useContext(AuthContext)

  const onChange = (signupData: IChangeEntity) => {
    const change = async () => await changePassword(signupData)

    change()
  }

  return (
    <>
      <Component
        onChange={onChange}
      />

      <Modal
        title={modalState.title}
        content={modalState.content}
        open={modalState.open}
        type={ModalTypes.base}
        onExit={() => {setModalState(DefaultModalState)}}
      />
    </>
  )
}


export default Presenter
