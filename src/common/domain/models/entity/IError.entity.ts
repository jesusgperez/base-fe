export type IError = {
  hasError: boolean,
  message: string
}

export const EmptyError: IError = {
  hasError: false,
  message: ''
}
