import React from 'react'
import Header from '../layout/Header'
import Card from './Card'
import Total from './Total'
import CartBtn from './CartBtn'
import { cartItems } from '../../dummy/cart'

const CartComp = () => {
  return (
    <>
      <div className="pb-[10px]">
        <Header />
        <div className="pt-[54px] ">
          <div className="flex justify-between px-5 my-[14px]">
            <div className="text-black-400 text-xs">
              전체 {cartItems.length}개
            </div>
            <div className="text-point text-xs">선택 삭제</div>
          </div>
          {cartItems.map((item, idx) => (
            <Card item={item} key={idx} />
          ))}
        </div>
        <Total />
      </div>
      <CartBtn />
    </>
  )
}

export default CartComp
