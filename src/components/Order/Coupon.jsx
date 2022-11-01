import React, { useState } from 'react'
import BackIcon from '../common/BackIcon'

const Coupon = () => {
  const [open, setOpen] = useState(false)
  const changeOepn = () => {
    setOpen((prev) => !prev)
  }
  return (
    <>
      <div
        className="px-5 border-b border-primary flex justify-between items-center"
        onClick={changeOepn}
      >
        <h4 className="text-sm py-4  font-bold">쿠폰 / 적립금</h4>
        <BackIcon size={14} className="-rotate-90" />
      </div>
    </>
  )
}

export default Coupon
