import { useDispatch, useSelector } from "react-redux"
import { selectFavoriteProduct } from "../../../store/favorite/favorite.selector"
import { removeItemFromFavorite } from "../../../store/favorite/favorite.action"
import CustomButton from "../../customButton"
import { GrFormClose } from "react-icons/gr"
import Container from "../../container"

const DirectoryFavorite = ({ item }) => {
  const { id, name, imageUrl, price } = item
  const dispatch = useDispatch()
  const favoriteItems = useSelector(selectFavoriteProduct)
  const removeItem = () => dispatch(removeItemFromFavorite(favoriteItems, item))

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
        <p className="text-md font-semibold">{price}</p>
        <CustomButton label={<GrFormClose size={20} />} onClick={removeItem} />
      </div>

      <div className="border-b-[1px] text-neutral-400 my-2 md:py-0" />
    </Container>
  )
}

export default DirectoryFavorite
