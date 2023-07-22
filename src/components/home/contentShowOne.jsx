import { Brogues, Loafers } from "../../assets"
import Container from "../container"
import BigImage from "./components/bigImage"
import SmallImage from "./components/smallImage"

const ContentShowOne = () => {
  return (
    <Container className="relative">
      <div className="flex flex-col lg:flex-row">
        <SmallImage
          className="lg:h-[80vh] h-[50vh] pr-0 lg:pr-3 py-3"
          src={Brogues}
          alt={Brogues}
        />
        <BigImage
          className="lg:h-[80vh] h-[50vh] pl-0 lg:pl-3 py-3"
          src={Loafers}
          alt={Loafers}
        />
      </div>
    </Container>
  )
}

export default ContentShowOne
