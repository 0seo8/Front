import React from 'react'
import Card from './Card'

const PrivateContent = ({ item }) => {
  return (
    <>
      <div className="flex flex-col gap-3 mb-4">
        <div className="text-primary font-bold">{item?.answerYn}</div>
        <div className="flex items-center gap-2">
          <div className="text-sm font-bold">{item?.type}</div>
          <div className="flex gap-1">
            <img
              width="15"
              src="https://img.29cm.co.kr/next29cm/product/qna_lock.png"
              alt="lockIcon"
            />
            <span className="text-xs">비공개 글입니다.</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default PrivateContent
