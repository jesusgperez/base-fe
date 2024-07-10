import Component from "./Component";
import { useContext } from "react";
import AuthContext from "../../contexts/Context";
import { useSignup } from "../../hooks/useSignup.hook";
import { Modal, ModalTypes, DefaultModalState } from "../../../../common/presenter/components";
import { ISignupEntity } from "../../../domain/models";


const Presenter = () => {
  const { mutateAsync: signupUser } = useSignup()
  const { modalState, setModalState } = useContext(AuthContext)

  const onSignup = (signupData:ISignupEntity) => {
    const signup = async () => await signupUser(signupData)

    signup()
  }

  return (
    <>
      <Component
        onSignup={onSignup}
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
