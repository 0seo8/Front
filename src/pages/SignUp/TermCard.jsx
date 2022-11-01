import React, { useRef } from 'react'
import notChecked from '/public/assets/notChecked.svg'
import checked from '/public/assets/checked.svg'
import close from '/public/assets/close-white_icon.svg'
import { ReactComponent as CloseIcon } from '/public/assets/close-white_icon.svg'
import { useEffect } from 'react'
import { useState } from 'react'

export const TermCard = ({ accept, check, setCheck }) => {
  const { title, essential, terms } = accept
  const [modal, setModal] = useState(false)

  useEffect(() => {
    setCheck(check)
  }, [check])

  return (
    <div>
      <div className="flex text-sm justify-between mb-5">
        <div
          className="flex hover:cursor-pointer"
          onClick={() => setCheck(!check)}
        >
          <div className="w-3.5 m-[5px]">
            <img src={check ? checked : notChecked} alt="check"></img>
          </div>
          <div className="text-sm font-normal text-black-800 ml-2.5">
            [{essential ? '필수' : '선택'}] {title}
          </div>
        </div>
        <div
          className="hover:cursor-pointer border-b border-black"
          onClick={() => setModal(true)}
        >
          전체보기
        </div>
      </div>
      <div className="w-full h-[120px] min-w-[240px] border border-black-200 rounded-[5px] overflow-y-auto">
        <div className="mx-5 my-3.5 text-sm whitespace-pre-wrap">{terms}</div>
      </div>
      {/* Modal view all assign */}
      {modal ? (
        <div className="w-full h-full bg-modal-mask fixed top-0 left-0 z-50">
          <div className="mx-5 mt-24 bg-white w-auto relative">
            <div
              className="absolute -top-10 right-0"
              onClick={() => setModal(false)}
            >
              <CloseIcon />
            </div>
            <div className="h-[70px] ml-5 flex items-center text-xl font-bold">
              <div>{title}</div>
            </div>
            <div className="px-5 py-3.5 h-[calc(100vh-185px)] overflow-hidden text-sm font-extralight">
              <div className="h-full overflow-y-scroll whitespace-pre-wrap">
                {terms}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}
