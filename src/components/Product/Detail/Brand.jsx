import React from 'react'
import BackIcon from '../../common/BackIcon'
import HeartIcon from '../../common/HeartIcon'
const Brand = ({ list }) => {
  const { brandImg, brand, brandKo, liked } = list
  return (
    <div className="w-full px-5 mt-2 py-[36px]">
      <div className="flex w-full border border-primary">
        <div className="flex items-center justify-center px-3 py-4 border-primary border-r">
          <img src={brandImg} width="58px" />
        </div>
        <div className="flex-grow py-5 px-4">
          <div className="relative flex items-center w-full justify-between">
            <div className="w-full flex items-center">
              <span className="text-color-800 text-sm font-bold">{brand}</span>
              <BackIcon
                className="rotate-180 ml-1"
                size="14"
                fill="var(--primary)"
              />
            </div>
            <HeartIcon
              size="22px"
              off={liked}
              fill="var(--primary)"
              className="absolute right-5 top-[10px]"
            />
          </div>
          <h2 className="text-sm mt-2 font-bold">{brandKo}</h2>
        </div>
      </div>
    </div>
  )
}

export default Brand
