import { IconSneak, sneakLord } from "../../assets"
import Container from "../container"
import BigImage from "./components/bigImage"
import SmallImage from "./components/smallImage"

const ContentShowTwo = () => {
  return (
    <Container className="relative py-3">
      <div className="flex flex-col md:flex-row">
        <SmallImage
          className="lg:h-[80vh] h-[60vh] pr-0 md:pr-3 py-3"
          src={IconSneak}
          alt={IconSneak}
        />
        <BigImage
          className="lg:h-[80vh] h-[60vh] pl-0 md:pl-3 py-3"
          src={sneakLord}
          alt={sneakLord}
        />
      </div>
    </Container>
  )
}

export default ContentShowTwo
