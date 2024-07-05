import { IError } from "../../../domain/models"

export type InputProps = {
  value: string,
  setValue: (value: string) => void,
  type?: string,
  errors?: IError,
  placeholder: string,
  containerStyles?: string,
  customStyles?: string
}
