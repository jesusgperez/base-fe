import React from "react"
import { ILoginEntity } from "../../domain/models"
import { IModalState } from "../../../common/presenter/components"

export type AuthContextProps = {
  loginData: ILoginEntity,
  setLoginData: React.Dispatch<React.SetStateAction<ILoginEntity>>,
  modalState: IModalState,
  setModalState: React.Dispatch<React.SetStateAction<IModalState>>,
}

export type AuthProviderProps = {
  children: React.ReactNode
}
