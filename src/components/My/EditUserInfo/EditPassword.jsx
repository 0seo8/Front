import React, { useState } from 'react'
import { cls } from '../../../utils'
import { ReactComponent as ViewIcon } from '/public/assets/view.svg'
export const PW_REGEX = new RegExp('^[a-zA-Z0-9_-]{5,11}$')

const EditPassword = () => {
  const [type, setType] = useState('password')
  const [inputValue, setInputValue] = useState({
    originalPw: '',
    newPw: '',
    newPwConfirm: '',
  })
  const [alret, setAlret] = useState({
    newPw: null,
    newPwConfirm: null,
  })
  const checkRegex = (target) => {
    if (target === 'newPw') {
      PW_REGEX.test(inputValue)
        ? setAlret({
            ...alret,
            newPw: null,
          })
        : setAlret({
            ...alret,
            newPw: '6~11자의 영문 소문자와 숫자만 사용가능합니다.',
          })
    } else {
      type === 'password'
        ? setAlret({
            ...alret,
            newPwConfirm: null,
          })
        : setAlret({
            ...alret,
            newPwConfirm: '비밀번호가 일치하지 않습니다.',
          })
    }
  }
  const changeTypeHandler = () => {
    type === 'password' ? setType('text') : setType('password')
  }

  const onChangeHandler = (e) => {
    const { name, value } = e.target
    setInputValue({
      ...inputValue,
      [name]: value,
    })
  }

  return (
    <div className="mt-[22px] border-b border-black-200 pb-6">
      <h3 className="font-bold mb-4">비밀번호 변경</h3>
      <div className="relative  flex box-border h-[50px] border border-neutral-200 rounded justify-between items-center">
        <input
          onChange={onChangeHandler}
          name="originalPw"
          type={type}
          placeholder="기존비밀번호"
          maxLength="11"
          minLength="6"
          className="pl-3 h-[48px] border-none flex-initial box-border w-full py-[12px] rounded text-[14px] transition shadow-white"
        />

        <div className="absolute flex gap-1 right-2">
          <ViewIcon width="26px" onClick={changeTypeHandler} />
        </div>
      </div>
      <div className="mt-3 relative  flex box-border h-[50px] border border-neutral-200 rounded justify-between items-center">
        <input
          onChange={onChangeHandler}
          name="newPw"
          type={type}
          placeholder="새 비밀번호"
          maxLength="11"
          minLength="6"
          onBlur={() => checkRegex('newPw')}
          className="pl-3 h-[48px] border-none flex-initial box-border w-full py-[12px] rounded text-[14px] transition shadow-white"
        />

        <div className="absolute flex gap-1 right-2">
          <ViewIcon width="26px" onClick={changeTypeHandler} />
        </div>
      </div>
      <p className="mt-[8px] font-[11px] text-red-600 text-[12px]">
        {alret.newPw}
      </p>
      <div className="relative mt-3 flex box-border h-[50px] border border-neutral-200 rounded justify-between items-center">
        <input
          onChange={onChangeHandler}
          name="newPwConfirm"
          type={type}
          placeholder="새 비밀번호 확인"
          maxLength="11"
          minLength="6"
          onBlur={() => checkRegex('newPwConfirm')}
          className="pl-3 h-[48px] border-none flex-initial box-border w-full py-[12px] rounded text-[14px] transition shadow-white"
        />
        <div className="absolute flex gap-1 right-2">
          <ViewIcon width="26px" onClick={changeTypeHandler} />
        </div>
      </div>
      <p className="mt-[8px] font-[11px] text-red-600 text-[12px]">
        {alret.newPwConfirm}
      </p>
      <button
        type="button"
        className={cls(
          'py-3 w-full  rounded-lg text-center mt-[21px]',
          !alret ? 'bg-point text-white' : 'bg-white-200 text-black-200 ',
        )}
      >
        변경
      </button>
    </div>
  )
}

export default EditPassword
