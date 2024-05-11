import { Carousel } from 'flowbite-react';
import img1 from '../../assets/img/sliderImg/business-meeting-about-employment.jpg'
import img2 from '../../assets/img/sliderImg/individuality-concept-among-silhouettes.jpg'
import img3 from '../../assets/img/sliderImg/rag-dolls-one-blue.jpg'
import img4 from '../../assets/img/sliderImg/recruitment-hiring-career-job-emplyment-concept.jpg'

const Slider = () => {
    return (
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel>
          <img src={img1} alt="..." />
          <img src={img2} alt="..." />
          <img src={img3} alt="..." />
          <img src={img4} alt="..." />
          
        </Carousel>
      </div>
    );
};

export default Slider;