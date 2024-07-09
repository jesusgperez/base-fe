import { ILoginEntity } from "../../../domain/models"

export type LoginProps = {
  onLogin: (loginData: ILoginEntity) => void
}

export const LoginInputTypeValues = {
  email: 'email',
  password: 'password'
}
