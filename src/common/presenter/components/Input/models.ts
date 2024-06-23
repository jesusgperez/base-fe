import { IError } from "../../../domain/models"

export type InputProps = {
  value: string,
  setValue: React.Dispatch<React.SetStateAction<string>>,
  errors?: IError,
  placeholder: string,
  containerStyles?: string,
  customStyles?: string
}
