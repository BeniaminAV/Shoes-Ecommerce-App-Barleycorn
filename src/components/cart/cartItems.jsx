import { useSelector } from "react-redux"
import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector"
import DirectoryCart from "./components/directoryCart"
import Container from "../container"
import Button from "../button"

const CartItems = () => {
  const favoriteItems = useSelector(selectCartItems)
  const cartTotal = useSelector(selectCartTotal)

  return (
    <div className="bg-[#f3f3f3]">
      {favoriteItems.map((item) => (
        <DirectoryCart item={item} key={item.id} />
      ))}

      <Container>
        <div className="flex flex-col lg:items-end items-center  justify-end py-4 pt-2">
          <span className="text-2xl font-semibold py-2">
            Total: {cartTotal}$
          </span>
          <Button
            buttonType="green"
            label="Go to checkout"
            className="max-w-[350px]"
          />
        </div>
      </Container>
    </div>
  )
}

export default CartItems
