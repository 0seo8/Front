import React from 'react'
import MyCardHeader from '../../MyCardHeader'

const RefundListCard = ({ item }) => {
  return (
    <>
      <div className="px-5 mt-4">
        <MyCardHeader
          createdAt={item.completionDate}
          requests={item.requests}
          navigateId={item.id}
        />
        <div className="py-3 text-xs">
          <h3 className="font-bold">{item.product.product}</h3>
          <h4>
            <span className="text-primary font-bold mr-2">
              {item.requests + item.requestsState}
            </span>
            <span>접수일: {item.createdDate}</span>
          </h4>
        </div>
      </div>
      <div className="w-full h-[10px] bg-white-200 mt-4"></div>
    </>
  )
}

export default RefundListCard
