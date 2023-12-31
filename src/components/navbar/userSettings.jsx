import LinkRoutes from "../link"
import {
  AiOutlineHeart,
  AiOutlineShopping,
  AiOutlineUser,
} from "react-icons/ai"
import Count from "./components/countFav"
import CartCount from "./components/countCart"

const UserOptions = () => {
  return (
    <div className="flex items-center justify-between lg:gap-x-5">
      <div className="flex items-center justify-center">
        <LinkRoutes
          label={<AiOutlineHeart size={25} />}
          to={"/favorite"}
          className="hidden lg:flex"
        />
        <Count className="hidden lg:flex text-white" />
      </div>

      <div className="flex items-center justify-center">
        <LinkRoutes label={<AiOutlineShopping size={25} />} to={"/cart"} />
        <CartCount className="text-white" />
      </div>

      <LinkRoutes
        label={<AiOutlineUser size={25} />}
        to={"/authentication"}
        className="hidden lg:flex"
      />
    </div>
  )
}

export default UserOptions
