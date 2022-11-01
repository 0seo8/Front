import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import FindPw from '../../components/SignIn/FindPw'
import FindId from '../../components/SignIn/FindId'
import TabList from '../../components/common/TabList'
const tablist = ['아이디 찾기', '비밀번호 찾기']

const FindID = () => {
  const { state } = useLocation()
  const [select, setSelect] = useState(state ? state : tablist[0])
  const onClickHandler = (idx) => {
    setSelect(tablist[idx])
  }
  return (
    <>
      <TabList
        tablist={tablist}
        select={select}
        onClickHandler={onClickHandler}
      />
      {select === tablist[1] ? <FindPw /> : <FindId />}
    </>
  )
}

export default FindID
