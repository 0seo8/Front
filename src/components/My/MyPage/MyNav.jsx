import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'

const MyNav = () => {
  const [cookies, setCookie, removeCookie] = useCookies()
  const token = cookies.accessToken
  const navigate = useNavigate()
  const onClickHandler = (data) => {
    token ? navigate(`${data}`) : navigate('/login')
  }
  const goToOrderCheck = () => {
    token ? navigate('order-list') : navigate('/order-check')
  }
  const goToRefundList = () => {
    token ? navigate('refund-list') : navigate('/order-check')
  }
  return (
    <div className="relative font-medium mt-14 px-5 pt-11 before:content-[attr(before)] before:w-full before:h-2.5 before:bg-white-200 before:absolute before:left-0 before:top-0">
      <h2 className="text-sm text-black-200 mb-1.5">주문정보</h2>
      <ul className="flex flex-wrap">
        <li className="text-sm w-1/2 py-1 font-medium" onClick={goToOrderCheck}>
          주문/배송/픽업 조회
        </li>
        <li className="text-sm w-1/2 py-1 font-medium" onClick={goToRefundList}>
          취소/교환/환불 내역
        </li>
      </ul>
      <h2 className="text-sm text-black-200 mt-9 mb-1.5">고객센터</h2>
      <ul className="flex flex-wrap">
        <li
          className="text-sm w-1/2 py-1 font-medium"
          onClick={() => onClickHandler('qna')}
        >
          1:1 문의
        </li>
        <li className="text-sm w-1/2 py-1">
          <Link to="/faq" className="font-medium">
            FAQ
          </Link>
        </li>
        <li className="text-sm w-1/2 py-1">
          <Link to="/notice" className="font-medium">
            공지사항
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default MyNav
