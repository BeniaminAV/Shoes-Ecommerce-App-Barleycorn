import {
  AiOutlineHeart,
  AiOutlineLogin,
  AiOutlineShopping,
  AiOutlineUser,
} from "react-icons/ai"
import LinkRoutes from "../link"

const UserMenu = ({ onClick }) => {
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
            <LinkRoutes label={<AiOutlineUser size={25} />} to={"/user"} />
            <LinkRoutes
              label={<AiOutlineLogin size={25} />}
              to={"/authentication"}
            />
          </span>
        </div>
      </div>
    </div>
  )
}

export default UserMenu
