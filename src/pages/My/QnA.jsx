import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/layout/Header'

const QnA = () => {
  return (
    <>
      <Header fill="#000">
        <div className="text-center">1:1 문의</div>
      </Header>
      <div className="pt-[65px]">
        <Outlet />
      </div>
    </>
  )
}

export default QnA
