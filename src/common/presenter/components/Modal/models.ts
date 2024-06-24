export const ModalTypes = {
  base: 'base',
  continue: 'continue'
}

export type ModalProps = {
  title: string,
  content: string,
  open: boolean,
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  type?: string
}

export type ModalTitleProps = {
  text: string
}

export type ModalExitActionProps = {
  onExit: () => void
}

export type ModalContinueActionProps = {
  onExit: () => void,
  onContinue: () => void
}
