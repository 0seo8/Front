import React from 'react'
import CartIcon from '../../common/CartIcon'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import SearchIcon from '../../common/SearchIcon'
// import { ReactComponent as Home } from '/public/assets/homeIcon.svg'
import HomeIcon from '../../common/HomeIcon'

const HeaderLink = ({ searchNone }) => {
  const location = useLocation()
  const currentPath = location.pathname
  const navigate = useNavigate()
  return (
    <div className="flex justify-center items-center gap-3">
      {!currentPath.includes('/my') && !currentPath.includes('/faq') && (
        <SearchIcon size="30" onClick={() => navigate('/search')} />
      )}
      {!currentPath.includes('/cart') &&
        !currentPath.includes('/oneul') &&
        !currentPath.includes('/edit-user-info') &&
        !currentPath.includes('/my/qna') &&
        !currentPath.includes('/faq') && <CartIcon />}
      {!currentPath.includes('/product') &&
        !currentPath.includes('/oneul') &&
        currentPath !== '/my' &&
        currentPath !== '/' &&
        !currentPath.includes('-list') &&
        !currentPath.includes('/like') &&
        !currentPath.includes('/order') &&
        !currentPath.includes('/recent-view') && (
          <div className="pl-2">
            <HomeIcon
              size="24"
              fill={
                currentPath.includes('/edit-user-info') ? '#000' : '#D86145'
              }
              onClick={() => navigate('/')}
            />
          </div>
        )}
    </div>
  )
}

export default HeaderLink
