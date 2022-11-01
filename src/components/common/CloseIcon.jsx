import React from 'react'

const CloseIcon = ({ fill = '#D86145', size = '24', className, onClick }) => {
  return (
    <div className={className} onClick={onClick}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.0454 12.0069L2 2.94544L2.94473 2L11.9896 11.0609L11.9897 11.0608L11.9927 11.0641L11.9931 11.0644L21.0424 2L21.9872 2.94545L12.9546 11.994L22 21.0554L21.0553 22.0008L12.0059 12.9364L2.95758 22.0008L2.01285 21.0554L11.0454 12.0069Z"
          fill={fill}
        />
      </svg>
    </div>
  )
}

export default CloseIcon
