import React, { useState } from 'react'
import { ReactComponent as Nochecked } from '/public/assets/allNotCheck.svg'
import { ReactComponent as Checked } from '/public/assets/allCheck.svg'
import { ReactComponent as ViewIcon } from '/public/assets/view.svg'
const PW_REGEX = new RegExp('^[0-9]{4,6}$')

const Content = ({
  count,
  onChangeHandler,
  privateYn,
  privateYnHandler,
  addPassword,
}) => {
  const [active, setActive] = useState()
  const [type, setType] = useState('password')
  const [alret, setAlret] = useState('')
  const [check, setChecked] = useState(false)
  const checkedHandler = () => {
    setChecked((prev) => !prev)
  }
  const changeTypeHandler = () => {
    type === 'password' ? setType('text') : setType('password')
  }

  const checkRegex = (e) => {
    PW_REGEX.test(e.target.value)
      ? setAlret('')
      : setAlret('4~6자리의 숫자로 입력해주세요')
  }

  return (
    <div className="px-5">
      <h3 className="font-bold">내용입력</h3>
      <div className="flex box-border rounded items-center border-box mt-5 mb-3">
        <input
          onChange={onChangeHandler}
          type="text"
          name="title"
          placeholder="제목을 입력하세요."
          className="px-3 border-none h-[2.6rem] flex-initial box-border w-full py-[0.75rem] rounded text-sm transition shadow-white"
          style={{ backgroundColor: '#F5F5F5' }}
        />
      </div>
      <div className="relative flex box-border rounded items-center border-box">
        <textarea
          onChange={onChangeHandler}
          name="content"
          placeholder="내용을 입력하세요"
          maxLength={1000}
          rows="5"
          cols="1"
          className=" w-full px-3 py-3 text-sm h-[105px] placeholder:text-sm"
          style={{ backgroundColor: '#F5F5F5' }}
        />
        <div className="absolute text-xs bottom-1 right-2">{count} / 1000</div>
      </div>
      <div className="flex items-center gap-2 py-4" onClick={checkedHandler}>
        {check ? <Checked /> : <Nochecked />}
        <span className="text-sm text-black-600">이메일 받기</span>
      </div>
      <div className="flex items-center gap-2" onClick={privateYnHandler}>
        {privateYn ? <Checked /> : <Nochecked />}
        <div className="text-sm text-black-600">비밀글 설정</div>
      </div>
      {privateYn && (
        <div>
          <div className="mt-[15px] relative  flex box-border h-[50px] border border-neutral-200 rounded justify-between items-center">
            <input
              name="pw"
              onChange={addPassword}
              onBlur={checkRegex}
              type={type}
              placeholder="4자리수의 숫자로 입력해주세요."
              maxLength="6"
              minLength="4"
              className="pl-3 h-[48px] border-none flex-initial box-border w-full py-[12px] rounded text-[14px] transition shadow-white"
            />

            <div className="absolute flex gap-1 right-2">
              {active && <ClearIcon width="20px" />}
              <ViewIcon width="26px" onClick={changeTypeHandler} />
            </div>
          </div>
          <p className="mt-[8px] font-[11px] text-red-600 text-[12px]">
            {alret}
          </p>
        </div>
      )}
    </div>
  )
}

export default Content
