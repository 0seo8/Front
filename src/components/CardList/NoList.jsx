import React from 'react'
import Logo from '../../components/common/Logo'

function NoList({ title }) {
  return (
    <div className="h-full flex flex-col justify-center items-center">
      <Logo fill="var(--black-200)" width="180" height="100" />
      <div className="text-sm text-black-600">{title}</div>
    </div>
  )
}

export default NoList
