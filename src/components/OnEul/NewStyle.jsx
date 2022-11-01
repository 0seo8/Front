import React from 'react'
import './index.css'
import {
  oneulBestList,
  oneulLastestList,
  oneulFollowingList,
} from '../../dummy/main'
const NewStyle = ({ category }) => {
  let list
  switch (category) {
    case '인기':
      list = oneulBestList
      break
    case '최신':
      list = oneulLastestList
      break
    case '팔로잉':
      list = oneulFollowingList
      break
    default:
      return
  }
  return (
    <div className="my-[35px]">
      <h4 className="font-bold mb-5 pl-5">오늘의 뉴 스타일</h4>
      <div className="w-full grid grid-cols-2 border-t-2 border-primary overflow-hidden">
        {list.map((item, index) => (
          <div
            key={index}
            className="w-full [&:nth-child(2n)]:border-l-2 border-primary box-content"
          >
            <div className="flex justify-center align-items-center">
              <div className="w-full bg-cover overflow-hidden relative justify-center after:content('') after:block after:pb-[100%]">
                <img src={item.imgUrl} alt={item.imgUrl} className="absolute" />
              </div>
            </div>
            <div className="flex gap-3 py-2 pl-2 border-y-2 border-primary">
              <div
                className="w-[43px] h-[43px] bg-cover rounded-lg "
                style={{
                  backgroundImage: `url(${item.brandurl})`,
                }}
              ></div>
              <div className="flex flex-col gap-1 text-sm font-medium">
                <div className="font-semibold text-primary">{item.brand}</div>
                <div className="flex gap-2">
                  <span className="font-bold text-primary">
                    {item.discount && item.discount}%
                  </span>
                  <span className="font-bold">{item.price}¥</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default NewStyle
