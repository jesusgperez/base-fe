import { useContext } from "react"
import { useRetrieve } from "../../hooks"
import Component from "./Component"
import AuthContext from "../../contexts/Context"
import { Modal, ModalTypes, DefaultModalState } from "../../../../common/presenter/components"
import { IRetrieveEntity } from "../../../domain/models"


const Presenter = () => {
  const { mutateAsync: retrievePassword } = useRetrieve()
  const { modalState, setModalState } = useContext(AuthContext)

  const onRetrieve = (retrieveData: IRetrieveEntity) => {
    const retrieve = async () => await retrievePassword(retrieveData)

    retrieve()
  }

  return (
    <>
    <Component
      onRetrieve={onRetrieve}
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
