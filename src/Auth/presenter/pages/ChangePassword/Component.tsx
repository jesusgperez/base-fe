import { ChangePasswordProps } from "./models"
import { AuthBackgroundLayout } from "../../layouts"
import { AuthForm } from "../../layouts"
import { useForm, Controller } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { IChangeEntity } from "../../../domain/models"
import { DefaultChangeEntity } from "../../../domain/models"
import { changeSchemeValidator } from "../../validators"
import { Input, Button } from "../../../../common/presenter/components"
import { AuthTitle } from "../../components"


const Component = ({onChange}: ChangePasswordProps) => {
  const {
    control,
    handleSubmit,
    formState: {isValid, errors}
  } = useForm<IChangeEntity>({
    resolver: yupResolver(changeSchemeValidator),
    mode: 'onChange',
    defaultValues: DefaultChangeEntity
  })

  return (
    <AuthBackgroundLayout>
      <AuthForm
        onSubmit={handleSubmit(onChange)}
        customStyles="h-[50%]"
      >
        <div
          className="flex flex-col justify-center items-center w-full h-full space-y-10 md:space-y-16 px-5 md:px-10"
        >
          <AuthTitle
            title="Cambiar contraseña"
            content="Escribe el código que te enviamos al correo y tu contraseña nueva"
          />

          <div
            className="flex flex-col justify-center items-center space-y-5 w-full"
          >
            <Controller
              name="code"
              control={control}
              rules={{required: true}}
              render={({field: {onChange, value}}) => (
                <Input
                  value={value}
                  placeholder="Código"
                  setValue={onChange}
                  errors={{
                    hasError: errors.code ? true : false,
                    message: errors.code?.message || ''
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

            <Controller
              name="passwordRepeat"
              control={control}
              rules={{required: true}}
              render={({field: {onChange, value}}) => (
                <Input
                  value={value}
                  placeholder="Repetir Contraseña"
                  setValue={onChange}
                  errors={{
                    hasError: errors.passwordRepeat ? true : false,
                    message: errors.passwordRepeat?.message || ''
                  }}
                  containerStyles="w-full md:w-3/4"
                  type="password"
                />
              )}
            />

            <Button
              text="Cambiar contraseña"
              onClick={handleSubmit(onChange)}
              customStyles="bg-blue-400"
              enabled={isValid}
            />
          </div>
        </div>
      </AuthForm>
    </AuthBackgroundLayout>
  )
}


export default Component
