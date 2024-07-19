import { ReactNode } from "react"

export type AuthBackgroundLayoutProps = {
  children: ReactNode
}

export type AuthFormProps = {
  onSubmit: () => void,
  children: ReactNode,
  customStyles?: string
}
