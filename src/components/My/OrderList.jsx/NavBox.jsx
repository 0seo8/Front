import React from 'react'

const NavBox = ({ status }) => {
  const types = Object.keys(status)
  return (
    <div className="pt-[64px] text-center">
      <div className="border-t border-b border-primary mt-[38px]">
        <ul className="flex justify-around">
          {types.map((item, idx) => (
            <li className="py-4" key={idx}>
              <div className="text-lg text-primary font-bold mb-1">
                {status[item].length}
              </div>
              <div className="text-[10px]">{item}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default NavBox
