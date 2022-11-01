import React from 'react'
import Another from './Another'
import Review from './Review'
import Snap from './Snap'
import Inquiry from './Inquiry'
import ProductCode from './ProductCode'
import DeliveryNotice from './DeliveryNotice'
import ExchangeRefund from './ExchangeRefund'
import SellerInfo from './SellerInfo'
import Similiar from './Similiar'

const SubContent = ({ list }) => {
  return (
    <>
      <Snap />
      <div className="w-full h-[10px] bg-white-200 my-8"></div>
      <Similiar tag={list.tags} />
      <div className="w-full h-[10px] bg-white-200 my-8"></div>
      <Another />
      <div className="w-full h-[10px] bg-white-200 my-8"></div>
      <Review />
      <div className="w-full h-[10px] bg-white-200 my-8"></div>
      <Inquiry />
      <div className="w-full h-[10px] bg-white-200 my-8"></div>
      <ProductCode />
      <DeliveryNotice />
      <ExchangeRefund />
      <SellerInfo />
    </>
  )
}

export default SubContent
