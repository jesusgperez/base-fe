import { ModalTitleProps } from "./models"


const ModalTitle = ({text}: ModalTitleProps) => {
  return (
    <div
      className="flex items-center justify-center text-3xl font-bold"
    >
      {text}
    </div>
  )
}

export { ModalTitle }
