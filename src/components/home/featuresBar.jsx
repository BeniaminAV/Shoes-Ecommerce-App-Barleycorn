import Container from "../container"
import { AiFillUnlock } from "react-icons/ai"
import {
  GiCommercialAirplane,
  GiReturnArrow,
  GiStarSattelites,
} from "react-icons/gi"

const FeaturesBar = () => {
  return (
    <Container>
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-x-auto h-[20vh] p-2">
        <span className="flex items-center justify-center gap-x-2 my-2 text-sm lg:text-lg">
          <GiCommercialAirplane size={20} />
          <p>FREE EXPRESS SHIPPING</p>
        </span>
        <span className="flex items-center justify-center gap-x-2 my-2  text-sm lg:text-lg">
          <AiFillUnlock size={20} />
          <p>SECURE PAYMENTS</p>
        </span>

        <span className="flex items-center justify-center gap-x-2 my-2 text-sm lg:text-lg">
          <GiReturnArrow size={20} />
          <p>30 DAYS FREE RETURNS</p>
        </span>
        <span className="flex items-center justify-center gap-x-2 my-2 text-sm lg:text-lg">
          <GiStarSattelites size={20} />
          <p>MADE IN ITALY</p>
        </span>
      </div>
    </Container>
  )
}

export default FeaturesBar
