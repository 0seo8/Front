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
    <div className="mt-[35px]">
      <h4 className="font-bold mb-5 pl-5">오늘의 뉴 스타일</h4>
      <div className="product__list">
        {list.map((item, index) => (
          <div key={index} className="item__list">
            <div
              className="item w-[50vw] h-[50vw]  max-w-[300px] max-h-[300px] bg-cover"
              style={{
                backgroundImage: `url(${item.imgUrl})`,
              }}
            ></div>
            <div className="flex gap-3 py-2 pl-2">
              <div
                className="w-[43px] h-[43px] bg-cover rounded-lg "
                style={{
                  backgroundImage: `url(${item.brnadurl})`,
                }}
              ></div>
              <div className="flex flex-col gap-1 text-sm font-medium">
                <div className="font-semibold text-primary">{item.brnad}</div>
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
