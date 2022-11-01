import React, { useState } from 'react'
import { cls } from '../../utils'
import TodayLank from './TodayLank'
import TodaySurge from './TodaySurge'
const list = ['인기', '최신', '팔로잉']

const Category = () => {
  const [select, setSelect] = useState(list[0])
  const changeCategory = (item) => {
    setSelect(item)
  }
  return (
    <>
      <div className="bg-primary pl-5 ">
        <ul className="flex gap-3 py-3 text-xl">
          {list.map((item, index) => (
            <li
              key={index}
              onClick={() => changeCategory(item)}
              className={cls(
                'leading-2',
                select === item
                  ? 'text-white font-bold border-b-2 border-white'
                  : 'text-white-200 font-normal',
              )}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      {select === '인기' && <TodayLank category={select} />}
      <TodaySurge category={select} />
    </>
  )
}

export default Category
