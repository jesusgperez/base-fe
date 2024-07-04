import React from "react"
import { ILoginEntity } from "../../domain/models"

export type AuthContextProps = {
  loginData: ILoginEntity,
  setLoginData: React.Dispatch<React.SetStateAction<ILoginEntity>>
}

export type AuthProviderProps = {
  children: React.ReactNode
}
