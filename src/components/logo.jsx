import { Link } from "react-router-dom"
import { LogoBrand } from "../assets"

const Logo = () => {
  return (
    <Link to={"/"}>
      <img
        src={LogoBrand}
        alt={`name ${LogoBrand}`}
        width={250}
        height={250}
        className="hidden md:block cursor-pointer"
      />
    </Link>
  )
}

export default Logo
