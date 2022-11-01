import { useLocation, Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useCookies } from 'react-cookie'

const RequireAuth = () => {
  const [cookies, setCookie, removeCookie] = useCookies()
  const token = useSelector(cookies.accessToken)
  const location = useLocation()

  return token ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  )
}
export default RequireAuth
