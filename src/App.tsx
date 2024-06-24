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
        content='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi eveniet eius excepturi harum tempora dolor id soluta, quibusdam provident aliquid natus autem doloribus veritatis voluptatibus repudiandae voluptatem nam voluptate itaque.'
        open={open}
        setOpen={setOpen}
        type={ModalTypes.base}
      />
    </>
  )
}

export default App
