import React from 'react'
import Header from './Header'
import Content from './Content'
import {noticeList} from '../../dummy/notice'

const index = () => {
  const noticeData = noticeList
  return (
    <>
      <Header />
      <Content noticeData={noticeData} />
    </>
  )
}

export default index
