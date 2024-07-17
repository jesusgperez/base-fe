export type IChangeEntity = {
  code: string,
  password: string,
  passwordRepeat: string
}

export const DefaultChangeEntity: IChangeEntity = {
  code: "",
  password: "",
  passwordRepeat: ""
}
