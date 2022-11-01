import React from 'react'
import { useNavigate } from 'react-router-dom'
import BackIcon from '../../common/BackIcon'
import Button from './Button'
import MyCardHeader from '../MyCardHeader'

const Card = ({ item }) => {
  const navigate = useNavigate()
  const {
    id,
    createdAt,
    modifiedAt,
    status,
    orderCount,
    orderPrice,
    size,
    productName,
    thumbnail,
    product,
  } = item
  return (
    <>
      <div className="px-5 mt-4">
        {
          <MyCardHeader
            createdAt={createdAt}
            requests={'주문'}
            navigateId={id}
          />
        }
        <div>
          <h3 className="text-primary font-bold py-3">{status}</h3>
          <div className="flex text-[14px] mb-[18px]">
            <div
              className="flex-shrink-0 w-[74px] h-[74px] bg-cover overflow-hidden rounded-lg"
              style={{
                backgroundImage: `url(${thumbnail})`,
              }}
            ></div>
            <div className="w-[calc(100vw-74px-12px-40px)] flex flex-col grow-1 text-xs ml-[12px]">
              <div className="font-bold ">{product.brand}</div>
              <div className="  truncate overflow-ellipsis">{productName}</div>
              <div className="text-black-800">
                옵션 : {size} / 수량 {orderCount}개
              </div>
              <div className="">{orderPrice * orderCount}¥</div>
            </div>
          </div>
          <div className="flex items-center justify-end gap-2">
            {status === '배송완료' && (
              <Button
                className="bg-point text-white"
                onClick={() => navigate('/my/review')}
              >
                리뷰쓰기
              </Button>
            )}
            {status === '결제 완료' && (
              <Button onClick={() => CancleOrder(id)}>결제취소</Button>
            )}
            <Button onClick={() => navigate('/my/qna/write')}>1:1문의</Button>
          </div>
        </div>
      </div>
      <div className="w-full h-[10px] bg-white-200 mt-4"></div>
    </>
  )
}

export default Card
