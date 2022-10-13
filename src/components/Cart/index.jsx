import React, { useState, useEffect } from 'react'
import Header from '../layout/Header'
import CartItem from './CartItem'
import Total from './Total'
import CartBtn from './CartBtn'
// import { useGetCartItemsQuery } from '../../store/api/cartApiSlice'
import ErrorCom from '../common/ErrorCom'
import Loading from '../layout/Loading'
import { useNavigate } from 'react-router-dom'
import { cartItems } from '../../dummy/cart'

const Cart = () => {
  // const {
  //   data: cartItems,
  //   isLoading,
  //   isError,
  //   isSuccess,
  // } = useGetCartItemsQuery()
  const navigate = useNavigate()
  const [checkedItems, setCheckedItems] = useState(cartItems)
  // useEffect(() => {
  //   setCheckedItems(cartItems)
  // }, [isSuccess])

  const onCheckedHandler = (item) => {
    checkedItems.includes(item)
      ? setCheckedItems(checkedItems.filter((product) => product !== item))
      : setCheckedItems(checkedItems.concat(item))
  }

  return (
    <>
      {/* {isLoading ? (
        <Loading />
      ) : isError ? (
        <ErrorCom />
      ) : (
        cartItems && (
          <div className="pb-[80px]">
            <Header>
              <div className="text-center ml-[27px]">장바구니</div>
            </Header>
            <div className="pt-[54px] ">
              <div className="flex justify-between px-5 my-[14px]">
                <div className="text-black-400 text-xs">
                  전체 {cartItems.length}개
                </div>
                <div className="text-point text-xs">선택 삭제</div>
              </div>
              {cartItems.length === 0 && (
                <div className="px-5">
                  <h2 className=" mt-[150px] text-[20px] font-bold ml-2 pl-6 text-center">
                    장바구니에 상품이 없습니다.
                  </h2>
                  <div
                    onClick={() => navigate('/')}
                    className="mt-[50px] flex items-center justify-center h-[44px] w-full rounded bg-primary text-white text-sm"
                  >
                    쇼핑하러가기
                  </div>
                </div>
              )}
              {cartItems.map((item) => (
                <CartItem
                  item={item}
                  key={item.id}
                  onCheckedHandler={() => onCheckedHandler(item)}
                />
              ))}
            </div>
            {cartItems.length !== 0 && (
              <>
                <Total items={checkedItems} />
                <CartBtn items={checkedItems} />
              </>
            )}
          </div>
        )
      )} */}
      <>
        <div className="pb-[80px]">
          <Header>
            <div className="text-center ml-[27px]">장바구니</div>
          </Header>
          <div className="pt-[54px] ">
            <div className="flex justify-between px-5 my-[14px]">
              <div className="text-black-400 text-xs">
                전체 {cartItems.length}개
              </div>
              <div className="text-point text-xs">선택 삭제</div>
            </div>
            {cartItems.length === 0 && (
              <div className="px-5">
                <h2 className=" mt-[150px] text-[20px] font-bold ml-2 pl-6 text-center">
                  장바구니에 상품이 없습니다.
                </h2>
                <div
                  onClick={() => navigate('/')}
                  className="mt-[50px] flex items-center justify-center h-[44px] w-full rounded bg-primary text-white text-sm"
                >
                  쇼핑하러가기
                </div>
              </div>
            )}
            {cartItems.map((item) => (
              <CartItem
                item={item}
                key={item.id}
                onCheckedHandler={() => onCheckedHandler(item)}
              />
            ))}
          </div>
          {cartItems.length !== 0 && (
            <>
              <Total items={checkedItems} />
              <CartBtn items={checkedItems} />
            </>
          )}
        </div>
      </>
    </>
  )
}

export default Cart
