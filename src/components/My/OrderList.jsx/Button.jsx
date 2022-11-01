import React from 'react'

const Button = ({ children, onClick, className }) => {
  return (
    <div
      className={`cursor-pointer py-1 px-2.5 text-sm text-black-400 border border-black-400 rounded ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

export default Button
