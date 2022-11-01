import React from 'react'
import {
  oneulBestList,
  oneulLastestList,
  oneulFollowingList,
} from '../../dummy/main'
import HeartIcon from '../common/HeartIcon'

const TodaySurge = ({ category }) => {
  let list
  let title
  switch (category) {
    case '인기':
      list = oneulBestList
      title = '급상승'
      break
    case '최신':
      list = oneulLastestList
      title = '최신'
      break
    case '팔로잉':
      list = oneulFollowingList
      title = '팔로잉'
      break
    default:
      return
  }
  return (
    <div className="mt-10">
      <h4 className="pl-5 font-bold mb-5 text-xl">오늘의 {title}</h4>
      <div className="w-[calc(100vw-2px)] grid grid-cols-2">
        {list.map(
          (
            { imgUrl, brandurl, brand, price, discount, userId, liked },
            index,
          ) => (
            <div
              className="w-full [&:first-child]:border-t-2 [&:nth-child(2)]:border-t-2  [&:nth-child(2n)]:border-l-2 border-primary box-content overflow-hidden"
              key={index}
            >
              <div className="flex relative justify-center align-items-center">
                <div className="absolute text-white flex flex-col right-[12px] top-[16px] items-center">
                  <HeartIcon fill="#ffffff" size="22" />
                  <span className="text-sm">{liked}</span>
                </div>
                <div
                  className="w-[calc(100vw/2)] h-[calc((100vw)/2)] bg-cover after:content('') after:block bg-center"
                  style={{
                    backgroundImage: `url(${imgUrl})`,
                  }}
                ></div>
              </div>
              <div className=" flex px-5 py-3.5 border-y-2 border-primary text-primary text-sm">
                <div
                  className="w-[39px] h-[39px] bg-cover rounded-lg mr-3.5"
                  style={{
                    backgroundImage: `url(${brandurl})`,
                  }}
                ></div>
                <div className="flex flex-col text-sm font-medium">
                  <div className="text-black-800 truncate overflow-ellipsis">
                    {brand}
                  </div>
                  <div className="flex">
                    <span className=" text-primary">
                      {discount && discount}%
                    </span>
                    <span className="ml-[5px] text-black">
                      {price.toLocaleString()}¥
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ),
        )}
      </div>
    </div>
  )
}

export default TodaySurge
