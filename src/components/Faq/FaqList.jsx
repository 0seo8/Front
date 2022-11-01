import React from 'react'

const FaqList = ({
  faqList,
  setTabActive,
  setTabIndex,
  setTabOpen,
  tabActive,
}) => {
  return (
    <div className="flex h-[50px] justify-between items-center border-black border-b text-xl text-black-400 px-5 overflow-x-scroll gap-5 cursor-pointer">
      {faqList.map((faq, index) => (
        <h3
          key={index}
          onClick={() => {
            setTabActive(index)
            setTabIndex(index)
            setTabOpen(null)
          }}
          className={
            tabActive === index
              ? 'relative font-bold text-black-100 after:border-b-[3px] after:border-black after:absolute after:-bottom-3 after:w-full after:left-0 whitespace-nowrap'
              : 'whitespace-nowrap'
          }
        >
          {faq}
        </h3>
      ))}
    </div>
  )
}

export default FaqList
