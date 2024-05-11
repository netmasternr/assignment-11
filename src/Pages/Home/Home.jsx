import Carousel from "../../Components/Carousel/Carousel";
import TapList from "./TapList";

const Home = () => {
    return (
        <div className="pt-[70px]">
          <Carousel></Carousel>

          <div>
            <TapList/>
          </div>
          
        </div>
    );
};

export default Home;