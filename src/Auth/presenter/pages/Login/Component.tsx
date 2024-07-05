import { useContext } from "react"
import { LoginProps } from "./models"
import AuthContext from "../../contexts/Context"
import { Input, Button } from "../../../../common/presenter/components"

const Component = ({onLogin}: LoginProps) => {
  const { loginData, setLoginData } = useContext(AuthContext)

  const setValue = (type: string, value: string) => {
    if (type === 'email') {
      setLoginData({...loginData, email: value})
    }
    else if (type === 'password') {
      setLoginData({...loginData, password: value})
    }
  }

  return (
      <div 
        className="flex justify-center items-center bg-center bg-cover bg-no-repeat bg-wave h-screen w-screen"
      >
        <div
          className="relative flex flex-col items-center bg-white rounded-lg shadow-2xl space-y-0 border border-gray w-3/4 h-1/3 md:space-y-10 md:h-1/2 lg:w-5/12"
        >
          <div className="flex justify-center w-full h-1/4">
            <div
              className="absolute -top-12 rounded-full bg-blue-100 h-24 w-24 fill-blue-100 md:h-40 md:w-40 md:-top-20"
            >
              <img src="src/assets/logo.svg" alt="" />
            </div>
          </div>
          <div
            className="flex flex-col justify-center items-center w-full h-1/2 bg-gray space-y-5 px-5 md:px-10"
          >
              <Input
                value={loginData.email}
                placeholder="Correo Electrónico"
                setValue={ (value) => setValue('email', value)}
                containerStyles="w-full md:w-3/4"
              />

              <Input
                value={loginData.password}
                placeholder="Contraseña"
                setValue={ (value) => setValue('password', value)}
                containerStyles="w-full md:w-3/4"
                type="password"
              />

              <Button
                text="Ingresar"
                onClick={onLogin}
                customStyles="bg-blue-400"
              />
          </div>

          <div
            className="flex flex-col text-sm justify-center items-center h-1/4 w-full space-y-1 py-1"
          >
            <p>¿Olvidaste tu contraseña?</p>
            <a
              href="/forgot-password"
              className="text-blue-900 underline"
            >
              Haz click aquí para recuperarla
            </a>
          </div>
        </div>
      </div>
  )
}

export default Component
