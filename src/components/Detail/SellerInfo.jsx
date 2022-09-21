import React, { useState } from 'react'

const SellerInfo = () => {
  const [open, setOpen] = useState(false)
  const openHandler = () => {
    setOpen((prev) => !prev)
  }
  return (
    <div className="px-5 border-b border-primary py-5">
      <h4 className="font-bold" onClick={openHandler}>
        판매자정보
      </h4>
      <div className={open ? 'mt-3 block' : 'hidden'}>판매자정보 작성 예정</div>
    </div>
  )
}

export default SellerInfo
