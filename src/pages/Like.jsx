import React from 'react'
import { Outlet } from 'react-router-dom'
import Category from '../components/Liked/Category'

const Like = () => {
  return (
    <div>
      <Category />
      <Outlet />
    </div>
  )
}

export default Like
