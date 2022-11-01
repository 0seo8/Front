import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/common/Button'
import { useSignupMutation } from '../../store/api/authApiSlice'

const Finish = () => {
  const navigate = useNavigate()

  const loginHandler = () => {
    // api전송로직 추가
    navigate('/login')
  }
  return (
    <>
      <h2 className="text-[30px] font-medium mt-[35px]">
        <strong className="font-bold">회원가입을</strong>
        <br />
        축하드려요!
      </h2>
      <Button
        onClick={loginHandler}
        classprop="mt-[291px] bg-primary text-white"
      >
        로그인하러 가기
      </Button>
    </>
  )
}

export default Finish
