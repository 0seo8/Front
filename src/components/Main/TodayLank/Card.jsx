import React from 'react'
import HeartIcon from '../../common/HeartIcon'
import heartOff from '/public/assets/heart.svg'

export const Card = ({ data }) => {
  const { userId, profile, liked } = data
  return (
    <div className="w-full [&:nth-child(2n)]:border-l-2 border-primary box-content overflow-hidden">
      <div className="flex justify-center align-items-center">
        <div className="w-full bg-cover rounded-full overflow-hidden relative justify-center m-5 after:content('') after:block after:pb-[100%]">
          <img src={profile} alt={userId} className="absolute" />
        </div>
      </div>
      <div className="flex justify-between items-center px-5 py-3.5 border-y-2 border-primary text-black-600 text-sm">
        <div className="truncate">@ {userId}</div>
        <HeartIcon size="30" off={liked} fill={'#000'} />
      </div>
    </div>
  )
}
