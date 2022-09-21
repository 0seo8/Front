import React from 'react'
import { ReactComponent as HeartIconOn } from '/public/assets/heart-white.svg'
import { ReactComponent as HeartIcon } from '/public/assets/heart-on.svg'
import {
  TodayLanklist,
  bestLanklist,
  followingLanklist,
} from '../../dummy/main'
//더미 데이터

const TodayLank = ({ category }) => {
  let list
  switch (category) {
    case '인기':
      list = TodayLanklist
      break
    case '최신':
      list = bestLanklist
      break
    case '팔로잉':
      list = followingLanklist
      break
    default:
      return
  }

  return (
    <div className="mt-11 pl-5">
      <h4 className="font-bold mb-5">오늘의 랭크</h4>
      <div className="flex gap-4 overflow-x-scroll">
        {list.map((item, index) => (
          <div key={index}>
            <div
              className="new-style w-[225px] h-[260px] bg-cover relative rounded-md"
              style={{
                backgroundImage: `url(${item.url})`,
              }}
            >
              <div className="absolute right-2 bottom-2 flex flex-col justify-center items-center">
                <HeartIconOn width="22px" height="22px" />
                <span className="text-white text-[14px]">{item.liked}</span>
              </div>
            </div>
            <div className="w-[225px] flex justify-between items-center text-primary">
              <span>@ {item.userId}</span>
              <div className="flex py-1 gap-1">
                <HeartIcon width="22px" height="22px" />
                <span className="text-[14px]">{item.liked}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TodayLank
