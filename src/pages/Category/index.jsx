import React, { useState } from 'react'
import CategoryHeader from './CategoryHeader'
import { Outlet } from 'react-router-dom'

const Category = () => {
  const [focus, setFocus] = useState(false)
  const [animation, setAnimation] = useState('')
  return (
    <nav className="-mt-1.5">
      <CategoryHeader
        focus={focus}
        setFocus={setFocus}
        animation={animation}
        setAnimation={setAnimation}
      />
      <Outlet />
    </nav>
  )
}

export default Category
