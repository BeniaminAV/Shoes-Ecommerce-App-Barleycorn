import Backgroud from "../../components/home/background"
import ContentShowOne from "../../components/home/contentShowOne"
import ContentShowThree from "../../components/home/contentShowThree"
import ContentShowTwo from "../../components/home/contentShowTwo"
import Directory from "../../components/home/directory"
import FeaturesBar from "../../components/home/featuresBar"
import TripSea from "../../components/home/tripSea"
import shoes from "../../data/homeShoes"

const Home = () => {
  const firstSlice = shoes.slice(0, 1)
  const twoSlice = shoes.slice(1, 2)
  const threeSlice = shoes.slice(2, 3)

  return (
    <main>
      <Backgroud />
      <FeaturesBar />
      <Directory
        shoes={firstSlice}
        title={"Sale Bestsellers"}
        paragraph="Discover the best-selling products"
      />
      <ContentShowOne />
      <TripSea />
      <ContentShowTwo />
      <Directory
        shoes={twoSlice}
        title="Sneakers"
        paragraph="A selection of the best-selling products in the last 7 days"
      />
      <ContentShowThree />
      <Directory
        shoes={threeSlice}
        title="Classic 781 Collection"
        paragraph="A laced Ankle Boot that traces the Brand Heritage Barleycorn"
      />
    </main>
  )
}

export default Home
