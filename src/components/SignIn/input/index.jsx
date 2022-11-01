import React, { useState } from 'react'
import './index.css'
import { ReactComponent as ClearIcon } from '/public/assets/clear.svg'
import { cls } from '../../../utils'

const Input = ({
  tabIndex,
  state,
  name,
  onChangeHandler,
  clear,
  value,
  type = 'text',
}) => {
  const [active, setActive] = useState(false)

  const inputHandler = () => {
    setActive(true)
  }
  const inputBlurHandler = (e) => {
    setActive(false)
    clear()
  }
  return (
    <div
      className={cls(
        'bg-transparent rounded-md p-2 pt-4 mt-3 mb-[20px] ',
        active ? 'shawdowing' : 'border border-black-200 ',
      )}
    >
      <div className="relative flex items-center h-7 ">
        <input
          placeholder={state}
          name={name}
          className={cls('text-sm input ', active && 'active')}
          onClick={inputHandler}
          value={value}
          type={type}
          autoFocus={true}
          tabIndex={tabIndex}
          onChange={onChangeHandler}
        />
        {active && <ClearIcon width="20px" onClick={inputBlurHandler} />}
        <label
          onClick={inputHandler}
          className={cls('text-xs label ', active && 'active')}
        >
          {state}
        </label>
      </div>
    </div>
  )
}

export default Input
