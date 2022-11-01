import { cls } from '../../utils'
const SwitchBtn = ({ category, changeHandler, active }) => {
  return (
    <div className="border-box w-[42px] h-[84px] transition grid-rows-2 fixed rounded-lg border border-point grid bottom-20 right-5 text-xs font-bold overflow-hidden bg-point">
      {category.map((item, index) => (
        <div
          key={index}
          onClick={changeHandler}
          className={cls(
            'border-box transition flex justify-center items-center',
            active === item
              ? 'bg-point text-white '
              : 'bg-white text-black-600 ',
          )}
        >
          {item}
        </div>
      ))}
    </div>
  )
}

export default SwitchBtn
