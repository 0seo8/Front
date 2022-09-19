import React from 'react'
import { cls } from '../../utils'

const Button = ({ classprop, children, loginHandler, disabled }) => {
  return (
    <div
      onClick={!disabled ? loginHandler : null}
      className={cls(
        'font-bold rounded text-xs cursor-pointer  text-center h-[44px] flex items-center justify-center text-center',
        classprop && `${classprop}`,
        disabled && 'bg-sub-primary cursor-default',
      )}
    >
      {children}
    </div>
  )
}

export default Button
