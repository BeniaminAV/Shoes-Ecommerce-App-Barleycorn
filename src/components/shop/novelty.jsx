import Container from "../container"
import DirectoryItem from "../itemDirectory"

const NoveltyItem = ({ shoes }) => {
  return (
    <Container className="bg-[#f3f3f3] p-5 mb-5">
      {shoes.map((category, i) => (
        <div key={i} className="grid lg:grid-cols-4 grid-cols-2 gap-x-5">
          {category.items.map((shoess) => (
            <DirectoryItem shoess={shoess} key={shoess.id} />
          ))}
        </div>
      ))}
    </Container>
  )
}

export default NoveltyItem
