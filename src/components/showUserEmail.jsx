import { useSelector } from "react-redux"
import { selectCurrentUser } from "../store/user/user.selector"

const ShowUserEmail = () => {
  const userEmail = useSelector(selectCurrentUser)

  const email =
    userEmail && userEmail.email ? userEmail.email : "you need to login"

  return <span className="text-black">{email}</span>
}

export default ShowUserEmail
