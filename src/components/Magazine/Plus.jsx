import React from 'react'
import { ReactComponent as PlusIcon } from '/public/assets/plus_icon.svg'
import { useNavigate } from 'react-router-dom'

const Plus = ({ id = 'detail', className }) => {
  const navigate = useNavigate()
  return (
    <PlusIcon
      className={className}
      onClick={() => navigate(`/product/${id}`)}
    />
  )
}

export default Plus
