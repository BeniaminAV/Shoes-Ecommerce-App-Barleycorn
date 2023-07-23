import CollectionItem from "../../components/shop/collection"
import shoes from "../../data/homeShoes"
import { ImageBg } from "../../assets"
import ShopIntro from "../../components/shop/components/shopIntro"

const Collection = () => {
  const collectionItem = shoes.slice(2, 3)

  return (
    <>
      <ShopIntro
        src={ImageBg}
        alt={`name ${ImageBg}`}
        title="Collection"
        paragraph="Discover the Barleycorn Sale: up to 30% off the Spring-Summer Collection. Renew your style today!"
      />
      <CollectionItem shoes={collectionItem} />
    </>
  )
}

export default Collection
