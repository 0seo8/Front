import React from 'react'
import CardWrite from './CardWrite'
const WritableReviews = ({ reviewData, reviewAddChk, setReviewAddChk }) => {
  return (
    <CardWrite reviewData={reviewData} reviewAddChk={reviewAddChk} setReviewAddChk={setReviewAddChk} />
  )
}

export default WritableReviews
