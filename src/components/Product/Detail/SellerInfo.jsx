import React, { useState } from 'react'
import { ReactComponent as GoBackIcon } from '/public/assets/back-on.svg'
import { cls } from '../../../utils'

const SellerInfo = () => {
  const [open, setOpen] = useState(false)
  const openHandler = () => {
    setOpen((prev) => !prev)
  }
  return (
    <div className="px-5 border-b border-primary py-5">
      <div className="flex justify-between items-center" onClick={openHandler}>
        <h4 className="font-bold">판매자정보</h4>
        <GoBackIcon
          width="14px"
          height="14px"
          className={cls(open ? 'rotate-90' : '-rotate-90')}
        />
      </div>
      <div
        className={cls(
          'text-xs leading-normal text-black-100',
          open ? 'mt-3 block' : 'hidden',
        )}
      >
        <p>
          法人名(商号) <span className="text-black-600">: 株式会社</span>
        </p>
        <p>
          グロースカンパニー 代表者(名) :
          <span className="text-black-600">ク　ヤンイル</span>
        </p>
        <p>
          事業者登録番号案内 :
          <span className="text-black-600">374-81-02214</span>
        </p>
        <p>
          電話番号 : <span className="text-black-600">050-3558-2356</span>{' '}
        </p>
        <p>
          住所 :{' '}
          <span className="text-black-600">
            大韓民国 ソウル特別市 松坡区 文井洞639-5
          </span>
        </p>
      </div>
    </div>
  )
}

export default SellerInfo
