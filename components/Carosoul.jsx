import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

import "../app/globals.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Carosoul = ({ height, arr }) => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className={`${height} mySwiper w-full`}
      >
        {arr.map((item) => (
          <SwiperSlide key={item.id}>
            <img src={item.src} className="w-full h-full object-cover" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Carosoul;
