/* eslint-disable react/prop-types */
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// import "./SwiperSlider.css";
import { Button } from "@/shadcn-components/ui/button";
import { Link } from "react-router-dom";

const ImageSlider = (props) => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      //   scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
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
