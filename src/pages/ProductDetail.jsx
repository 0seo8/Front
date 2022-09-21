import React from 'react'
import Header from '../components/layout/Header'
import Detail from '../components/Detail'
import DetailBtn from '../components/Detail/DetailBtn'
const ProductDetail = () => {
  return (
    <div>
      <Header />
      <div className="pt-[54px]">
        <Detail />
      </div>
      <DetailBtn />
    </div>
  )
}

export default ProductDetail
