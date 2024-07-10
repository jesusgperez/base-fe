export type ISignupEntity = {
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  passwordRepeat: string
}

export const DefaultSignupEntity: ISignupEntity = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  passwordRepeat: ""
}
