import React, { useState, useCallback, useEffect } from 'react'
import DaumPostcodeEmbed from 'react-daum-postcode'
import '~/animate.css'
const EMAIL_REGEX =
  /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/

const EditAddress = () => {
  const [disabled, setDisabled] = useState(false)
  const [openPost, setOpenPost] = useState(false)
  const [animation, setAnimation] = useState('')
  const [inputValue, setInputValue] = useState({
    postNum: '',
    address: '',
  })
  const onOpenHandler = () => {
    setOpenPost(true)
    setAnimation('openPost')
    document.body.style.overflow = 'hidden'
    setTimeout(() => {
      setAnimation('')
    }, 1000)
  }
  const ChangeHandler = useCallback((e) => {
    const { name, value } = e.target
    setInputValue({
      ...inputValue,
      [name]: value,
    })
  })
  const onCloseHandler = () => {
    setAnimation('closePost')
    document.body.style.overflow = 'auto'
    setTimeout(() => {
      setOpenPost(false)
      setAnimation('')
    }, 1000)
  }

  const onCompleteHandler = (data) => {
    setInputValue({
      ...inputValue,
      postNum: data.zonecode,
      address: data.roadAddress,
    })
    onCloseHandler()
  }

  return (
    <>
      <label
        htmlFor="loginJoinMembershipPostNumber"
        className="inline-block font-bold leading-4 mb-8 mt-9"
      >
        주소
      </label>
      <div className="mb-3 relative flex box-border border border-neutral-200 rounded items-center border-box">
        <input
          name="postNum"
          value={inputValue['postNum']}
          onChange={ChangeHandler}
          placeholder="우편번호를 검색해 주세요."
          className="px-3 h-[3rem] border-none flex-initial box-border w-full py-[0.75rem] rounded text-[0.875rem] transition shadow-white"
        />
        <button
          className="absolute right-[0.625rem] whitespace-nowrap p-[0.313rem] w-[5.438rem] h-[1.563rem] text-xs border border-primary text-primary rounded font-medium align-middle"
          onClick={onOpenHandler}
        >
          우편번호검색
        </button>
        {openPost && (
          <div
            className={`${animation} w-full h-full fixed z-50 top-0 left-0 bg-white flex flex-col items-center`}
          >
            <div className="w-full h-20 py-5 font-bold text-lg flex items-center justify-center relative">
              <div>주소 찾기</div>
              <div className="absolute right-5" onClick={onCloseHandler}>
                <div className="relative w-6 h-6 inset-y-0 flex justify-center items-center">
                  <div className="w-6 h-0.5 bg-black origin-center rotate-45 absolute"></div>
                  <div className="w-6 h-0.5 bg-black origin-center -rotate-45 "></div>
                </div>
              </div>
            </div>
            <DaumPostcodeEmbed
              style={{ height: '100%' }}
              onComplete={onCompleteHandler}
              onClose={onCloseHandler}
            />
          </div>
        )}
      </div>
      <p className="mt-[8px] font-[11px] text-red-600 text-[12px]">
        {alert.postNum}
      </p>
      <div className="mb-3 relative flex box-border border border-neutral-200 rounded items-center border-box">
        <input
          name="address"
          value={inputValue['address']}
          onChange={ChangeHandler}
          placeholder="주소를 입력 해 주세요."
          className="px-3 h-[3rem] border-none flex-initial box-border w-full py-[0.75rem] rounded text-[0.875rem] transition shadow-white"
        />
      </div>

      <div className="mb-3 relative flex box-border border border-neutral-200 rounded items-center border-box">
        <input
          name="detail"
          value={inputValue['detail']}
          onChange={ChangeHandler}
          placeholder="상세 주소를 입력 해 주세요."
          className="px-3 h-[3rem] border-none flex-initial box-border w-full py-[0.75rem] rounded text-[0.875rem] transition shadow-white"
        />
      </div>
      <div className="py-3 w-full bg-point text-white rounded-lg text-center mt-[21px]">
        저장하기
      </div>
    </>
  )
}

export default EditAddress
