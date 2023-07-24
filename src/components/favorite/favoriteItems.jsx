import { useSelector } from "react-redux"
import { selectFavoriteProduct } from "../../store/favorite/favorite.selector"
import DirectoryFavorite from "./components/directoryFavorite"

const FavoriteItems = () => {
  const favoriteItems = useSelector(selectFavoriteProduct)

  return (
    <div className="bg-[#f3f3f3]">
      {favoriteItems.map((item) => (
        <DirectoryFavorite item={item} key={item.id} />
      ))}
    </div>
  )
}

export default FavoriteItems
