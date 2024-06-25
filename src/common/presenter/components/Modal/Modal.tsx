import { ModalProps } from "./models"
import { ModalTitle } from "./ModalTitle"
import { ModalTypes } from "./models"
import { ModalExitAction } from "./ModalExitAction"
import { ModalContinueAction } from "./ModalContinueAction"

const Modal = ({title, content, type, open, setOpen}: ModalProps) => {
  const renderActions = () => {
    if (type === ModalTypes.continue) {
      return <ModalContinueAction
        onExit={() => {setOpen(false)}}
        onContinue={() => {setOpen(false)}}
      />
    }

    return <ModalExitAction
      onExit={() => {setOpen(false)}}
    />
  }

  return (
    <div
      className={`flex bg-gray-300 bg-opacity-30 h-screen w-full ${!open && 'hidden'} items-center justify-center`}
    >
      <div 
        className="flex flex-col w-1/2 h-1/2 -mt-28 px-5 py-10 bg-white border border-primary rounded-lg items-center justify-center shadow-xl space-y-16"
      >
        <ModalTitle text={title} />
        <div className="flex flex-col text-lg px-5 py-10 items-center">
          {content}
        </div>
        {renderActions()}
      </div>
  
    </div>
  )
}

export { Modal }
