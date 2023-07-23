import { useSelector } from "react-redux"
import { selectCurrentUser } from "./../../store/user/user.selector"
import Button from "../button"
import { toast } from "react-hot-toast"
import { signOutUser } from "../../utils/firebase/firebase"
import Title from "../title"
import Container from "../container"

const User = () => {
  const user = useSelector(selectCurrentUser)

  const userEmail = user ? user.email : user.email

  const onSignOut = () => {
    try {
      signOutUser()
      toast.success("You logout")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container>
      <main className="relative pt-[30vh] flex items-center justify-center text-center">
        <div className="w-[470px]">
          
          <Title
            fontT="5xl"
            title="User Info"
            paragraph="Manage your settings and preferences here"
            fontP="lg"
          />

          <div className="py-5">
            <p className="text-2xl font-bold">{userEmail}</p>
          </div>

          <Button label={"Sign Out"} onClick={onSignOut} />
          
        </div>
      </main>
    </Container>
  )
}

export default User
