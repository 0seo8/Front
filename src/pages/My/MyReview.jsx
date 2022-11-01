import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/layout/Header'
const MyReview = () => {
  return (
    <>
      <Header fill="#000">
        <div className="text-center ml-[22px]">리뷰</div>
      </Header>
      <div className="pt-[64px]">
        <Outlet />
      </div>
    </>
  )
}

export default MyReview
