import { ModalExitActionProps } from "./models"
import { Button } from "../Button"

const ModalExitAction = ({onExit}:ModalExitActionProps) => {
  return (
    <div className="flex items-center">
      <Button
        text="Salir"
        onClick={onExit}
        customStyles="bg-blue-500"
      />
    </div>
  )
}

export { ModalExitAction }
