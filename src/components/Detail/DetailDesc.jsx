import React, { useState } from 'react'
import { cls } from '../../utils/index'
import { detailProducts } from '../../dummy/detail'
import { ReactComponent as GoBackIcon } from '/public/assets/back-on.svg'

const DetailDesc = () => {
  const [open, setOpen] = useState(false)
  const moreHnadler = () => {
    setOpen((prev) => !prev)
  }
  return (
    <div className="px-5">
      <div className={cls('overflow-hidden ', open ? '' : 'h-[700px]')}>
        <img src={detailProducts.desc_url} className="" />
      </div>
      <div
        onClick={moreHnadler}
        className="flex items-center justify-center gap-4 border border-primary "
      >
        <p className="text-black-600 py-4 font-medium">상세 상품정보 더보기</p>
        <GoBackIcon
          className={cls(
            'w-[14px] h-[14px]',
            open ? 'rotate-90 ' : '-rotate-90',
          )}
        />
      </div>
      <div className="grid grid-cols-5 border border-sub-primary w-full text-center text-[10px] leading-8 mt-8">
        <div className="border-r border-b border-primary bg-white-200">cm</div>
        <div className="border-r border-b border-primary bg-white-200">
          총장
        </div>
        <div className="border-r border-b border-primary bg-white-200 ">
          어깨너비
        </div>
        <div className="border-r border-b border-primary bg-white-200">
          가슴단면
        </div>
        <div className="border-b border-primary bg-white-200">소매길이</div>
        <div className="border-r border-primary bg-white-200">1size</div>
        <div className="border-r border-primary">66.5</div>
        <div className="border-r border-primary">60</div>
        <div className="border-r border-primary">68</div>
        <div>86</div>
      </div>
    </div>
  )
}

export default DetailDesc
