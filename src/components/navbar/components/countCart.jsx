import { useSelector } from "react-redux"
import { selectCartCount } from "../../../store/cart/cart.selector"

const CartCount = ({ className }) => {
  const cartCount = useSelector(selectCartCount)

  return (
    <>
      {cartCount ? (
        <>
          <span
            className={`w-[22px] h-[22px] absolute mb-5 ml-7 bg-black rounded-full flex items-center justify-center ${className}`}>
            <p className="text-semibold text-xs">{cartCount}</p>
          </span>
        </>
      ) : (
        <></>
      )}
    </>
  )
}

export default CartCount
