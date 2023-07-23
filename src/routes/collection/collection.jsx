import CollectionItem from "../../components/shop/collection"
import shoes from "../../data/homeShoes"

const Collection = () => {
  const ShoesCollection = shoes.slice(2, 3)

  return (
    <div className="pt-[11vh]">
      <CollectionItem shoes={ShoesCollection} />
    </div>
  )
}

export default Collection
