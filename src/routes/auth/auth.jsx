import Auth from "../../components/auth/auth"
import User from "../../components/auth/user"
import { useSelector } from "react-redux"
import { selectCurrentUser } from "../../store/user/user.selector"

const Authentication = () => {
  const user = useSelector(selectCurrentUser)

  return <>{user ? <User /> : <Auth />}</>
}

export default Authentication
