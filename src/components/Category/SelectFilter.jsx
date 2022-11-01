import React, { useState } from 'react'
import { cls } from '../../utils'

function SelectFilter() {
  const [active, setActive] = useState('인기순')
  const list = {
    likeLank: '인기순',
    reviewLank: '리뷰순',
    starLank: '별점순',
  }
  return (
    <div className="flex h-12 items-center px-5">
      {Object.entries(list).map(([k, v]) => (
        <div
          key={k}
          onClick={() => setActive(v)}
          className={cls(
            'mr-4 last:mr-0 text-xs border w-fit h-6 rounded-full px-3.5 box-border flex items-center justify-center delay-100 duration-200',
            active === v
              ? 'text-white bg-black border-black'
              : 'text-black-200 border-black-200',
          )}
        >
          <div>{v}</div>
        </div>
      ))}
    </div>
  )
}

export default SelectFilter
