import React, { useState } from 'react'

const useModalControl = () => {
  const [isOpen, setIsOpen] = useState(false)
  const ModalControlHandler = () => {
    setIsOpen((prev) => !prev)
  }
  return [isOpen, ModalControlHandler]
}

export default useModalControl
