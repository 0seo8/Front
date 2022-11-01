// import Header from './Header'
import Header from '../../layout/Header'
import Profile from './Profile'
import Process from './Process'
import MyPossession from './MyPossession'
import MyNav from './MyNav'
import Guest from './Guest'
import Button from '../../common/Button'
import { useCookies } from 'react-cookie'
import { useDispatch } from 'react-redux'
import { logOut } from '../../../store/slices/authSlice'
import { useNavigate } from 'react-router-dom'

const index = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // api (useEffect async await)
  const [cookies, setCookie, removeCookie] = useCookies()
  const token = cookies.accessToken
  const logoutHandler = () => {
    dispatch(logOut())
    navigate(0) // 쿠키 삭제 적용을 위한 새로고침
  }
  return (
    <>
      <Header />
      <div className="pt-16 pb-2 mb-8 mt-2">
        {!token ? (
          <Guest />
        ) : (
          <>
            <Profile />
            <Process />
            <MyPossession />
            <Button
              onClick={() => logoutHandler()}
              classprop="text-sm mx-5 mt-9 mb-5 bg-primary text-white"
            >
              로그아웃
            </Button>
          </>
        )}
        <MyNav />
      </div>
    </>
  )
}

export default index
