import React, { useState } from 'react'
// import Header from './Header'
import Header from '../layout/Header'
import {
  faqData,
  faqOrderData,
  faqPayData,
  faqDeliverData,
} from '../../dummy/faq'
import FaqList from './FaqList'
import FaqContent from './FaqContent'
const index = () => {
  const [tabIndex, setTabIndex] = useState(0)
  const [tabActive, setTabActive] = useState(0)
  const [tabOpen, setTabOpen] = useState(null)
  const faqList = ['전체', '자주찾는 FAQ', '주문', '결제수단', '배송']

  let tabList
  switch (tabIndex) {
    case 0:
      tabList = faqData.concat(faqOrderData, faqPayData, faqDeliverData)
      break
    case 1:
      tabList = faqData
      break
    case 2:
      tabList = faqOrderData
      break
    case 3:
      tabList = faqPayData
      break
    case 4:
      tabList = faqDeliverData
      break
    default:
      return
  }
  const handleToggle = (index) => {
    if (tabOpen === index) {
      setTabOpen(null)
    } else {
      setTabOpen(index)
    }
  }
  return (
    <>
      <Header fill="#000">
        <div className="text-center">FAQ</div>
      </Header>
      <div className="pt-[64px]">
        <FaqList
          faqList={faqList}
          setTabIndex={setTabIndex}
          setTabActive={setTabActive}
          setTabOpen={setTabOpen}
          tabActive={tabActive}
        />
        <FaqContent
          handleToggle={handleToggle}
          tabList={tabList}
          tabOpen={tabOpen}
        />
      </div>
    </>
  )
}

export default index
