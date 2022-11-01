import React, { useState, useEffect } from 'react'
import Header from '../layout/Header'
import Main from './Main'
import GoTop from '../common/GoTop'

const Magazine = () => {
  return (
    <>
      <Header />
      <div className="pt-[64px] pb-[66px]">
        <Main />
      </div>
      <GoTop height="1000" />
    </>
  )
}

export default Magazine
