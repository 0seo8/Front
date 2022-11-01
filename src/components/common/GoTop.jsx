import React, { useState, useEffect } from 'react'
import { cls } from '../../utils'
import BackIcon from './BackIcon'

const GoTop = ({ height }) => {
  const [showButton, setShowButton] = useState(false)

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    const handleShowButton = () => {
      if (window.scrollY > height) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    }

    window.addEventListener('scroll', handleShowButton)
    return () => {
      window.removeEventListener('scroll', handleShowButton)
    }
  }, [])
  return (
    <div
      className={cls(
        'flex items-center justify-center fixed  right-3 text-white bottom-[120px] z-10 w-[38px] h-[38px] rounded-full bg-point font-bold transition-opacity ease-in',
        showButton ? 'opacity-1' : 'opacity-0',
      )}
      onClick={scrollToTop}
    >
      <BackIcon className="rotate-90" size="20px" fill="#fff" />
    </div>
  )
}

export default GoTop
