import { useDispatch, useSelector } from "react-redux"
import CustomButton from "./customButton"
import { AiOutlineHeart, AiOutlineShopping } from "react-icons/ai"
import { selectFavoriteProduct } from "../store/favorite/favorite.selector"
import { addItemToFavorite } from "../store/favorite/favorite.action"

const DirectoryItem = ({ shoess }) => {
  const { id, name, imageUrl, price } = shoess
  const favoriteItems = useSelector(selectFavoriteProduct)
  const dispatch = useDispatch()

  const addProductToFavorite = () =>
    dispatch(addItemToFavorite(favoriteItems, shoess))

  return (
    <div
      id={id}
      className="text-center cursor-pointer p-5  border-[1px] rounded-md my-2  ">
      <div className="flex items-center justify-between ">
        <CustomButton
          onClick={addProductToFavorite}
          className="text-rose-700 hover:text-rose-500"
          label={<AiOutlineHeart size={25} />}
        />
        <CustomButton
          className="text-blue-700 hover:text-blue-500"
          label={<AiOutlineShopping size={25} />}
        />
      </div>
      <img src={imageUrl} alt={`name ${name}`} />
      <h2 className="text-md font-semibold truncate">{name}</h2>
      <p className="text-md font-semibold">{price}</p>
    </div>
  )
}

export default DirectoryItem
