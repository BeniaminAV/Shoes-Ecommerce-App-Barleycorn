import { useDispatch, useSelector } from "react-redux"
import CustomButton from "./customButton"
import {
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineShopping,
  AiFillShopping,
} from "react-icons/ai"
import { selectFavoriteProduct } from "../store/favorite/favorite.selector"
import {
  addItemToFavorite,
  removeItemFromFavorite,
} from "../store/favorite/favorite.action"
import { useState } from "react"
import { toast } from "react-hot-toast"
import { selectCartItems } from "../store/cart/cart.selector"
import { addItemToCart, removeItemFromCart } from "../store/cart/cart.action"

const DirectoryItem = ({ shoess }) => {
  const { id, name, imageUrl, price } = shoess
  const favoriteItems = useSelector(selectFavoriteProduct)
  const cartItems = useSelector(selectCartItems)
  const dispatch = useDispatch()

  const [addToFavorite, setAddToFavorite] = useState(
    favoriteItems.some((item) => item.id === id)
  )

  const favoriteAddRemove = () => {
    if (addToFavorite) {
      dispatch(removeItemFromFavorite(favoriteItems, shoess))
      toast.error("Removed from favorite!")
    } else {
      dispatch(addItemToFavorite(favoriteItems, shoess))
      toast.success("Added to favorite!")
    }
    setAddToFavorite(!addToFavorite)
  }

  const [addToCart, setAddToCart] = useState(
    cartItems.some((item) => item.id === id)
  )

  const cartAddRemove = () => {
    if (addToCart) {
      dispatch(removeItemFromCart(cartItems, shoess))
      toast.error("Removed from cart!")
    } else {
      dispatch(addItemToCart(cartItems, shoess))
      toast.success("Added to cart!")
    }
    setAddToCart(!addToCart)
  }

  return (
    <div
      id={id}
      className="text-center cursor-pointer p-5  border-[1px] rounded-md my-2  ">
      <div className="flex items-center justify-between ">
        <CustomButton
          onClick={favoriteAddRemove}
          className="text-rose-700 hover:text-rose-500 hover:animate-pulse"
          label={
            addToFavorite ? (
              <>
                <AiFillHeart size={25} />
              </>
            ) : (
              <>
                <AiOutlineHeart size={25} />
              </>
            )
          }
        />
        <CustomButton
          onClick={cartAddRemove}
          className="text-blue-700 hover:text-blue-500"
          label={
            addToCart ? (
              <>
                <AiFillShopping size={25} />
              </>
            ) : (
              <>
                <AiOutlineShopping size={25} />
              </>
            )
          }
        />
      </div>
      <img src={imageUrl} alt={`name ${name}`} />
      <h2 className="text-md font-semibold truncate">{name}</h2>
      <p className="text-md font-semibold">{price}</p>
    </div>
  )
}

export default DirectoryItem
