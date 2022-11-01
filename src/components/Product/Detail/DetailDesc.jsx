import { useState } from 'react'
import { cls } from '../../../utils/index'
import { ReactComponent as GoBackIcon } from '/public/assets/back-on.svg'

const DetailDesc = ({ list }) => {
  const [open, setOpen] = useState(false)
  const moreHnadler = () => {
    setOpen((prev) => !prev)
  }
  return (
    <div className="px-5">
      <div className={cls('overflow-hidden ', open ? '' : 'h-[2000px]')}>
        {list.map((item, idx) => (
          <img src={item} key={idx} />
        ))}
      </div>
      <div
        onClick={moreHnadler}
        className="flex items-center justify-center gap-4 border border-primary "
      >
        <p className="text-black-600 py-3 font-medium text-sm">
          상세 상품정보 더보기
        </p>
        <GoBackIcon
          className={cls(
            'w-[14px] h-[14px]',
            open ? 'rotate-90 ' : '-rotate-90',
          )}
        />
      </div>
    </div>
  )
}

export default DetailDesc
