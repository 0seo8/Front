import React from 'react'
import { useNavigate } from 'react-router-dom'
import { cls } from '../../utils'

const CartBtn = ({ items }) => {
  const navigate = useNavigate()
  const OrderToHandler = () => {
    navigate(`/order`, { state: items })
  }

  return (
    <div className="hover:cursor-pointer fixed bottom-0 left-0 right-0 z-50 ">
      <div
        className={cls(
          'h-[78px] gap-4 w-full flex  justify-center items-center text-white-200 bg-point pb-6 text-[20px]',
        )}
        onClick={OrderToHandler}
      >
        <span className="px-1">
          총 {items?.reduce((acc, cur) => cur.count + acc, 0)}개
        </span>
        <div className="w-[1px] h-[18px] bg-white"></div>
        <span className="px-1">
          {items
            ?.reduce(
              (acc, cur) =>
                parseInt((cur.price * (100 - cur.sale)) / 100) * cur.count +
                acc,
              0,
            )
            .toLocaleString()}
          ¥ 결제하기
        </span>
      </div>
    </div>
  )
}

export default CartBtn
