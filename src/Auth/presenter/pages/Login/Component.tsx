import { useContext } from "react"
import { LoginProps } from "./models"
import AuthContext from "../../contexts/Context"
import { Input, Button } from "../../../../common/presenter/components"

const Component = ({}: LoginProps) => {
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
          className="relative flex flex-col items-center bg-white rounded-lg shadow-2xl space-y-10 border border-gray w-3/4 h-1/3 md:space-y-0 md:h-1/2 lg:w-5/12"
        >
          <div
            className="absolute mx-auto -mt-10 rounded-full bg-blue-100 h-20 w-20 fill-blue-100 md:h-40 md:w-40 md:-mt-20"
          >
            <img src="src/assets/logo.svg" alt="" />
          </div>
          <div
            className="flex flex-col justify-center items-center w-full h-full bg-gray space-y-5 px-5 -mt-10 md:-mt-20 md:px-10"
          >
              <Input
                value={loginData.email}
                placeholder="Email"
                setValue={ (value) => setValue('email', value)}
                containerStyles="w-3/4"
              />

              <Input
                value={loginData.password}
                placeholder="Password"
                setValue={ (value) => setValue('password', value)}
                containerStyles="w-3/4"
                type="password"
              />

              <Button
                text="Ingresar"
                onClick={() => {console.log(loginData)}}
                customStyles="bg-blue-400"
              />
          </div>
        </div>
      </div>
  )
}

export default Component
