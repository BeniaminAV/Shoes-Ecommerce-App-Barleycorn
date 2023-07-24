import { useSelector } from "react-redux"
import Banner from "../../components/banner"
import FavoriteItems from "../../components/favorite/favoriteItems"
import { selectCountFavorite } from "../../store/favorite/favorite.selector"

const Favorite = () => {
  const favoriteItems = useSelector(selectCountFavorite)

  return (
    <main>
      <Banner
        title={"Wishlist"}
        subtitle={"Here you will find your favorite items."}
        className="bg-black h-[40vh]"
      />

      {favoriteItems ? (
        <>
          <FavoriteItems />
        </>
      ) : (
        <>
          <Banner
            title={"No products have been added to the list yet"}
            className="bg-[#f3f3f3] text-neutral-500 h-[50vh]"
          />
        </>
      )}
    </main>
  )
}

export default Favorite
