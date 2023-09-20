import { Col, Container, Row } from 'react-bootstrap'
import BannerBg from './images/banner.png'
import iconOne from './images/1.svg'
import iconTwo from './images/2.svg'
import iconThree from './images/3.svg'
import './banner.css'
import imgOne from './images/imgOne.png'


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';


const Banner = () => {
  return (
    <section className='banner-section'>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className='banner-slider'>
          <img src={imgOne} alt="" />
          <div className='banner-gradient'></div>
          <Container>
            <div className='banner-content'>
              <h2>Revelado a través del querido caminar abortivo</h2>
              <p>Su entrada al evento es su entrada a una experiencia.</p>
            </div>
          </Container>
        </SwiperSlide>
        <SwiperSlide className='banner-slider'>
          <img src={imgOne} alt="" />
          <div className='banner-gradient'></div>
          <Container>
            <div className='banner-content container'>
              <h2>Revelado a través del querido caminar abortivo</h2>
              <p>Su entrada al evento es su entrada a una experiencia.</p>
            </div>
          </Container>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Banner
