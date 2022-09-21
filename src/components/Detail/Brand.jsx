import React from 'react'
import { detailProducts } from '../../dummy/detail'
import { ReactComponent as GoBackIcon } from '/public/assets/back-on.svg'
import { ReactComponent as HeartIconOn } from '/public/assets/heart-on.svg'
import { ReactComponent as HeartIcon } from '/public/assets/heart.svg'

const Brand = () => {
  return (
    <div className="w-full px-5 ">
      <div className="flex w-full border border-primary">
        <div className="flex items-center justify-center px-3 py-4 border-primary border-r">
          <img src={detailProducts.brand_img_url} width="58px" />
        </div>
        <div className="flex-grow py-3">
          <div className="px-3 flex flex items-center w-full justify-between">
            <div className="w-full flex items-center">
              <span className="text-color-800 text-sm font-bold">
                {detailProducts.brand}
              </span>
              <GoBackIcon className="rotate-180 w-[14px] h-[22px] ml-1" />
            </div>
            <HeartIconOn width="22px" height="22px" />
          </div>
          <h2 className="pl-3 mt-2 font-bold">키르시</h2>
        </div>
      </div>
    </div>
  )
}

export default Brand
