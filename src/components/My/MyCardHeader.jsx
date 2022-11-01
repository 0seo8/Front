import React from 'react'
import { useNavigate } from 'react-router-dom'
import BackIcon from '../../components/common/BackIcon'

const MyCardHeader = ({ createdAt, requests, navigateId }) => {
  const navigate = useNavigate()
  return (
    <div>
      <div className="flex justify-between border-b border-black-200 pt-4">
        <div className="font-bold py-3">{createdAt}</div>
        <div
          className="text-sm flex gap-1 items-center"
          onClick={() => navigate(`${navigateId}`)}
        >
          {requests}상세보기
          <BackIcon size="16" fill="#000" className="rotate-180" />
        </div>
      </div>
    </div>
  )
}

export default MyCardHeader
