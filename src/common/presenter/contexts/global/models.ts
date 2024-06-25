import React from "react"
import { IUserEntity } from "../../../domain/models"

export type GlobalContextProps = {
  user: IUserEntity,
  setUser: React.Dispatch<React.SetStateAction<IUserEntity>>
}

export type GlobalProviderProps = {
  children: React.ReactNode
}
