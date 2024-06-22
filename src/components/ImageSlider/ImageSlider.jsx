/* eslint-disable react/prop-types */
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const ImageSlider = (props) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      className="w-full col-span-1  "
    >
      <SwiperSlide className="flex justify-center items-center">
        <img src={props?.imageUrls[0]} />
      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center">
        <img src={props?.imageUrls[1]} />
      </SwiperSlide>{" "}
      <SwiperSlide className="flex justify-center items-center">
        <img src={props?.imageUrls[2]} />
      </SwiperSlide>
    </Swiper>
  );
};

export default ImageSlider;
