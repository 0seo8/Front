import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import CartIcon from '../../common/CartIcon'
import { ReactComponent as SetIcon } from '/public/assets/setting_icon.svg'
import { ReactComponent as BackOn } from '/public/assets/back-small.svg'

const Header = () => {
  const navigate = useNavigate()
  return (
    <div className="w-full flex fixed items-center overflow-hidden bg-white z-40">
      <div className="w-full h-16 max-w-[600px] px-5 flex items-center">
        <BackOn className="w-7" onClick={() => navigate(-1)} />
        <div className="w-full items-center"></div>
        <div className="flex justify-center">
          <CartIcon />
        </div>
      </div>
    </div>
  )
}

export default Header
