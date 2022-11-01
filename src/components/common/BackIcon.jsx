import React from 'react'

const BackIcon = ({ size, fill = '#D86145', className, onClick }) => {
  return (
    <svg
      onClick={onClick}
      className={className}
      width={size}
      height={size}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_201_3734)">
        <path
          d="M21.596 5.2295L20.0701 3.75L8.5415 14.9274L8.58114 14.9658L8.5415 15.0032L20.1416 26.25L21.6665 24.7705L11.5538 14.9658L21.596 5.2295Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_201_3734">
          <rect
            width="13.125"
            height="22.5"
            fill="white"
            transform="translate(8.5415 3.75)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

export default BackIcon
