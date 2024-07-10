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
      <div className="flex flex-col md:flex-row w-full h-full">
        <form
          onSubmit={handleSubmit(onSignup)}
          className="flex justify-center items-center w-full h-full lg:w-1/2"
        >
          <div className="flex justify-center items-center rounded-lg shadow-xl w-5/6 h-1/2 bg-white border-2 border-black-700 md:w-3/4">

          </div>
        </form>
        <div className="flex justify-center items-center hidden w-1/2 h-full lg:block">
          <img
            src="src/assets/logo.svg"
            alt=""
            className="hover:animate-spin duration-1000"
          />
        </div>
      </div>
    </AuthBackgroundLayout>
  )
}

export default Component
