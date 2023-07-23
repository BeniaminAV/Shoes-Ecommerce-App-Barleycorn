import shoes from "../../data/homeShoes"
import Shop from "../../components/shop/shop"
import ShopIntro from "../../components/shop/components/shopIntro"
import { ImageBg } from "../../assets"

const Sales = () => {
  return (
    <>
      <ShopIntro
        src={ImageBg}
        alt={`name ${ImageBg}`}
        title="Sales"
        paragraph="Discover the Barleycorn Sale: up to 30% off the Spring-Summer Collection. Renew your style today!"
      />
      <Shop shoes={shoes} />
    </>
  )
}

export default Sales
