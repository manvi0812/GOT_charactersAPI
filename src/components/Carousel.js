import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination } from 'swiper';

import { imageAddresses } from '../utils/ImgUrls';

const Carousel = () => {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={3}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false
      }}
      pagination={{
        clickable: true
      }}
      modules={[Autoplay, Pagination]}
      className='char-section__my-swiper'>
      {imageAddresses.map((img, index) => (
        <SwiperSlide key={index}>
          <img src={img} alt={img} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
