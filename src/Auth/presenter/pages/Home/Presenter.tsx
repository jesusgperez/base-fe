import { useEffect } from "react"
import Component from "./Component"
import { useAuth } from "../../hooks"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { GlobalContext } from "../../../../common/presenter/contexts/global"

const Presenter = () => {
  const navigate = useNavigate()

  const {
    setUser
  } = useContext(GlobalContext)

  useEffect(() => {
    const validateAuth = async () => {
      await useAuth({navigate, setUser})
    }

    validateAuth()
  }, [])

  return (
    <Component />
  )
}

export default Presenter
