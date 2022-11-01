import React from 'react'

const SizeDetail = () => {
  return (
    <div className="px-5">
      <div className="grid grid-cols-5 border border-black-200 w-full text-center text-[10px] leading-8 mt-8 text-black-200">
        <div className="border-r border-b border-black-200 bg-point">cm</div>
        <div className="border-r border-b border-black-200 bg-point">총장</div>
        <div className="border-r border-b border-black-200 bg-point ">
          어깨너비
        </div>
        <div className="border-r border-b border-black-200 bg-point">
          가슴단면
        </div>
        <div className="border-r border-b border-black-200 bg-point">
          소매길이
        </div>
        <div className="border-r border-b border-black-200 bg-point">1size</div>
        <div className="border-r border-black-200 text-black-800">66.5</div>
        <div className="border-r border-black-200 text-black-800">60</div>
        <div className="border-r border-black-200 text-black-800">68</div>
        <div className="text-black-800">86</div>
      </div>
    </div>
  )
}

export default SizeDetail
