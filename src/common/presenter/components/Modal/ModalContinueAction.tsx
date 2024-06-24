import { Button } from "../Button"
import { ModalContinueActionProps } from "./models"

const ModalContinueAction = (
  {onExit, onContinue}: ModalContinueActionProps
) => {
  return (
    <div className="flex flex-col justify-around w-full md:flex-row">
      <Button
        text="Salir"
        onClick={onExit}
        customStyles="bg-red-600"
      />
      <Button
        text="Continuar"
        onClick={onContinue}
        customStyles="bg-green-500"
      />
    </div>
  )
}

export { ModalContinueAction }
