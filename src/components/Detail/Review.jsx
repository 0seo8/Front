import React from 'react'
import { detailProducts } from '../../dummy/detail'
import { ratingStar } from '../../utils/star'

const Review = () => {
  return (
    <>
      <div className="pl-5 border-b pb-6 border-primary">
        <h4 className="font-bold my-4">
          리뷰 <span>({detailProducts.review.count})</span>
        </h4>
        <div className="flex gap-5 overflow-x-scroll">
          {detailProducts.review.reviews.map(({ imgUrl, desc, star }, idx) => (
            <>
              {imgUrl.map((item) => (
                <div key={idx}>
                  <div
                    className="w-[127px] h-[127px] bg-cover"
                    style={{
                      backgroundImage: `url(${item})`,
                    }}
                  ></div>
                </div>
              ))}
            </>
          ))}
        </div>
      </div>
      <div>
        {detailProducts.review.reviews.map((item, idx) => (
          <div className="px-5 pb-5 border-b border-black-400">
            <div className="flex justify-between items-center text-xs text-black-600 py-5">
              <div>
                <div
                  className="ratingStar mr-2"
                  style={{
                    backgroundPositionY: ratingStar(item.star),
                  }}
                ></div>
                <span>{item.userId}</span>
              </div>
              <span>{item.date}</span>
            </div>
            <div className="flex items-center gap-5">
              <img width="38" height="38" src={item.imgUrl[0]} />
              <p className="text-xs ellipsis w-[257px]">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Review
