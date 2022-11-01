import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setGender } from '../../store/slices/userSlice'
import { cls } from '../../utils'

const GenderTab = () => {
  const userGender = useSelector((state) => state.user).gender
  const dispatch = useDispatch()
  const list = { women: 'WOMEN', men: 'MEN' }
  return (
    <ul className="flex w-full h-12 sticky top-0 z-10 box-border">
      {Object.entries(list).map(([k, v]) => (
        <li
          key={k}
          className={cls(
            'w-1/2 text-center text-xs font-bold uppercase px-5 py-3 block leading-normal box-border',
            userGender === k
              ? 'text-white bg-black'
              : 'text-black bg-white border-b border-black',
          )}
          onClick={() => {
            dispatch(setGender(k))
          }}
        >
          {v}
        </li>
      ))}
    </ul>
  )
}

export default GenderTab
