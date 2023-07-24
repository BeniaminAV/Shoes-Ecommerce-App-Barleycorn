import {
  AiOutlineHeart,
  AiOutlineShopping,
  AiOutlineUser,
} from "react-icons/ai"
import LinkRoutes from "../link"
import ShowUserEmail from "../showUserEmail"
import Button from "../button"
import { signOutUser } from "../../utils/firebase/firebase"
import { toast } from "react-hot-toast"

const UserMenu = ({ onClick }) => {
  const onSignOut = async () => {
    try {
      await signOutUser()
      toast.success("You logout")
    } catch (error) {
      console.log(error)
      toast.error("Something went wrong")
    }
  }

  return (
    <div
      className="fixed left-0 right-0 mt-[1.7vh] bg-[#222222] h-full "
      onClick={onClick}>
      <div className="text-white">
        <div className="flex flex-col py-5 p-4">
          <span className="burgerLink">
            <LinkRoutes label={"Novelty"} to={"/novelty"} className="w-full" />
          </span>
          <span className="burgerLink">
            <LinkRoutes label={"Collection"} to={"/collection"} />
          </span>
          <span className="burgerLink">
            <LinkRoutes label={"Sales"} to={"sales"} />
          </span>
          <span className="burgerLink">
            <LinkRoutes label={"Customers Services"} to={"/customService"} />
          </span>
          <span className="burgerLink">
            <LinkRoutes label={"Contact Us"} to={"contact"} />
          </span>
          <span className="burgerLink flex items-center justify-around border-none">
            <LinkRoutes label={<AiOutlineHeart size={25} />} to={"/favorite"} />
            <LinkRoutes label={<AiOutlineShopping size={25} />} to={"/cart"} />
            <LinkRoutes
              label={<AiOutlineUser size={25} />}
              to={"/authentication"}
            />
          </span>
          <ShowUserEmail className="text-white uppercase font-semibold text-center py-5" />
          <div className="mx-10">
            <Button label="Sign Out" onClick={onSignOut} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserMenu
