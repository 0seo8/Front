import Header from './Header'
import UserInfo from './UserInfo'
import Location from './Location'
import ProductShortCut from './ProductShortCut'
import ProductDetail from './ProductDetail'
import { useState } from 'react'
import { snapDetailList } from '../../dummy/relatedProduct'
import { cls } from '../../utils'
const SnapDetialSegment = () => {
  const list = snapDetailList
  const [active, setActive] = useState('')
  return (
    <div>
      <Header />
      <UserInfo />
      <div className="px-5 pb-8">
        <Location />
        <ProductShortCut setActive={setActive} cls={cls}/>
        <ProductDetail active={active} list={list} cls={cls}/>
      </div>
    </div>
  )
}

export default SnapDetialSegment
