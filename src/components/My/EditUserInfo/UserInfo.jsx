import React from 'react'

const UserInfo = () => {
  return (
    <div className="mt-6 text-sm border-b border-black-200 pb-[32px]">
      <h3 className="mb-5 font-bold text-base">회원정보</h3>
      <div className="flex flex-col gap-2">
        <div className="flex ">
          <div className="text-black-800 w-[92px]">성명</div>
          <div>사토유키</div>
        </div>
        <div className="flex">
          <div className="text-black-800 w-[92px]">전화번호</div>
          <div>01001022223</div>
        </div>
        <div className="flex">
          <div className="text-black-800 w-[92px]">생년월일</div>
          <div>2022.02.28</div>
        </div>
        <div className="py-3 w-full bg-point text-white rounded-lg text-center mt-[21px]">
          본인인증으로 정보 수정하기
        </div>
      </div>
    </div>
  )
}

export default UserInfo
