import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ReactComponent as PenIcon } from '/public/assets/pen_icon.svg'
import { useGetUserInfoQuery } from '../../../store/api/userApiSlice'

const Profile = () => {
  const navigate = useNavigate()
  const { data } = useGetUserInfoQuery()
  return (
    <div className="flex items-center px-12">
      <span className="font-bold text-xl mr-2.5">{data?.username}</span>
      <PenIcon className="w-4" onClick={() => navigate('edit-user-info')} />
    </div>
  )
}

export default Profile
