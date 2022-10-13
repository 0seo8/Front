import React from 'react'
import { detailProducts } from '~/dummy/detail'
import { ratingStar } from '~/utils/star'
import { useParams } from 'react-router-dom'
import { useGetProductReviewsQuery } from '~/store/api/reviewApiSlice'
import Loading from '../../layout/Loading'

const Review = () => {
  // const params = useParams()
  // const {
  //   data: list,
  //   isError,
  //   isLoading,
  // } = useGetProductReviewsQuery(params.id)

  // if (isLoading) return <Loading />

  return (
    <>
      <div className="flex justify-between px-5 items-center">
        <h4 className="font-bold my-4">
          리뷰 <span>({detailProducts.review.count})</span>
        </h4>
        <span className="text-sm text-black-600 font-medium">더보기</span>
      </div>
      {detailProducts ? (
        <>
          <div className="pl-5 border-b pb-6 border-primary">
            <div className="flex gap-5 overflow-x-scroll">
              {detailProducts.review.reviews.map(
                ({ imgUrl, desc, star }, idx) => (
                  <React.Fragment key={desc[idx]}>
                    {imgUrl.map((item, index) => (
                      <div key={index}>
                        <div
                          className="w-[127px] h-[127px] bg-cover"
                          style={{
                            backgroundImage: `url(${item})`,
                          }}
                        ></div>
                      </div>
                    ))}
                  </React.Fragment>
                ),
              )}
            </div>
          </div>
          <div>
            {detailProducts.review.reviews.map((item, idx) => (
              <div className="px-5 pb-5 border-b border-black-400" key={idx}>
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
      ) : (
        <div className="px-5 text-sm text-black-600">
          <span>아직 작성된 리뷰가 없습니다.</span>
        </div>
      )}
    </>
  )
}

export default Review
