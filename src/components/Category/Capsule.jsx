import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setGender } from '../../store/slices/userSlice'
import { cls } from '../../utils'

function Capsule() {
  const userGender = useSelector((state) => state.user).gender
  const dispatch = useDispatch()

  return (
    <div className="fixed bottom-28 right-5">
      <div className="flex flex-col text-xs font-bold justify-center items-center rounded-md box-border overflow-hidden">
        <button
          value={'women'}
          onClick={() => {
            dispatch(setGender('women'))
          }}
          className={cls(
            'w-10 h-10 border-t border-x border-black rounded-t-md',
            userGender === 'women'
              ? 'bg-black text-white'
              : 'bg-white text-black-600',
          )}
        >
          우먼
        </button>
        <button
          value={'men'}
          onClick={() => {
            dispatch(setGender('men'))
          }}
          className={cls(
            'w-10 h-10 border-b border-x border-black rounded-b-md',
            userGender === 'men'
              ? 'bg-black text-white'
              : 'bg-white text-black-600',
          )}
        >
          맨
        </button>
      </div>
    </div>
  )
}

export default Capsule
