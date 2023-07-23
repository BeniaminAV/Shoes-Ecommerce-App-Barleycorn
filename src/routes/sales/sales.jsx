import shoes from "../../data/homeShoes"
import Shop from "../../components/shop/shop"

const Sales = () => {
  return (
    <div className="pt-[11vh]">
      <Shop shoes={shoes} />
    </div>
  )
}

export default Sales
