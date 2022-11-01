import React from 'react'
const ProductDetail = ({active, list, cls}) => {
  return (
    <ul className="mt-5 flex gap-5 overflow-x-scroll">
      {list.map((item, index) => (
        <li className="" key={index}>
          <div
            className={cls('w-[5.375rem] h-[5.375rem] rounded-[0.313rem] bg-no-repeat bg-center', active === index ? 'border-2 border-primary' : 'border-none')}
            style={{
              backgroundImage: `url(${item.imgUrl})`,
            }}
          ></div>
          <span className="block text-xs text-black-800 mt-2.5">
            {item.brand}
          </span>
          <p className="text-xs text-black-100 mt-1.5 whitespace-pre">
            {item.productName}
          </p>
        </li>
      ))}
    </ul>
  )
}

export default ProductDetail
