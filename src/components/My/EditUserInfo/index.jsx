import React from 'react'
import UserInfo from './UserInfo'
import EditPassword from './EditPassword'
import EditEmail from './EditEmail'
import EditAddress from './EditAddress'

const index = () => {
  return (
    <div className="mx-5">
      <UserInfo />
      <EditPassword />
      <EditEmail />
      <EditAddress />
    </div>
  )
}

export default index
