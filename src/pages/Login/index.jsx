import React from 'react'
import GoBack from '../../components/common/GoBack'
import { Outlet } from 'react-router-dom'

const index = () => {
  return (
    <>
      <GoBack />
      <div className="pt-[64px]">
        <Outlet />
      </div>
    </>
  )
}

export default index
