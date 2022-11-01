import React from 'react'
import { useNavigate } from 'react-router-dom'
import HeartIcon from '../common/HeartIcon'
import { TodayLanklist as list } from '../../dummy/main'
//더미 데이터

const TodayLank = () => {
  const navigate = useNavigate()
  return (
    <div className="mt-10 pl-5">
      <h4 className="font-bold mb-5 text-xl">오늘의 랭크</h4>
      <div className="flex gap-[19px] overflow-x-scroll">
        {list.map(({ url, userId, liked }, index) => (
          <div key={index} onClick={() => navigate('/oneul/detail')}>
            <div
              className="new-style w-[225px] h-[260px] bg-cover relative"
              style={{
                backgroundImage: `url(${url})`,
              }}
            ></div>
            <div className="mt-4 w-[225px] flex justify-between items-center text-black-800">
              <span>@ {userId}</span>
              <div className="flex py-1 gap-1">
                <HeartIcon fill="#252525" size="22" />
                <span className="text-[14px] ml-[8px]">{liked}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TodayLank
