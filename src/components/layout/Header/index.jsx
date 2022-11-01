import React, { useState, useEffect } from 'react'
import HeaderLink from './HeaderLink'
import BackIcon from '../../common/BackIcon'
import { cls } from '../../../utils'
import Logo from './Logo'
import { useLocation, useNavigate } from 'react-router-dom'

function Header(props) {
  const location = useLocation()
  const currentPath = location.pathname
  const navigate = useNavigate()
  return (
    <div
      className={cls(
        `w-full max-w-[600px] h-16 flex fixed top-0 items-center bg-white z-40 box-border ${props.className} `,
        currentPath === '/' && 'border-b-2 border-primary',
      )}
    >
      <div className="w-full h-16 max-w-[600px] px-5 flex items-center">
        {currentPath === '/' ? (
          <Logo />
        ) : (
          !props.back && (
            <BackIcon
              size="24"
              fill={cls(props.fill ? '#000' : '#D86145')}
              onClick={() => navigate(-1)}
            />
          )
        )}
        <div className="flex-grow font-bold text-xl">{props.children}</div>
        <div className="mr-[1.75px]">
          <HeaderLink searchNone={props.searchNone} />
        </div>
      </div>
    </div>
  )
}

export default Header
