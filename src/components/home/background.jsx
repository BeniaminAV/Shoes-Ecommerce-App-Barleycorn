import { ImageBg } from "../../assets"
import SaleUp from "./components/saleUp"

const Backgroud = () => {
  return (
    <div className="relative">
      <img
        src={ImageBg}
        alt="background"
        className="w-full h-[85vh] bg-cover bg-no-repeat bg-center"
      />
        <SaleUp />
    </div>
  )
}

export default Backgroud
