import './App.css'
import { useState } from 'react'
import { Modal } from './common/presenter/components'
import { ModalTypes } from './common/presenter/components/Modal/models'

function App() {
  const [open, setOpen] = useState<boolean>(true)
  return (
    <>
      <Modal
        title='Hello world'
        content='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi eveniet eius excepturi harum tempora dolor id soluta.'
        open={open}
        onExit={() => {setOpen(false)}}
        onContinue={() => {setOpen(false)}}
        type={ModalTypes.continue}
      />
    </>
  )
}

export default App
