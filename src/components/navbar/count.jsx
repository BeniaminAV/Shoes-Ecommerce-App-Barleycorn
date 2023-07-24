import { useSelector } from "react-redux"
import { selectCountFavorite } from "../../store/favorite/favorite.selector"

const Count = ({ className }) => {
  const favoriteCount = useSelector(selectCountFavorite)

  return (
    <>
      {favoriteCount ? (
        <>
          <span
            className={`w-[22px] h-[22px] absolute mb-5 ml-7 bg-black rounded-full flex items-center justify-center ${className}`}>
            <p className="text-semibold text-xs">{favoriteCount}</p>
          </span>
        </>
      ) : (
        <></>
      )}
    </>
  )
}

export default Count
