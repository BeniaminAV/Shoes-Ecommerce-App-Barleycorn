import { toast } from "react-hot-toast"
import { signInWithGooglePopup } from "../../../utils/firebase/firebase"
import Button from "../../button"

const SocialAuth = () => {
  
  const googleLogin = async () => {
    try {
      await signInWithGooglePopup()
      toast.success("Logged in!")
    } catch (error) {
      console.log(error.message, "Something went wrong")
    }
  }

  return (
    <div className="py-5">
      <Button
        buttonType="green"
        label="Sign in with Google"
        onClick={googleLogin}
      />
    </div>
  )
}

export default SocialAuth
