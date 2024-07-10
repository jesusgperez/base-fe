import { ISignupEntity } from "../../../domain/models"

export type SignupProps = {
  onSignup: (signupData: ISignupEntity) => void
}
