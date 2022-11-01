import React from 'react'

const FaqContent = ({ handleToggle, tabList, tabOpen }) => {
  return (
    <ul className="pt-[0.938rem]">
      {tabList.map((tab, index) => (
        <li
          key={index}
          className="py-2.5 px-5 text-xs text-black-600 font-medium cursor-pointer"
          onClick={() => handleToggle(index)}
        >
          <div
            className={`flex ${
              tabOpen === index ? 'font-bold text-point' : 'font-normal'
            }`}
          >
            <h4 className="flex-none w-[21.75%]">{tab.type}</h4>
            <p className="grow">{tab.title}</p>
          </div>
          <textarea
            className={`bg-white-200 my-2.5 p-5 outline-none resize-none w-full h-[200px] overflow-y-auto rounded ${
              tabOpen === index ? 'block' : 'hidden'
            }`}
            value={tab.content}
            onClick={(event) => event.stopPropagation()}
            readOnly
          ></textarea>
        </li>
      ))}
    </ul>
  )
}

export default FaqContent
