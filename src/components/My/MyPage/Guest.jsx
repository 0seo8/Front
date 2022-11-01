import React from 'react'
import { Link } from 'react-router-dom'
const Guest = () => {
  return (
    <div className="px-5 pt-14">
      <p className="text-black-400 font-medium">바로 오늘 상점 회원가입하고</p>
      <p className="text-3xl font-bold mt-1.5 mb-7">
        특별한 혜택을 누려보세요!
      </p>
      <span className="text-xs font-medium text-white bg-primary text-center px-1.5 py-[0.094rem] rounded rounded-br-none">
        5000p
      </span>
      <ul className="text-center pt-2 font-bold text-xs">
        <li className="border border-primary rounded">
          <Link to="/signup" className="w-full block h-full py-3">
            회원가입
          </Link>
        </li>
        <li className="border bg-point rounded text-white mt-2.5">
          <Link to="/login" className="w-full block h-full py-3">
            로그인
          </Link>
        </li>
        {/* <li className="border bg-black-400 rounded text-white mt-2.5">
          <Link to="/order-check" className="w-full block h-full py-3">
            비회원 주문 조회
          </Link>
        </li> */}
      </ul>
    </div>
  )
}

export default Guest
