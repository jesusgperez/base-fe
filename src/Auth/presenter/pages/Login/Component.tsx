import { Controller, useForm } from "react-hook-form"
import { LoginProps } from "./models"
import { Input, Button } from "../../../../common/presenter/components"
import { DefaultLoginEntity, ILoginEntity } from "../../../domain/models"
import { yupResolver } from "@hookform/resolvers/yup"
import { loginSchemeValidator } from "../../validators"


const Component = ({onLogin}: LoginProps) => {
  const {
    control,
    handleSubmit,
    formState: {isValid, errors}
  } = useForm<ILoginEntity>({
    resolver: yupResolver(loginSchemeValidator),
    mode: 'onChange',
    defaultValues: DefaultLoginEntity
  })

  return (
      <div 
        className="bg-center bg-cover bg-no-repeat bg-wave h-screen w-screen"
      >
        <form
          onSubmit={handleSubmit(onLogin)}
          className="flex justify-center items-center w-full h-full"
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
                <Controller
                  name="email"
                  control={control}
                  rules={{required: true}}
                  render={({field: {onChange, value}}) => (
                    <Input
                      value={value}
                      placeholder="Correo Electrónico"
                      setValue={onChange}
                      errors={{
                        hasError: errors.email ? true : false,
                        message: errors.email?.message || ''
                      }}
                      containerStyles="w-full md:w-3/4"
                    />
                  )}
                />

                <Controller
                  name="password"
                  control={control}
                  rules={{required: true}}
                  render={({field: {onChange, value}}) => (
                    <Input
                    value={value}
                    placeholder="Contraseña"
                    setValue={onChange}
                    errors={{
                      hasError: errors.password ? true : false,
                      message: errors.password?.message || ''
                    }}
                      containerStyles="w-full md:w-3/4"
                      type="password"
                    />
                  )}
                />

                <Button
                  text="Ingresar"
                  onClick={handleSubmit(onLogin)}
                  customStyles="bg-blue-400"
                  enabled={isValid}
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
        </form>
      </div>
  )
}

export default Component
