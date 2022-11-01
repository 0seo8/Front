import React, { useEffect, useCallback } from 'react'

const useOutSideHook = (ref, cb) => {
  const listener = useCallback((event) => {
    if (
      ref.current &&
      !ref.current?.contains(event.target) &&
      event.currentTarget?.innerText !== '답변상세보기'
    ) {
      cb() //setMOALFALG GALSE;
    } else {
      return
    }
  }, [])

  useEffect(() => {
    document.addEventListener('click', listener)
    return () => {
      document.removeEventListener('click', listener)
    }
  }, [ref, cb])
}

export default useOutSideHook
