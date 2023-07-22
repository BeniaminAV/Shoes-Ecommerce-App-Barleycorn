import { Sea } from "../../assets";
import Title from "../title";

const TripSea = () => {
  return (
    <div className="relative py-20">
      <img
        src={Sea}
        alt={`name ${Sea}`}
        className="w-full h-[40vh] sm:h-[80vh] bg-cover bg-no-repeat bg-center object-fit"
      />
      <Title
        title="Our trip"
        paragraph="Let's navigate the Sailing imaginary to inspire freedom to the urban man..."
        className="absolute top-[30%] mx-10 text-white"
        fontT='5xl'
        fontP='lg'
      />
    </div>
  );
};

export default TripSea;
