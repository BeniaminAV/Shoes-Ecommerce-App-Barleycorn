import { useDispatch, useSelector } from "react-redux"
import { selectFavoriteProduct } from "../../../store/favorite/favorite.selector"
import { removeItemFromFavorite } from "../../../store/favorite/favorite.action"
import CustomButton from "../../customButton"
import { GrFormClose } from "react-icons/gr"
import Container from "../../container"
import { toast } from "react-hot-toast"
import { AiOutlineShopping } from "react-icons/ai"
import { selectCartItems } from "../../../store/cart/cart.selector"
import { addItemToCart } from "../../../store/cart/cart.action"
import { useState } from "react"

const DirectoryFavorite = ({ item }) => {
  const { id, name, imageUrl, price } = item
  const dispatch = useDispatch()
  const favoriteItems = useSelector(selectFavoriteProduct)
  const removeItem = () => {
    dispatch(removeItemFromFavorite(favoriteItems, item))
    toast.error("Removed!")
  }

  const cartItems = useSelector(selectCartItems)

  const [isAdded, setIsAdded] = useState(
    cartItems.map((cartItem) => cartItem.id === id)
  )

  const addItemCart = () => {
    if (isAdded) {
      dispatch(addItemToCart(cartItems, item))
      dispatch(removeItemFromFavorite(favoriteItems, item))
    }
    setIsAdded(!isAdded)
  }

  return (
    <Container>
      <div
        id={id}
        className="w-full flex md:flex-row flex-col items-center justify-center md:justify-between text-center pt-5">
        
        <div className="flex md:flex-row flex-col items-center justify-center">
          <img
            src={imageUrl}
            alt={`name ${name}`}
            className="w-[150px] h-[150px] bg-center bg-fit"
          />
          <h2 className="text-md font-semibold truncate w-[200px]">{name}</h2>
        </div>
        
        <p className="text-md font-semibold">{price} $</p>
        <div className="flex items-center justify-center">
          <CustomButton
            label={<GrFormClose size={20} />}
            onClick={removeItem}
          />
          <CustomButton
            label={<AiOutlineShopping size={20} />}
            onClick={addItemCart}
          />
        </div>
      </div>

      <div className="border-b-[1px] text-neutral-400 my-2 md:py-0" />
    </Container>
  )
}

export default DirectoryFavorite
