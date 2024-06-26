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
