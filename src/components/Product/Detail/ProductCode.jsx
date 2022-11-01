import React, { useState } from 'react'
import { ReactComponent as GoBackIcon } from '/public/assets/back-on.svg'
import { cls } from '../../../utils'

const ProductCode = () => {
  const [open, setOpen] = useState(false)
  const openHandler = () => {
    setOpen((prev) => !prev)
  }
  return (
    <div className="px-5 border-b border-primary pb-5">
      <div className="flex justify-between items-center" onClick={openHandler}>
        <h4 className="font-bold">상품번호</h4>
        <GoBackIcon
          width="14px"
          height="14px"
          className={cls(open ? 'rotate-90' : '-rotate-90')}
        />
      </div>
      <div className={open ? 'mt-3 block' : 'hidden'}>
        <span className="text-sm text-black-600">상품코드 : </span>
        <span className="text-sm text-black-600">1194578</span>
      </div>
    </div>
  )
}

export default ProductCode
