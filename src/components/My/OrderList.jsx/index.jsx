import React from 'react'
import Header from '../../layout/Header'
import NavBox from './NavBox'
import OrderList from './OrderList'
import Card from './Card'
import { delivery } from '../../../dummy/dummy/delivery'
import { useMemo } from 'react'

const index = () => {
  const result = useMemo(() =>
    delivery.reduce((acc, cur) => {
      if (cur.hasOwnProperty(cur.status)) {
        return {
          ...acc,
          [cur.status]: [...acc[cur.status], cur],
        }
      } else {
        return {
          ...acc,
          [cur.status]: [cur],
        }
      }
    }, {}),
  )

  return (
    <>
      <Header fill="#000">
        <div className="text-center">주문/배송/픽업 조회</div>
      </Header>
      <NavBox status={result} />
      {delivery.map((item) => (
        <Card item={item} status={result} key={item.id} />
      ))}
    </>
  )
}

export default index
