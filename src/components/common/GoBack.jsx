import React from 'react'
import BackIcon from './BackIcon'
import { cls } from '../../utils'

import { useNavigate } from 'react-router-dom'
const GoBack = ({ className }) => {
  const navigate = useNavigate()
  return (
    <div
      className={cls(
        'z-50 h-[64px] pl-3 fixed overflow-hidden bg-white w-full flex items-center',
        className,
      )}
      onClick={() => navigate(-1)}
    >
      <BackIcon size="24" />
    </div>
  )
}

export default GoBack
