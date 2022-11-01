import React from 'react'
import ErrorCom from '../components/common/ErrorCom'
import Header from '../components/layout/Header'

const NotFoundPage = () => {
  return (
    <div>
      <Header />
      <ErrorCom
        Title={'Oops!'}
        Contents={`요청한 페이지를 찾을 수 없습니다.`}
      />
    </div>
  )
}

export default NotFoundPage
