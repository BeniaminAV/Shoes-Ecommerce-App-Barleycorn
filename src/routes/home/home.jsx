import Backgroud from "../../components/home/background"
import ContentShowOne from "../../components/home/contentShowOne"
import ContentShowThree from "../../components/home/contentShowThree"
import ContentShowTwo from "../../components/home/contentShowTwo"
import FeaturesBar from "../../components/home/featuresBar"
import TripSea from "../../components/home/tripSea"

const Home = () => {
  return (
    <main>
      <Backgroud />
      <FeaturesBar />
      <ContentShowOne />
      <TripSea />
      <ContentShowTwo />
      <ContentShowThree />
    </main>
  )
}

export default Home
