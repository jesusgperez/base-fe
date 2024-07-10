import { Controller, useForm } from "react-hook-form"
import { SignupProps } from "./models"
import { Input, Button } from "../../../../common/presenter/components"
import { ISignupEntity, DefaultSignupEntity } from "../../../domain/models"
import { yupResolver } from "@hookform/resolvers/yup"
import { signupSchemeValidator } from "../../validators"
import { AuthBackgroundLayout } from "../../layouts"


const Component = ({ onSignup }: SignupProps) => {
  const {
    control,
    handleSubmit,
    formState: {isValid, errors}
  } = useForm<ISignupEntity>({
    resolver: yupResolver(signupSchemeValidator),
    mode: 'onChange',
    defaultValues: DefaultSignupEntity
  })

  return (
    <AuthBackgroundLayout>
      <h1>This is the signup</h1>
      {isValid}
    </AuthBackgroundLayout>
  )
}

export default Component
