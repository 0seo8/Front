import React from 'react'
import { useNavigate } from 'react-router-dom'
import { cls } from '../../utils'
const NextBtn = ({ next, inputValue, disabled, children, onClick }) => {
  const navigate = useNavigate()
  const ChangeRouter = () => {
    if (!disabled) return
    next === 'finish' && onClick()

    navigate(`/signup/${next}`, { state: inputValue })
  }
  return (
    <div
      className="hover:cursor-pointer fixed bottom-0 left-0 right-0 z-20"
      onClick={disabled && onClick ? onClick : ChangeRouter}
    >
      <div
        className={cls(
          'h-[83px] gap-4 w-full flex flex-col justify-center items-center text-white-200 ',
          !disabled ? 'bg-sub-primary' : 'bg-primary',
        )}
      >
        <p className="mb-6">{children}</p>
      </div>
    </div>
  )
}

export default NextBtn
