import { Clasic781, Sloop } from "../../assets"
import Container from "../container"
import BigImage from "./components/bigImage"
import SmallImage from "./components/smallImage"

const ContentShowThree = () => {
  return (
    <Container className="relative py-3">
      <div className="flex flex-col md:flex-row">
        <BigImage
          className="lg:h-[80vh] h-[50vh] pl-0 md:pr-3 py-3"
          src={Clasic781}
          alt={Clasic781}
        />
        <SmallImage
          className="lg:h-[80vh] h-[50vh] pr-0 md:pl-3 py-3"
          src={Sloop}
          alt={Sloop}
        />
      </div>
    </Container>
  )
}

export default ContentShowThree
