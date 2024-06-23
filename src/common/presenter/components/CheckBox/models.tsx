import { IError } from "../../../domain/models"

export type CheckBoxProps = {
  id: string,
  title: string,
  setOuterCheck?: React.Dispatch<React.SetStateAction<boolean>>,
  containerStyle?: string,
  errors?: IError
}
