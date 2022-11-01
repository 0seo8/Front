import React from 'react'
import { detailProducts } from '../../../dummy/detail'
import { useParams } from 'react-router-dom'
import { useGetProductQuery } from '../../../store/api/productApiSlice'
import { useSelector, useDispatch } from 'react-redux'

const ProductCard = () => {
  const params = useParams()
  const { data: list, isError, isLoading } = useGetProductQuery(params.id)
  const { brand, thumbnail, productName, sale, price, liked, productId } = list
  const productOption = useSelector((state) => state.product)
  return (
    <div className="w-full pt-10 pb-2">
      <div key={productId} className=" flex tems-center justify-between  px-10">
        <div
          className="new-style w-[119px] h-[119px] bg-cover rounded-full overflow-hidden"
          style={{
            backgroundImage: `url(${thumbnail})`,
          }}
        ></div>
        <div className="px-2 flex flex-col justify-center gap-1">
          <h4 className="font-bold text-sm">{brand}</h4>
          <p className="text-xs text-black-800 truncate w-[142px]">
            {productName}
          </p>
          <div className="text-sm text-black-600 font-medium">
            옵션: {productOption.selectedOption} / 수량:{productOption.count}
          </div>
          <div>
            <span className="text-sm text-black-600 font-medium">
              {(
                parseInt((price * (100 - sale)) / 100) * productOption.count
              ).toLocaleString()}{' '}
              ¥
            </span>
          </div>
        </div>
      </div>
      <div className="text-center py-6 text-sm text-black-800">
        장바구니에 상품을 담았습니다.
      </div>
    </div>
  )
}

export default ProductCard
