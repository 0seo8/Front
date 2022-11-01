import React from 'react'
import OrderPage from '../../components/Order'
import Header from '../../components/layout/Header'

const Order = () => {
  return (
    <div>
      <Header className="border-b border-black-100">
        <div className="text-center ml-[26px]">결제</div>
      </Header>
      <div className="pt-[65px]">
        <OrderPage />
      </div>
    </div>
  )
}

export default Order
