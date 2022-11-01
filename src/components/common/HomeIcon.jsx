import React from 'react'

const HomeIcon = ({ fill = '#D86145', size = '36', onClick }) => {
  return (
    <svg
      onClick={onClick}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.7832 10.8617L11.9799 3.43848L11.9781 3.44148L11.9763 3.43848L2.17285 10.8617L2.67985 11.5313L11.9781 4.49088L21.2762 11.5313L21.7832 10.8617Z"
        fill={fill}
      />
      <path
        d="M13.6006 15.7502V18.8702H10.4806V15.7502H13.6006ZM14.4406 14.9102H9.64062V19.7102H14.4406V14.9102Z"
        fill={fill}
      />
      <path d="M19.3597 20.7305H4.71973V21.5705H19.3597V20.7305Z" fill={fill} />
      <path d="M19.4103 12.0303H18.5703V19.7103H19.4103V12.0303Z" fill={fill} />
      <path d="M5.67008 12.0303H4.83008V19.7103H5.67008V12.0303Z" fill={fill} />
    </svg>
  )
}

export default HomeIcon
