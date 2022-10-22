import React, { useState } from 'react'
import Button from '../../components/common/Button'
import Title from '../../components/SignUp/Title'
import NextBtn from '../../components/common/NextBtn'
import { ReactComponent as ClearIcon } from '/public/assets/clear.svg'
import useInputValue from '../../hook/useInputValue'
import { useCheckEmailMutation } from '../../store/api/authApiSlice'
const ID_REGEX = new RegExp('^[a-z0-9_-]{6,11}$')

const SignUpIdForm = () => {
  const [inputValue, setInputValue] = useState('')
  const [alret, setAlret] = useState('')
  const [disabled, setDisabled] = useState(false)
  const [active, setActive, onFocusHandler] = useInputValue()
  const [checkEmail] = useCheckEmailMutation()
  const onBlurHandler = (e) => {
    setActive(false)
    setInputValue('')
  }

  const ChangeHandler = (e) => {
    setInputValue(e.target.value)
  }

  const doubleCheck = () => {
    checkEmail(inputValue)
  }

  const checkRegex = () => {
    ID_REGEX.test(inputValue)
      ? setDisabled(true)
      : setAlret('6~11자의 영문 소문자와 숫자만 사용가능합니다.')
  }

  return (
    <>
      <Title title="아이디" text="생성" />
      <div className="mt-36">
        <label
          htmlFor="loginJoinMembershipId"
          className="inline-block mt-4 mb-2 leading-snug"
        >
          아이디
          <span className="inline-block overflow-hidden w-[4px] h-[4px] mt-[4px] rounded-full bg-red-600 indent-[999px] align-text-top ml-1">
            필수 입력
          </span>
        </label>
        <div className="relative  flex box-border h-[50px] border border-neutral-200 rounded justify-between items-center">
          <input
            value={inputValue['id']}
            onChange={ChangeHandler}
            onClick={() => onFocusHandler}
            onBlur={checkRegex}
            name="id"
            placeholder="6자 이상의 영문, 숫자로 입력해 주세요."
            maxLength="11"
            minLength="6"
            className="pl-3 h-[48px] border-none flex-initial box-border w-full py-[12px] rounded text-[14px] transition shadow-white"
          />

          <div className="absolute flex gap-1 right-2">
            {active && (
              <ClearIcon width="20px" onClick={() => onBlurHandler('id')} />
            )}
          </div>
        </div>
        <p className="mt-[8px] font-[11px] text-red-600 text-[12px]">{alret}</p>
        <Button
          classprop=" border border-black-100 mt-6 gap-2"
          onClick={doubleCheck}
        >
          중복확인
        </Button>
        <NextBtn next="pwform" inputValue={inputValue} disabled={disabled}>
          다음
        </NextBtn>
      </div>
    </>
  )
}

export default SignUpIdForm
