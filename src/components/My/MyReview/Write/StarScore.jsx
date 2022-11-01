import React, { useState, useMemo } from 'react'

const StarScore = ({ userValue, setUserValue, edit }) => {
  const [leftValue, setLeftValue] = useState(0)
  const [rightValue, setRightValue] = useState(edit ? edit.star : 0)
  const onRightChange = (e) => {
    const input = e.currentTarget
    const value = parseInt(input.value)
    setUserValue({
      ...userValue,
      star: value / 2,
    })
    setRightValue(value > leftValue + 1 ? value : leftValue + 1)
  }
  const stars = useMemo(() => {
    const stars = [] 
    for (let i = 1; i <= 5; i += 1) {
      const ratingIndexRight = i * 2
      const ratingIndexLeft = ratingIndexRight - 1
      const leftFill =
        ratingIndexLeft > leftValue && ratingIndexLeft <= rightValue
      const rightFill =
        ratingIndexRight > leftValue && ratingIndexRight <= rightValue
      const leftClassName = leftFill ? 'active' : ''
      const rightClassName = rightFill ? 'active' : ''
      const fullClassName = leftFill && rightFill ? 'active' : ''
      stars.push(
        <svg
          key={i}
          version="1.1"
          width="20px"
          height="20px"
          className="bh-star"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 24 24"
        >
          <polygon
            className={`full ${fullClassName}`}
            points="18.8,22 12,18.6 5.2,22 6.5,14.8 1,9.7 8.6,8.6 11.9,2 15.4,8.6 23,9.6 17.5,14.7"
          />
          <polyline
            className={`left-half ${leftClassName}`}
            points="12,18.6 5.2,22 6.5,14.8 1,9.7 8.6,8.6 11.9,2"
          />
          <polyline
            className={`right-half ${rightClassName}`}
            points="12,18.6 18.8,22 17.5,14.7 23,9.6 15.4,8.6 11.9,2 "
            id="svg_2"
            stroke="null"
          />
        </svg>,
      )
    }
    return stars
  }, [leftValue, rightValue])
  return (
    <>
      <div className="rating-component">
        <div className="bh-stars flex">{stars}</div>
        <input
          value={rightValue}
          className="right-range"
          type="range"
          min="0"
          max="10"
          step="1"
          onChange={onRightChange}
        />
        {/* 화면에 점수띄우기
        {rightValue / 2} */}
      </div>
    </>
  )
}
export default StarScore
