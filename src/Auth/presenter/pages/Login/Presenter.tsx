import { useContext, useEffect } from "react"
import Component from "./Component"
import { useLogin } from "../../hooks"
import { useLocalStorage } from "../../../../common/presenter/hooks"
import AuthContext from "../../contexts/Context"
import {
  Modal, ModalTypes, DefaultModalState
} from "../../../../common/presenter/components"
import { ILoginEntity, ITokenEntity } from "../../../domain/models"
import { jwtDecode } from "jwt-decode"
import { useNavigate } from "react-router-dom"


const Presenter = () => {
  const storage = useLocalStorage()
  const navigate = useNavigate()

  const { mutateAsync: loginUser } = useLogin()
  const { modalState, setModalState } = useContext(AuthContext)

  useEffect(() => {
    // const token: ITokenEntity = storage.getStorage('token')

    // if (!token.refreshToken) {
    //   return
    // }

    // const decodedToken = jwtDecode(token.refreshToken)

    // if(Date.now() < decodedToken.exp! * 1000) {
    //   navigate('/home')
    //   return
    // }
  }, [])

  const onLogin = (loginData: ILoginEntity) => {
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
