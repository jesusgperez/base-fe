import { IRetrieveEntity } from "../../../domain/models"
import { AuthBackgroundLayout, AuthForm } from "../../layouts"
import { RetrievePasswordProps } from "./models"
import { useForm, Controller } from "react-hook-form"
import { retrieveSchemeValidator } from "../../validators"
import { yupResolver } from "@hookform/resolvers/yup"
import { DefaultRetrieveEntity } from "../../../domain/models"
import { Input, Button } from "../../../../common/presenter/components"
import { AuthTitle } from "../../components"


const Component = ({onRetrieve}: RetrievePasswordProps) => {
  const {
    control,
    handleSubmit,
    formState: {isValid, errors}
  } = useForm<IRetrieveEntity>({
    resolver: yupResolver(retrieveSchemeValidator),
    mode: 'onChange',
    defaultValues: DefaultRetrieveEntity
  })

  return (
    <AuthBackgroundLayout>
      <AuthForm
        onSubmit={handleSubmit(onRetrieve)}
      >
        <div
          className="flex flex-col justify-center items-center w-full h-full space-y-10 md:space-y-16 px-5 md:px-10"
        >
          <AuthTitle
            title="Recuperar contraseña"
            content="Escribe tu correo electrónico y te enviaremos los pasos para recuperar tu contraseña"
          />

          <div
            className="flex flex-col justify-center items-center space-y-5 w-full"
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

            <Button
              text="Recuperar contraseña"
              onClick={handleSubmit(onRetrieve)}
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
