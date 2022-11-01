import React from 'react'

const Answer = ({ item }) => {
  const contents = item.answer.split('\n')

  return (
    <>
      <div className="w-full h-[10px] bg-white-200 mb-5"></div>
      <div className="px-5">
        <div className="mb-5 text-xl font-bold">A</div>
        <div className="text-xs">
          {contents.map((item, idx) => (
            <React.Fragment key={idx}>
              {item}
              <br />
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  )
}

export default Answer
