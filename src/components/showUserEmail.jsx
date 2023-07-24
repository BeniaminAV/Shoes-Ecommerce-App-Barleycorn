import { useSelector } from "react-redux"
import { selectCurrentUser } from "../store/user/user.selector"

const ShowUserEmail = ({ className }) => {
  const userEmail = useSelector(selectCurrentUser)

  const email = userEmail && userEmail.email && userEmail.email

  return <span className={`text-black ${className}`}>{email}</span>
}

export default ShowUserEmail
