import React from 'react'
import CloseIcon from '../../common/CloseIcon'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()
  const onClickHandler = () => {
    navigate('/')
  }
  return (
    <div className="w-full h-[66px] flex items-center justify-start">
      <CloseIcon fill="#000" onClick={onClickHandler} />
    </div>
  )
}

export default Header
