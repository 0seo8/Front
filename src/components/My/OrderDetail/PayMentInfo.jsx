import React from 'react'

const PayMentInfo = () => {
  return (
    <div className="mt-[38px]">
      <h3 className="text-lg font-bold">배송정보</h3>
      <div className="mt-[21px] text-sm">
        <div className="grid grid-cols-2 border-t border-black-400 text-black-400 py-3">
          <div>결제방법</div>
          <div className="text-black-800">라인페이</div>
        </div>
        <div className="grid grid-cols-2 border-t border-black-400 text-black-400 py-3">
          <div>주문접수일시</div>
          <div className="text-black-800">2022.10.03 19:31 PM</div>
        </div>
        <div className="grid grid-cols-2 border-t border-black-400 text-black-400 py-3">
          <div>결제완료일시</div>
          <div className="text-black-800">2022.10.03 19:31 PM</div>
        </div>
        <div className="grid grid-cols-2 border-t border-black-400 text-black-400 py-3">
          <div>할인금액</div>
          <div className="text-black-800">¥ 0</div>
        </div>
        <div className="grid grid-cols-2 border-t border-black-400 text-black-400 py-3">
          <div>배송비</div>
          <div className="text-black-800">¥ 0</div>
        </div>
      </div>
      <div className="font-bold grid grid-cols-2 border-t border-point py-5">
        <div>결제금액</div>
        <div className="text-primary">¥ 3,500</div>
      </div>
    </div>
  )
}

export default PayMentInfo
