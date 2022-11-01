import React from 'react'

const Content = ({ item }) => {
  return (
    <div className="px-5 border-t border-black-200 py-5">
      <div className="mb-5 text-xl font-bold">Q</div>
      <div className="flex gap-2">
        {item.images?.map((target, idx) => (
          <div
            key={idx}
            className="relative flex-shrink w-[56px] h-[56px] bg-cover rounded-md overflow-hidden mb-5"
            style={{
              backgroundImage: `url(${target})`,
            }}
          ></div>
        ))}
      </div>
      <div className="text-xs ">{item.content}</div>
    </div>
  )
}

export default Content
