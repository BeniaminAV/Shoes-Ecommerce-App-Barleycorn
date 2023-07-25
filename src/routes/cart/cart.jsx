import { useSelector } from "react-redux"
import Banner from "../../components/banner"
import CartItems from "../../components/cart/cartItems"
import { selectCartCount } from "../../store/cart/cart.selector"

const Cart = () => {
  const cartItems = useSelector(selectCartCount)

  return (
    <main>
      <Banner title={"Cart"} className="bg-black h-[40vh]" />
      {cartItems ? (
        <>
          <CartItems />
        </>
      ) : (
        <>
          <Banner
            title={"Your shopping cart is empty"}
            className="bg-[#f3f3f3] text-neutral-600 h-[50vh]"
          />
        </>
      )}
    </main>
  )
}

export default Cart
