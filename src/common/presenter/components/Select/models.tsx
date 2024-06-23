import React from "react"
import { IAssetEntity, IError } from "../../../domain/models"

export type SelectProps = {
  dataList: IAssetEntity[],
  setSelectedOuter?: React.Dispatch<React.SetStateAction<IAssetEntity>>,
  errors?: IError,
  placeholder: string,
  containerStyles?: string
}


export type ListItemProps = {
  data: string,
  show: boolean,
  selected: boolean,
  onClick: () => void,
}


export type ListSearchProps = {
  value: string,
  setValue: React.Dispatch<React.SetStateAction<string>>
}


export type TopItemProps = {
  open: boolean,
  selected: IAssetEntity,
  setOpen: React.Dispatch<React.SetStateAction<boolean>>,
  errors?: IError,
  placeholder: string
}
