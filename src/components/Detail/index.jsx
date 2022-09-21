import React from 'react'
import MainSlide from './MainSlide'
import Explanation from './Explanation'
import Brand from './Brand'
import DetailDesc from './DetailDesc'
import Relation from './Magazine'
import Snap from './Snap'
import Similiar from './Similiar'
import Another from './Another'
import Review from './Review'
import Inquiry from './Inquiry'
import ProductCode from './ProductCode'
import DeliveryNotice from './DeliveryNotice'
import ExchangeRefund from './ExchangeRefund'
import ProductInfo from './ProductInfo'
import SellerInfo from './SellerInfo'

const Detail = () => {
  return (
    <>
      <div className="flex flex-col items-start w-full">
        <MainSlide />
        <Explanation />
        <Brand />
        <DetailDesc />
      </div>
      <div className="w-full h-[10px] bg-white-200 my-8"></div>
      <Relation />
      <div className="w-full h-[10px] bg-white-200 my-8"></div>
      <Snap />
      <div className="w-full h-[10px] bg-white-200 my-8"></div>
      <Similiar />
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
      <ProductInfo />
      <SellerInfo />
    </>
  )
}

export default Detail
