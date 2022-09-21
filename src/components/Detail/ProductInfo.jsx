import React, { useState } from 'react'

const ProductInfo = () => {
  const [open, setOpen] = useState(false)
  const openHandler = () => {
    setOpen((prev) => !prev)
  }
  return (
    <div className="px-5  border-b border-primary pb-5">
      <h4 className="font-bold" onClick={openHandler}>
        상품정보
      </h4>
      <div className={open ? 'mt-3 block' : 'hidden'}>샬랴샬랴</div>
    </div>
  )
}

export default ProductInfo
