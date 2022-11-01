import React from 'react'

const TotalPrice = ({ items }) => {
  return (
    <div className="">
      <div className=" px-5 border-b border-primary py-5">
        <h4 className="font-bold  pb-5">결제 금액</h4>
        <div className="border-b border-t border-black-400 py-2">
          <div className="flex justify-between py-3 text-[14px]">
            <div className="text-black-400">주문 상품 수</div>
            <div>총 {items?.reduce((acc, cur) => cur.count + acc, 0)}개</div>
          </div>
          <div className="flex justify-between py-3 text-[14px]">
            <div className="text-black-400">배송비</div>
            <div>0 ¥</div>
          </div>
          <div className="flex justify-between py-3 text-[14px]">
            <div className="text-black-400">쿠폰 사용</div>
            <div>1,950 ¥</div>
          </div>
        </div>
        <div className="mt-[20px] text-[20px] font-bold flex justify-between">
          <span className="text-primary">결제금액</span>
          <span>
            {items
              ?.reduce(
                (acc, cur) =>
                  ((cur.price * (100 - cur.sale)) / 100) * cur.count + acc,
                0,
              )
              .toLocaleString()}
            ¥
          </span>
        </div>
      </div>
      <div className="py-8 text-black-400 text-center text-[14px]">
        <p>이용약관 및 개인정보 제 3자 제공사항에 대해 </p>
        <p> 확인하였으며 결제에 동의합니다.</p>
      </div>
    </div>
  )
}

export default TotalPrice
