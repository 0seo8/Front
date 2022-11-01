import React from 'react'
import { ReactComponent as MoneyJpIcon } from '/public/assets/moneyjp_icon.svg'
import { ReactComponent as CouponIcon } from '/public/assets/coupon_icon.svg'
import { ReactComponent as SpeechBubbleIcon } from '/public/assets/speechbubble_icon.svg'
import { ReactComponent as SmileIcon } from '/public/assets/smile_icon.svg'
import { Link } from 'react-router-dom'

const MyPossession = () => {
  return (
    <ul className="flex items-center justify-center mt-10 px-5">
      <li className="w-1/4 flex flex-col items-center justify-center">
        <MoneyJpIcon className="w-5" />
        <span className="text-xs mt-4 mb-2">적립금</span>
        <span className="text-sm font-medium">준비 중</span>
      </li>
      <li className="w-1/4 flex justify-center">
        <Link className="w-full flex flex-col items-center">
          <CouponIcon className="w-5" />
          <span className="text-xs mt-4 mb-2">쿠폰</span>
          <span className="text-sm font-medium">3</span>
        </Link>
      </li>
      <li className="w-1/4 flex justify-center">
        <Link className="w-full flex flex-col items-center" to="/my/review">
          <SpeechBubbleIcon className="w-[1.125rem]" />
          <span className="text-xs mt-4 mb-2">후기</span>
          <span className="text-sm font-medium">2</span>
        </Link>
      </li>
      <li className="w-1/4 flex flex-col items-center justify-center">
        <Link className="w-full flex flex-col items-center">
          <SmileIcon className="w-5" />
          <span className="text-xs mt-4 mb-2">나의 오늘</span>
          <span className="text-sm font-medium">준비 중</span>
        </Link>
      </li>
    </ul>
  )
}

export default MyPossession
