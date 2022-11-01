import React from 'react'
import { useNavigate } from 'react-router-dom'
import SearchIcon from '../../components/common/SearchIcon'
import BackIcon from '../../components/common/BackIcon'
import CartIcon from '~/components/common/CartIcon'

const CategoryHeader = () => {
  const navigate = useNavigate()

  return (
    <div className="w-full flex fixed items-center overflow-hidden bg-white z-40">
      <div className="w-full h-16 max-w-[600px] px-5 flex items-center">
        <BackIcon size="24" className="w-7" onClick={() => navigate(-1)} />
        <div className="w-full items-center"></div>
        <div className="flex justify-center items-center gap-3">
          <SearchIcon size="30" onClick={() => navigate('/search')} />
          <CartIcon />
        </div>
      </div>
    </div>
  )
}

export default CategoryHeader
