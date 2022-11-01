import React from 'react'
import { useNavigate } from 'react-router-dom'
const CompletedBtn = () => {
  const navigate = useNavigate()
  return (
    <div className="hover:cursor-pointer fixed bottom-0 left-0 right-0 z-50 ">
      <div className="h-[80px] gap-4 w-full flex justify-center items-center text-white-200 bg-point pb-6 text-lg">
        <div onClick={() => navigate('/')}>홈으로</div>
        <div className="w-[1px] h-[18px] bg-white"></div>
        <div onClick={() => navigate('/my/order-list')}>주문 배송 조회</div>
      </div>
    </div>
  )
}

export default CompletedBtn
