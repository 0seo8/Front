import React from 'react'
import { useEffect } from 'react'
const TabList = ({
  cls,
  tab,
  setTab,
  reviewCount,
  setReviewCount,
  reviewCompleteCount,
  setReviewCompleteCount,
  reviewData,
  reviewDataComplete,
  reviewAddChk,
}) => {
  useEffect(() => {
    setReviewCount(reviewData.length)
    setReviewCompleteCount(reviewDataComplete.length)
  }, [reviewData, reviewDataComplete])
  return (
    <>
      {!reviewAddChk && (
        <ul className="flex justify-center items-center text-center mt-[38px]">
          <li
            className={cls(
              'text-sm w-1/2 p-3.5 cursor-pointer',
              tab === 0
                ? 'bg-point text-white font-bold'
                : 'bg-white-200 text-black-200 font-normal',
            )}
            onClick={() => {
              setTab(0)
            }}
          >
            <h3>작성 가능한 리뷰 ({reviewCount})</h3>
          </li>
          <li
            className={cls(
              'text-sm grow p-3.5 cursor-pointer',
              tab === 1
                ? 'bg-point text-white font-bold'
                : 'bg-white-200 text-black-200 font-normal',
            )}
            onClick={() => {
              setTab(1)
            }}
          >
            <h3>작성한 리뷰 ({reviewCompleteCount})</h3>
          </li>
        </ul>
      )}
    </>
  )
}

export default TabList
