import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TabList from '../../common/TabList'
import QnAList from './QnAList'
import QnABtn from './QnABtn'
import { useGetMyQuestionsQuery } from '../../../store/api/questionApiSlice'
import ErrorCom from '../../common/ErrorCom'
import Loading from '../../layout/Loading'
const tablist = ['답변완료', '미답변']

const index = () => {
  const { data: questions, isLoading, isError } = useGetMyQuestionsQuery()
  const answerYes = questions?.filter((item) => !item.answerYn)
  const answerNo = questions?.filter((item) => !!item.answerYn)
  const [select, setSelect] = useState(tablist[0])
  const navigate = useNavigate()
  const onClickHandler = (idx) => {
    setSelect(tablist[idx])
  }
  const goToWrite = () => {
    navigate('/my/qna/write')
  }

  return (
    <>
      <TabList
        tablist={tablist}
        select={select}
        onClickHandler={onClickHandler}
      />
      {isLoading ? (
        <Loading />
      ) : isError ? (
        <ErrorCom />
      ) : (
        questions &&
        (select === tablist[0] ? (
          <QnAList questions={answerYes} />
        ) : (
          <QnAList questions={answerNo} />
        ))
      )}
      <QnABtn onClick={goToWrite} />
    </>
  )
}

export default index
