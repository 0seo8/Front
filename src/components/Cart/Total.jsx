import React from 'react'

const Total = ({ items }) => {
  return (
    <>
      <div className="border-t border-b border-black-200 px-5 mt-[38px] py-[20px]">
        <div className="flex justify-between mt-[18px]">
          <span className="text-black-400">주문 상품 수</span>
          <span>총 {items?.reduce((acc, cur) => cur.count + acc, 0)}개</span>
        </div>
        <div className="flex justify-between mt-[15px]">
          <span className="text-black-400">배송비</span>
          <span>0 ¥</span>
        </div>
        <div className="flex justify-between mt-[15px]">
          <span className="text-black-400">할인금액</span>
          <span>
            {items
              ?.reduce(
                (acc, cur) =>
                  parseInt((cur.price * cur.sale) / 100) * cur.count + acc,
                0,
              )
              .toLocaleString()}
            ¥
          </span>
        </div>
      </div>
      <div className="mt-[20px] text-[20px] font-bold flex justify-between px-5">
        <span className="text-primary">결제금액</span>
        <span>
          {items
            ?.reduce(
              (acc, cur) =>
                parseInt((cur.price * (100 - cur.sale)) / 100) * cur.count +
                acc,
              0,
            )
            .toLocaleString()}
          ¥
        </span>
      </div>
    </>
  )
}

export default Total
