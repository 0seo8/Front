import React, { useState } from 'react'
import { ReactComponent as PlusIcon } from '/public/assets/plus_icon.svg'
import { ReactComponent as FrameIcon } from '/public/assets/frame_icon.svg'
import { ReactComponent as CloseIcon } from '/public/assets/close-white_icon.svg'

const ProductShortCut = ({ setActive, cls }) => {
  const [openModal, setOpenModal ] = useState(false)
  return (
    <div
      className="w-full pb-[109%] h-0 bg-cover bg-no-repeat bg-left-top relative bg-[length:100%_auto] shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
      style={{ backgroundImage: 'url(https://ifh.cc/g/VQLnOD.jpg)' }}
    >
      <PlusIcon
        className="absolute top-[34.054%] left-[12.797%] cursor-pointer"
        onClick={() => {
          setActive(0)
        }}
      />
      <PlusIcon
        className="absolute top-[55.054%] left-[33%] cursor-pointer"
        onClick={() => {
          setActive(1)
        }}
      />
      <PlusIcon
        className="absolute top-[83.054%] left-[32%] cursor-pointer"
        onClick={() => {
          setActive(2)
        }}
      />
      <FrameIcon className="absolute right-3.5 bottom-3.5 cursor-pointer" onClick={()=>{setOpenModal(true)}} />
      <div className={cls('max-w-[600px] fixed left-0 right-0 m-auto top-0 w-full h-full bg-[#020202] z-20 flex items-center justify-center px-5', openModal ? 'block' : 'hidden')}>
        <div
          className="w-full pb-[109%] h-0 bg-cover bg-no-repeat bg-left-top relative bg-[length:100%_auto]"
          style={{ backgroundImage: 'url(https://ifh.cc/g/VQLnOD.jpg)' }}
        >
          <CloseIcon className="absolute -top-[3.75rem] right-0 cursor-pointer" onClick={()=>(setOpenModal(false))}/>
        </div>
      </div>
    </div>
  )
}

export default ProductShortCut
