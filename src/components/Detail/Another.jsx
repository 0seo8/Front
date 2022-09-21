import React from 'react'
import { detailProducts } from '../../dummy/detail'
import { ReactComponent as HeartIcon } from '/public/assets/heart.svg'
import { ReactComponent as HeartIconOn } from '/public/assets/heart-on.svg'

const Another = () => {
  return (
    <div className="pl-5">
      <h4 className="font-bold my-4">비슷한 상품</h4>
      <div className="flex gap-5 overflow-x-scroll">
        {detailProducts.another.map((item, idx) => (
          <div>
            <div
              className="new-style w-[142px] h-[142px] bg-cover rounded-full overflow-hidden border-primary border"
              style={{
                backgroundImage: `url(${item.imgurl})`,
              }}
            ></div>
            <p className="px-2 mt-3 text-[10px] text-black-800 truncate w-[142px]">
              {item.name}
            </p>
            <div className="px-2 flex justify-between items-center  pb-2">
              <div>
                <span className="text-primary text-sm mr-3">
                  {item.discount} %
                </span>
                <span className="text-sm">{item.price} ¥</span>
              </div>
              {item.liked ? (
                <HeartIconOn width="15" height="15" />
              ) : (
                <HeartIcon width="15" height="15" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Another
