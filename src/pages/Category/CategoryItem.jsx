import React from 'react'

const CategoryItem = ({ item }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-[60px] h-[60px] py-2 rounded-[14px] overflow-hidden flex justify-center items-center bg-white bg-cover">
        <img src={item.imgSrc} alt={item.name} />
      </div>
      <div className="text-xs text-center w-full mt-3">{item.name}</div>
    </div>
  )
}

export default CategoryItem
