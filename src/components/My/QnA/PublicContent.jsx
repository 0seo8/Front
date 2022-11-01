import React from 'react'
import Card from './Card'

const PublicContent = ({ item }) => {
  return (
    <>
      <div className="flex flex-col gap-3 mb-4">
        <div className="text-primary font-bold">{item?.answerYn}</div>
        <div className="text-sm font-bold">{item?.type}</div>
        <div className="text-xs">{item?.title}</div>
      </div>
      {item?.product && (
        <div className="pt-4 border-t border-black-200 ">
          <Card item={item.product} />
        </div>
      )}
    </>
  )
}

export default PublicContent
