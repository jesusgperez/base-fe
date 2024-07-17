import { ChangePasswordProps } from "./models"
import { AuthBackgroundLayout } from "../../layouts"
import { AuthForm } from "../../layouts"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { IChangeEntity } from "../../../domain/models"
import { DefaultChangeEntity } from "../../../domain/models"
import { changeSchemeValidator } from "../../validators"


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
      >
        <h1>Hello world</h1>
      </AuthForm>
    </AuthBackgroundLayout>
  )
}


export default Component
