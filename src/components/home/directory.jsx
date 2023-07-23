import Container from "../container"
import Title from "../title"
import DirectoryItem from "../itemDirectory"

const Directory = ({ shoes, title, paragraph }) => {
  return (
    <Container className="bg-[#f3f3f3] p-5 mb-5">
      <Title title={title} paragraph={paragraph} className="text-center" />
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

export default Directory
