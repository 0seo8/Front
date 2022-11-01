import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as AngleBracketIcon } from '../../../public/assets/angle-bracket_icon.svg'
const Content = ({noticeData}) => {
  return (
    <ul>
      {noticeData.map((notice, index) => 
        <li className="p-5 border-b-[10px] border-white-200" key={index} >
          <div className="border-b border-black-200 pb-2.5 mb-3 flex justify-between items-center">
            <h3 className="font-bold">{notice.title}</h3>
            <Link to="" className="text-sm">
              <span className="relative pr-5 block leading-none">
                상세보기 
                <AngleBracketIcon className="absolute right-1.5 top-0" />
              </span>
            </Link>
          </div>
          <div>
            <p className="text-xs font-bold mb-1.5 ellipsis">
              {notice.content}
            </p>
            <p className="text-xs text-black-800">{notice.date}</p>
          </div>
        </li>
      )}
    </ul>
  )
}

export default Content
