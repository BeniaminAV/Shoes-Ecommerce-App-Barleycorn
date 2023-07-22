import { AiOutlineHeart, AiOutlineLogin, AiOutlineShopping, AiOutlineUser } from "react-icons/ai"
import LinkRoutes from "../link"

const UserMenu = ({onClick}) => {
  return (
    <div className="fixed left-0 right-0 mt-[1.7vh] bg-[#222222] h-full" onClick={onClick}>
      <div className="text-white">
        <div className="flex flex-col py-5 p-4">
         <span className="burgerLink"><LinkRoutes label={"Novelty"} to={"/novelty"}/></span>
         <span className="burgerLink"><LinkRoutes label={"Collection"} to={"/collection"}/></span>
         <span className="burgerLink"><LinkRoutes label={"Sales"} to={"sales"}/></span>
         <span className="burgerLink"><LinkRoutes label={"Customers Services"} to={"/customService"} /></span>
         <span className="burgerLink"><LinkRoutes label={"Contact Us"} to={"contact"}/></span>
         <span className="burgerLink flex items-center"><p className="mr-2 text-md font-bold">FAVORITE</p><LinkRoutes label={<AiOutlineHeart size={25}/>} to={"/favorite"}/></span>
         <span className="burgerLink flex items-center"><p className="mr-2 text-md font-bold">SHOP</p><LinkRoutes label={<AiOutlineShopping size={25}/>} to={"/cart"}/></span>
         <span className="burgerLink flex items-center"><p className="mr-2 text-md font-bold">USER</p><LinkRoutes label={<AiOutlineUser size={25}/>} to={"/user"}/></span>
         <span className="burgerLink flex items-center"><p className="mr-2 text-md font-bold">LOGIN</p><LinkRoutes label={<AiOutlineLogin size={25}/>} to={"/authentication"}/></span>
        </div>
      </div>
    </div>
  )
}

export default UserMenu
