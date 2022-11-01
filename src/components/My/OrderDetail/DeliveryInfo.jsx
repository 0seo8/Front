import React from 'react'

const DeliveryInfo = () => {
  return (
    <div className="mt-[38px]">
      <h3 className="text-lg font-bold">결제정보</h3>
      <div className="mt-[21px] text-sm">
        <div className="grid grid-cols-2 border-t border-black-400 text-black-400 py-3">
          <div>받으시는 분</div>
          <div className="text-black-800">사토 유키</div>
        </div>
        <div className="grid grid-cols-2 border-t border-black-400 text-black-400 py-3">
          <div>휴대폰 번호</div>
          <div className="text-black-800">1234-12-1234</div>
        </div>
        <div className="grid grid-cols-2 border-t border-black-400 text-black-400 py-3">
          <div>이메일</div>
          <div className="text-black-800">yuki123@google.com</div>
        </div>
        <div className="grid grid-cols-2 border-t border-black-400 text-black-400 py-3">
          <div>주소</div>
          <div className="text-black-800">
            Tōkyō-to, Shibuya-ku, Jinnan,1 Chome−20−9 公園通りビル
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeliveryInfo
