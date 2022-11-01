import React, { useState } from 'react'
import { cls } from '../../utils'

const TabList = ({ tablist, select, onClickHandler }) => {
  return (
    <>
      <ul className="flex justify-center items-center text-center">
        {tablist.map((item, idx) => (
          <li
            key={idx}
            className={cls(
              'text-sm w-1/2 bg-point p-3.5 cursor-pointer',
              select === item
                ? 'bg-point text-white font-bold'
                : 'bg-white-200 text-black-200 font-normal',
            )}
            onClick={() => onClickHandler(idx)}
          >
            <h3>{item}</h3>
          </li>
        ))}
      </ul>
    </>
  )
}

export default TabList
