import ShopIntro from "../../components/shop/components/shopIntro"
import NoveltyItem from "../../components/shop/novelty"
import shoes from "../../data/homeShoes"
import { NoveltyImg } from "../../assets"

const Novelty = () => {
  const noveltyItem = shoes.slice(1, 2)

  return (
    <>
      <ShopIntro
        src={NoveltyImg}
        alt={`name ${NoveltyImg}`}
        className="h-[70vh]"
        title="Novelty"
        paragraph="Discover the latest news from the Barleycorn collection, create your look and define your style without ever giving up comfort and Made in Italy quality.
Renew your style today!"
      />
      <NoveltyItem shoes={noveltyItem} />
    </>
  )
}

export default Novelty
