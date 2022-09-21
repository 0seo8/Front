import React from 'react'
import { detailProducts } from '../../dummy/detail'

const Inquiry = () => {
  return (
    <>
      <div className=" pb-6 ">
        <h4 className="pl-5 font-bold border-primary border-b pb-5">
          상품 문의
        </h4>
        <div>
          {detailProducts.Inquiry.map((item, idx) => (
            <div className="py-5  border-b border-black-400">
              <div className="pl-5 text-xs text-black-600 ">
                <div className="flex gap-3">
                  <span>{item.date}</span>
                  <span>{item.userId}</span>
                </div>
                <div className=" mt-2">[{item.category}]</div>
              </div>
              <p className="mt-3 pl-5 text-xs ellipsis w-[257px]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Inquiry
