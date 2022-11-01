import { Link, useNavigate } from 'react-router-dom'
import { ReactComponent as BackPoint } from '../../../public/assets/back-small-point.svg'
import { ReactComponent as HomeIcon } from '../../../public/assets/homeIcon.svg'
const Header = () => {
  const navigate = useNavigate()
  return (
    <div>
      <div
        className="relative flex justify-between items-center overflow-hidden bg-white max-w-[37.5rem] px-[1.75rem] h-[4.125rem]"
        onClick={() => navigate(-1)}
      >
        <BackPoint />
        <h2 className="text-xl font-bold">공지사항</h2>
        <Link to="/">
          <HomeIcon />
        </Link>
      </div>
    </div>
  )
}

export default Header
