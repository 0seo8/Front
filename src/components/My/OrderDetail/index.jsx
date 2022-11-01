import React from 'react'
import Header from '../../layout/Header'
import InfoTopContent from './InfoTopContent'
import PayMentInfo from './PayMentInfo'
import DeliveryInfo from './DeliveryInfo'

const index = () => {
  return (
    <>
      <Header>
        <div className="text-center">주문 상세 보기</div>
      </Header>
      <div className="pt-[64px] px-5">
        <InfoTopContent />
        <PayMentInfo />
        <DeliveryInfo />
      </div>
    </>
  )
}

export default index
