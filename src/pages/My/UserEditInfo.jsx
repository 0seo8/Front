import React from 'react'
import UserInfoPage from '~/components/My/EditUserInfo'
import Header from '../../components/layout/Header'

const UserEditInfo = () => {
  return (
    <>
      <Header fill="#000">
        <div className="text-center">내 정보 관리</div>
      </Header>
      <div className="pt-[65px]">
        <UserInfoPage />
      </div>
    </>
  )
}

export default UserEditInfo
