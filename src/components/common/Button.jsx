import React from 'react'
import { cls } from '../../utils'

const Button = ({ classprop, children, onClick, disabled }) => {
  return (
    <div
      onClick={!disabled ? onClick : null}
      className={cls(
        'font-bold rounded text-xs cursor-pointer h-[44px] flex items-center justify-center text-center',
        classprop && `${classprop}`,
        disabled && 'bg-sub-primary cursor-default',
      )}
    >
      {children}
    </div>
  )
}

export default Button
