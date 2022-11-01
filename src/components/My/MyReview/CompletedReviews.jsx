import React from 'react'
import CardComplete from './CardComplete'
const CompletedReviews = ({ reviewDataComplete, ratingStarReview }) => {
  return (
    <CardComplete reviewDataComplete={reviewDataComplete} ratingStarReview={ratingStarReview}/>
  )
}

export default CompletedReviews

