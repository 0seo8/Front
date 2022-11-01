import React, { useState, useEffect } from 'react'
import NextBtn from '../../components/common/NextBtn'
import allNotChecked from '/public/assets/allNotCheck.svg'
import allChecked from '/public/assets/allCheck.svg'
import { accepts } from '~/dummy/accepts.js'
import { TermCard } from './TermCard'

const TermService = () => {
  const [useAccept, setUseAccept] = useState(false)
  const [userDataAccept, setUserDataAccept] = useState(false)

  const allChecking = () => {
    if (useAccept && userDataAccept) {
      setUseAccept(false)
      setUserDataAccept(false)
    } else {
      setUseAccept(true)
      setUserDataAccept(true)
    }
  }

  return (
    <div>
      <div className="flex hover:cursor-pointer mb-8 items-center">
        <img
          src={useAccept && userDataAccept ? allChecked : allNotChecked}
          alt="check"
          onClick={allChecking}
          className="w-5 h-5 block mt-1"
        />
        <div className="text-xl font-bold ml-2.5">약관 전체 동의하기</div>
      </div>
      <div>
        <div className="mb-10">
          <TermCard
            accept={accepts.useAccept}
            check={useAccept}
            setCheck={setUseAccept}
          />
        </div>
        <div>
          <TermCard
            accept={accepts.userDataAccept}
            check={userDataAccept}
            setCheck={setUserDataAccept}
          />
        </div>
      </div>
      {/* NextBtn에 disabled를 true로 넘기면 버튼 활성화되어요! */}
      <NextBtn next="idform" disabled={useAccept && userDataAccept}>
        다음
      </NextBtn>
    </div>
  )
}

export default TermService
