import React from 'react'
import { detailProducts } from '../../dummy/detail'
import { ReactComponent as HeartIcon } from '/public/assets/heart.svg'
import { ReactComponent as HeartIconOn } from '/public/assets/heart-on.svg'

const Similiar = () => {
  return (
    <div className="pl-5">
      <h4 className="font-bold my-4">비슷한 상품</h4>
      <div className="flex gap-5 overflow-x-scroll">
        {detailProducts.similiar.map((item, idx) => (
          <div key={idx}>
            <div
              className="w-[130px] h-[131px] bg-cover"
              style={{
                backgroundImage: `url(${item.imgurl})`,
              }}
            ></div>
            <div className="flex justify-between items-center mt-1 px-2">
              <span className="text-sm font-bold">{item.brnad}</span>
              {item.liked ? (
                <HeartIconOn width="15" height="15" />
              ) : (
                <HeartIcon width="15" height="15" />
              )}
            </div>
            <div className="text-[10px] text-black-800 truncate w-[125px] px-2 mt-2">
              {item.name}
            </div>
            <div className="px-2 flex justify-between items-center border-b border-primary pb-2">
              <span className="text-primary text-sm">{item.discount} %</span>
              <span className="text-sm">{item.price} ¥</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Similiar
