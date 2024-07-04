import React from "react"

export type AuthContextProps = {
  loginData: ILoginData,
  setLoginData: React.Dispatch<React.SetStateAction<ILoginData>>
}

export type AuthProviderProps = {
  children: React.ReactNode
}

export type ILoginData = {
  name: string,
  password: string
}

export const EmptyLoginData: ILoginData = {
  name: "",
  password: ""
}
