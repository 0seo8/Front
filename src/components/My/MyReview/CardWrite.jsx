import React from 'react'
import { useNavigate } from 'react-router-dom'
const CardWrite = ({ reviewData, reviewAddChk }) => {
  const navigate = useNavigate()
  const goToWrite = () => {
    navigate('/my/review/write')
  }
 
  return (
    <>
      {reviewAddChk ? (
        <div>작성 가능한 리뷰가 없습니다.</div>
      ) : (
        <ul className="px-5">
          {reviewData.map((review, index) => (
            <li
              className="flex items-center py-5 border-b border-black-200"
              key={index}
            >
              <div
                className="w-[4.125rem] h-[4.125rem] bg-no-repeat bg-[length:100%_auto] rounded overflow-hidden mr-3"
                style={{ backgroundImage: `url(${review.brand_img_url})` }}
              ></div>
              <ul className="grow">
                <li className="text-xs flex flex-col justify-center gap-2">
                  <p className="font-bold">{review.brand}</p>
                  <p>{review.product_name}</p>
                  <p className="text-black-600">
                    옵션: {review.product_option}
                  </p>
                </li>
              </ul>
              <button
                onClick={goToWrite}
                className="bg-point text-white w-[5.188rem] rounded p-0.5"
              >
                리뷰 작성
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  )
}

export default CardWrite
