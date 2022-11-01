import React from 'react'
import HeartIcon from '../../common/HeartIcon'
import {
  womanRecommended,
  manRecommended,
  lifeRecommended,
  koreaRecommended,
} from '../../../dummy/main'

const TodayRecommended = ({ category }) => {
  let list
  switch (category) {
    case '우먼':
      list = womanRecommended
      break
    case '맨':
      list = manRecommended
      break
    case '라이프':
      list = lifeRecommended
      break
    case '한국트렌드':
      list = koreaRecommended
      break
    default:
      return
  }
  return (
    <div>
      <h3 className="font-bold text-xl mb-5 pl-5">
        <strong className="text-primary">오늘</strong>의 추천브랜드
      </h3>
      {list.map(({ img1, desc, img2, img3, liked, brand }, idx) => (
        <div className="mt-[38px]" key={idx}>
          <div
            className="h-[226px] border-primary border-t-2 bg-cover"
            style={{
              backgroundImage: `url(${img1})`,
            }}
          ></div>
          <div className="grid grid-cols-2 grid-rows-2 border-y-2 border-b-2 border-primary">
            <div className="row-span-2 border-primary border-b-2 border-r-2 text-color-800 text-xl">
              <p className="text-[12px] p-4">{desc}</p>
            </div>
            <div
              className="border-b-2 border-primary bg-cover"
              style={{
                backgroundImage: `url(${img2})`,
              }}
            ></div>
            <div
              className="border-b-2 border-primary bg-cover"
              style={{
                backgroundImage: `url(${img3})`,
              }}
            ></div>
            <div className="col-span-2 pl-5 pr-5 pt-2 pb-2 flex justify-between items-center">
              <span className="text-sm font-bold">{brand}</span>
              <HeartIcon size="20px" off={liked} fill={'#000'} />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TodayRecommended
