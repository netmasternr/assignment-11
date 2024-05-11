import Carousel from "../../Components/Carousel/Carousel";
import TapList from "./TapList";
import img from '../../assets/img/image/762887_Job1-01.jpg'
import About from "./About";
import SkillsHere from "./SkillsHere";


const Home = () => {
    return (
        <div className="pt-[70px]">
          <Carousel></Carousel>

          <div className="bg-cover" style={{ backgroundImage: `url(${img})` }}>
            <TapList/>
          </div>

          <div>
            <About/>
          </div>
          <div>
            <SkillsHere/>
          </div>
        </div>
    );
};

export default Home;