import React from 'react'
import { useNavigate } from 'react-router-dom'
import { cls } from '../../utils'
import { ReactComponent as HeartIcon } from '/public/assets/heart-white.svg'
import { ReactComponent as HeartIconOn } from '/public/assets/heart-white-on.svg'
import { ReactComponent as LinkIcon } from '/public/assets/link.svg'

const NextBtn = () => {
  const navigate = useNavigate()
  const addCart = () => {
    //장바구니 api호출
    //장바구니 알럿 창 할지 이야기 나누기
    navigate('/cart')
  }
  const buyNow = () => {
    //구매 api
    //결제 페이지로 이동
  }

  const copyUrl = () => {
    const value = window.document.location.href
    navigator.clipboard.writeText(value).then(() => {
      alert('주소가 복사되었습니다')
    })
  }

  return (
    <div className="hover:cursor-pointer fixed bottom-0 left-0 right-0 z-50 ">
      <div
        className={cls(
          'h-[78px] gap-4 w-full flex flex-col justify-center items-center text-white-200 bg-primary pb-4',
        )}
      >
        <div className="flex justify-between w-full px-5 items-center">
          <div className="flex gap-3">
            <HeartIcon width="24" height="24" />
            <LinkIcon width="24" height="24" onClick={copyUrl} />
          </div>
          <div className="flex gap-3 items-center">
            <span className="px-1" onClick={addCart}>
              장바구니
            </span>
            <div className="w-[1px] h-[12px] bg-black-200"></div>
            <span className="px-1" onClick={buyNow}>
              구매하기
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NextBtn
