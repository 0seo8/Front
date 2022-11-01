import React from 'react'
import SearchIcon from '../common/SearchIcon'

const Header = () => {
  return (
    <div className="flex justify-between items-center pl-5 pr-5 h-16">
      <h2 className="text-xl font-bold">오늘</h2>
      <div>
        <SearchIcon className="w-7" />
      </div>
    </div>
  )
}

export default Header
