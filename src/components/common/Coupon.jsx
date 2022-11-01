import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { ReactComponent as GoBackIcon } from '/public/assets/back-on.svg'
import { cls } from '../../utils'

const Coupon = (props) => {
  const location = useLocation()
  const currentPath = location.pathname
  const [open, setOpen] = useState(false)
  const toggleBtn = () => {
    setOpen((prev) => !prev)
  }
  return (
    <div className="">
      <div
        className="flex px-5 border-b border-black-200 py-6"
        onClick={toggleBtn}
      >
        <p className="flex-grow font-bold">
          {currentPath === '/order' ? '쿠폰 / 적립금' : '최대혜택가'}
        </p>
        <div className="flex items-center gap-1">
          {props.children}
          <GoBackIcon
            width="14px"
            height="14px"
            className={cls(open ? 'rotate-90' : '-rotate-90')}
          />
        </div>
      </div>
      {open && (
        <div>
          <div className="px-5 py-5 border-b border-black-200 ">
            <div className=" text-sm text-black-600 font-bold">상품할인</div>
            <div className="mt-[11px] text-sm text-black-600 text-[12px] flex justify-between">
              <span>상품 기본 할인</span>
              <span>¥ -1,455</span>
            </div>
          </div>
          <div className="px-5 py-5 border-b border-black-200 ">
            <div className="text-sm text-black-600 font-bold">쿠폰 할인</div>
            <div className="mt-[11px] text-sm text-black-600 text-[12px] flex justify-between">
              <span>¥ 4000 이상 구매시 5% 할인</span>
              <span>¥ -1,455</span>
            </div>
            <div className="mt-[11px] text-sm text-black-600 text-[12px] flex justify-between">
              <span>등급 회원 할인 5%</span>
              <span>¥ -1,455</span>
            </div>
          </div>
          <div className="px-5 py-5 border-b border-black-200 ">
            <div className="text-sm text-black-600 font-bold">보유 적립금</div>
            <div className="mt-[11px] text-sm text-black-600 text-[12px] flex justify-between">
              <span>보유 적릭금 모두 사용</span>
              <span>450P</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Coupon
