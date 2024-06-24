import { IAssetEntity, IError } from "../../../domain/models"

export type CheckBoxGroupProps = {
  options: IAssetEntity[],
  title: string,
  setOuterChecked?: React.Dispatch<React.SetStateAction<string>>,
  containerStyles?: string,
  errors?: IError
}
