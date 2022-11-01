import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/layout/Header'

function OrderCheck() {
  const [orderNum, setOrderNum] = useState('')
  const orderCheck = () => {
    // 비회원 주문조회 api
  }
  return (
    <div>
      <Header searchNone={true} />
      <div className="w-full pt-16 flex flex-col justify-center items-center">
        <div className="font-bold text-lg mt-10">비회원 주문 조회</div>
        <div className="pt-10 w-full px-5">
          <div className="text-center text-black-600 font-medium text-sm">
            결제 시에 알려드린 주문 번호를 입력해주세요
          </div>
          <input
            value={orderNum}
            onChange={(e) => setOrderNum(e.target.value)}
            type="text"
            className="pl-3 h-12 box-border w-full py-3 rounded border border-neutral-300 shadow-white my-5"
          />
        </div>
        <div className="w-full mb-8 px-5">
          <button
            onClick={orderCheck}
            className="w-full block h-full py-3 border-none bg-primary text-center rounded text-white"
          >
            조회하기
          </button>
        </div>
        <div className="w-full pt-10 border-t-[10px] text-center border-white-200 text-black-600 font-medium text-sm">
          이미 회원이시라면?
        </div>
        <div className="w-full mt-3 px-5">
          <Link
            to="/login"
            className="w-full block h-full py-3 border border-black-400 text-center rounded"
          >
            로그인
          </Link>
        </div>
      </div>
    </div>
  )
}

export default OrderCheck
