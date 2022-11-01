import React from 'react'

const InfoTopContent = () => {
  //임시 더미데티어

  return (
    <div className="py-5 border-b border-black-200">
      <h3 className="text-lg font-bold py-4">주문상세정보</h3>
      <div className="flex text-[14px] mb-[18px]">
        <div
          className="flex-shrink-0 w-[100px] h-[100px] bg-cover overflow-hidden rounded-lg"
          style={{
            backgroundImage: `url('https://aroundann.jp/web/product/medium/202205/4747bf78bdcae78e063820faed44af73.jpg')`,
          }}
        ></div>
        <div className="w-[calc(100vw-100px-19px-40px)] flex flex-col grow-1 text-xs ml-[19px] gap-1.5">
          <div className="font-bold text-sm">아쎄이</div>
          <div className="text-xs truncate overflow-ellipsis">
            UNIVERSE TUBETOP
          </div>
          <div className="text-xs font-medium">3000¥</div>
          <div className="flex justify-between">
            <div className="text-primary font-bold text-sm">2개</div>
            <div className="font-bold text-sm">결제완료</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoTopContent
