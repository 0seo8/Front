import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { magazineWoman } from '../../../dummy/main'
import HeartIcon from '../../common/HeartIcon'
const TodayMagazine = () => {
  const navigate = useNavigate()
  const [like, setLike] = useState(false)
  const item = magazineWoman[0]
  return (
    <div
      className="w-[9.563em]"
      //추후 id 값 넣기
      onClick={() => navigate(`/magazine/${item.id}`)}
    >
      <div className="absolute bottom-12">
        <img src={item.cover} className=" w-[150px]" />
        <div
          className="absolute top-4 right-4"
          onClick={() => navigate(`/magazine/${item.id}`)}
        >
          <HeartIcon size="23px" fill="#ffffff" off={!item.liked} />
        </div>
      </div>
    </div>
  )
}

export default TodayMagazine
