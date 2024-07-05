export const ModalTypes = {
  base: 'base',
  continue: 'continue'
}

export type ModalProps = {
  title: string,
  content: string,
  open: boolean,
  onExit: () => void,
  onContinue?: () => void,
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

export type IModalState = {
  title: string,
  content: string,
  open: boolean
}

export const DefaultModalState: IModalState = {
  title: '',
  content: '',
  open: false
}
