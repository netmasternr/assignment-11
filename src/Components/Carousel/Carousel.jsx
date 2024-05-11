// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import img1 from '../../assets/img/sliderImg/business-meeting-about-employment.jpg'
import img2 from '../../assets/img/sliderImg/individuality-concept-among-silhouettes.jpg'
import img3 from '../../assets/img/sliderImg/rag-dolls-one-blue.jpg'

import Slide from '../Slide/Slide';

const Carousel = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 4500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,

                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Slide image={img1} text='Professional logo design for startups and small businesses, crafting unique brand identities that stand out in competitive markets.'  />
                </SwiperSlide>
               
                <SwiperSlide>
                    <Slide image={img2} text='Eye-catching flyer and brochure designs perfect for promoting events, products, or services, attracting attention and driving conversions.' />
                </SwiperSlide>
               
                <SwiperSlide>
                    <Slide  image={img3} text='Responsive web design services for freelancers and entrepreneurs, creating user-friendly websites that showcase portfolios and attract clients.' />
                </SwiperSlide>
        
            </Swiper>
        </>
    );
};

export default Carousel;