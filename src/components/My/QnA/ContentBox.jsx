import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import BackIcon from '../../common/BackIcon'
import PublicContent from './PublicContent'
import PrivateContent from './PrivateContent'

const ContentBox = ({ item }) => {
  const navigate = useNavigate()
  const viewDetail = () => {
    if (item.privateYn === '비공개') {
      alert('비공개 글입니다.')
    }
    navigate(`/my/qna/${item?.id}`)
  }

  return (
    <>
      <div className="mb-5 px-5">
        <div className="flex items-center justify-between py-4 ">
          <p className="font-bold">{item?.createdDate}</p>
          <div className="flex items-center gap-1">
            <span className="text-xs" onClick={viewDetail}>
              답변상세보기
            </span>
            <BackIcon fill="#252525" size={14} className="rotate-180" />
          </div>
        </div>
        {item.privateYn === '비공개' ? (
          <PrivateContent item={item} />
        ) : (
          <PublicContent item={item} />
        )}
      </div>
      <div className="w-full h-[10px] bg-white-200 "></div>
    </>
  )
}

export default ContentBox
