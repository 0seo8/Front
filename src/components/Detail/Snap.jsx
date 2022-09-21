import React from 'react'
import { detailProducts } from '../../dummy/detail'
import { ReactComponent as HeartIconOn } from '/public/assets/heart-white-on.svg'
const Snap = () => {
  return (
    <div className="pl-5">
      <h4 className="font-bold my-4">이 상품이 포함된 스냅</h4>
      <div className="flex gpa-4 overflow-x-scroll">
        {detailProducts.snap.map((item, idx) => (
          <div key={idx}>
            <div
              className="new-style w-[194px] h-[224px] bg-cover relative"
              style={{
                backgroundImage: `url(${item.profile})`,
              }}
            >
              <div className="absolute right-2 bottom-2 flex flex-col justify-center items-center">
                <HeartIconOn width="22px" height="22px" />
                <span className="text-white text-[14px]">{item.liked}</span>
              </div>
            </div>
            <div className="w-[225px] flex  items-center text-black-800 mt-4">
              <span>@ {item.userId}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Snap
