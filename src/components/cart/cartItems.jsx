import { useSelector } from "react-redux"
import { selectCartItems } from "../../store/cart/cart.selector"
import DirectoryCart from "./components/directoryCart"

const CartItems = () => {
  const favoriteItems = useSelector(selectCartItems)

  return (
    <div className="bg-[#f3f3f3]">
      {favoriteItems.map((item) => (
        <DirectoryCart item={item} key={item.id} />
      ))}
    </div>
  )
}

export default CartItems
