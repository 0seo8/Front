import React from 'react'
import { useNavigate } from 'react-router-dom'

const CardComplete = ({ reviewDataComplete, ratingStarReview }) => {
  const navigate = useNavigate()
  return (
    <ul className="px-5">
      {reviewDataComplete.map((review, index) => (
        <li className="py-5 border-b border-black-200" key={index}>
          <div className="flex">
            <div
              className="w-[4.125rem] h-[4.125rem] bg-no-repeat bg-[length:100%_auto] rounded overflow-hidden mr-3"
              style={{ backgroundImage: `url(${review.brand_img_url})` }}
            ></div>
            <div className="text-xs flex flex-col justify-center gap-2">
              <p className="font-bold">{review.brand}</p>
              <p>{review.product_name}</p>
              <p className="text-black-600">옵션: {review.product_option}</p>
            </div>
          </div>
          <div
            className="my-5 ratingStarReview"
            style={{
              width: ratingStarReview(review.star),
            }}
          ></div>
          <textarea className="text-xs w-full resize-none">{review.reply}</textarea>
          <ul className="flex gap-3 mt-5">
            <li>
              <button
                className="w-[3.125rem] bg-white-200 text-[#9C9C9C] rounded"
                onClick={() =>
                  navigate('/my/review/write', {
                    state: {
                      edit: true,
                      id: review.id,
                      brand:review.brand,
                      img_url: review.brand_img_url,
                      name: review.product_name,
                      option:review.product_option,
                      star:review.star,
                      reply:review.reply
                    },
                  })
                }
              >
                수정
              </button>
            </li>
            <li>
              <button className="w-[3.125rem] bg-white-200 text-[#9C9C9C] rounded">
                삭제
              </button>
            </li>
          </ul>
        </li>
      ))}
    </ul>
  )
}

export default CardComplete
