import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeCount as changeStoreCounter } from '../../store/slices/productSlice'
import { useChangeCountMutation } from '../../store/api/cartApiSlice'

const CountBtn = ({ id, count }) => {
  const [changeCount] = useChangeCountMutation()
  const [counter, setCounter] = useState(count)
  const dispatch = useDispatch()
  const productCount = useSelector((state) => state.product).count

  const changeCountHandler = (e) => {
    if (counter + e * 1 < 1) return
    setCounter(counter + e * 1)
    changeCount({
      product_id: id,
      count: counter + e * 1,
    })
  }

  return (
    <div className="h-[20px] self-end bg-black-200 rounded flex text-center items-center justify-center">
      <span className="w-[20px] " onClick={() => changeCountHandler(-1)}>
        -
      </span>
      <span className="bg-white w-[20px] leading-[18px] text-black-600 text-xs">
        {counter}
      </span>
      <span className="w-[20px]" onClick={() => changeCountHandler(+1)}>
        +
      </span>
    </div>
  )
}

export default CountBtn
