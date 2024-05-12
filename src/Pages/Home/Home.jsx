import Carousel from "../../Components/Carousel/Carousel";
import TapList from "./TapList";
// import img from '../../assets/img/image/762887_Job1-01.jpg'
import About from "./About";
import SkillsHere from "./SkillsHere";
import { useLoaderData } from "react-router-dom";


const Home = () => {

  const jobs = useLoaderData();
  console.log(jobs)


    return (
        <div className="pt-[70px]">
          <Carousel></Carousel>

          <div className="bg-cover" >
            <TapList jobs={jobs}/>
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