import React, { useState } from 'react'
import { cls } from '../../utils'

const ProductCode = () => {
  const [open, setOpen] = useState(false)
  const openHandler = () => {
    setOpen((prev) => !prev)
  }
  return (
    <div className="px-5 border-b border-primary pb-5">
      <h4 className="font-bold" onClick={openHandler}>
        상품번호
      </h4>
      <div className={open ? 'mt-3 block' : 'hidden'}>
        <span className="text-sm text-black-600">상품코드 : </span>
        <span className="text-sm text-black-600">1194578</span>
      </div>
    </div>
  )
}

export default ProductCode
