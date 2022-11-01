import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ReactComponent as BackPoint } from '/public/assets/back-small-point.svg'
const Header = () => {

  const navigate = useNavigate()
  return (
    <div>
      <div
        className="relative flex items-center justify-center overflow-hidden bg-white max-w-[37.5rem] px-[1.75rem] h-[4.125rem]"
        onClick={() => navigate(-1)}
      >
        <BackPoint className="absolute left-[1.625rem]" />
        <h2 className="text-xl font-bold">리뷰</h2>
      </div>
    </div>
  )
}

export default Header
