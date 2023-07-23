import Container from "../../container"
import Title from "../../title"
import Image from "./image"

const ShopIntro = ({ src, alt, title, paragraph, className }) => {
  return (
    <div className="relative">
      <Image src={src} alt={alt} className={className} />
      <Container>
        <Title
          title={title}
          paragraph={paragraph}
          className="absolute top-[35%] mx-5 xs:mx-0 text-white"
          fontT="5xl"
          fontP="lg"
        />
      </Container>
    </div>
  )
}

export default ShopIntro
