import React from 'react'
import WritalbleReviews from './WritableReviews'
import CompletedReviews from './CompletedReviews'
const TabContent = ({
  tab,
  reviewData,
  reviewDataComplete,
  ratingStarReview,
  reviewAddChk,
  setReviewAddChk
}) => {
  return (
    <div className='pb-10'>
      {tab === 0 ? (
        <WritalbleReviews reviewData={reviewData} reviewAddChk={reviewAddChk} setReviewAddChk={setReviewAddChk} />
      ) : (
        <CompletedReviews
          reviewDataComplete={reviewDataComplete}
          ratingStarReview={ratingStarReview}
        />
      )}
    </div>
  )
}

export default TabContent