// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "./SwiperSlider.css";
import { Button } from "@/shadcn-components/ui/button";

const SwiperSlider = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      //   navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      className="h-screen"
    >
      <SwiperSlide className="slider1 flex justify-center items-center flex-col">
        <p className="gradient-text text-5xl sm:text-6xl md:text-7xl font-bold mb-20  ">
          MEN CLOTHING
        </p>

        <button className="button-special py-1.5 px-5 mx-2 mb-10 ">
          Shop Now{" "}
          <ArrowRightAltIcon fontSize="large" className="mx-1 mb-0.5" />
        </button>
      </SwiperSlide>
      <SwiperSlide className="slider1 flex justify-center items-center flex-col">
        {" "}
        <p className="gradient-text text-5xl sm:text-6xl md:text-7xl font-bold mb-20  ">
          WOMEN CLOTHING
        </p>
        <button className="button-special py-1.5 px-5 mx-2 mb-10 ">
          Shop Now{" "}
          <ArrowRightAltIcon fontSize="large" className="mx-1 mb-0.5" />
        </button>
      </SwiperSlide>
      <SwiperSlide className="slider1 flex justify-center items-center flex-col">
        {" "}
        <p className="gradient-text text-5xl sm:text-6xl md:text-7xl font-bold mb-20  ">
          KIDS CLOTHING
        </p>
        <button className="button-special py-1.5 px-5 mx-2 mb-10 ">
          Shop Now{" "}
          <ArrowRightAltIcon fontSize="large" className="mx-1 mb-0.5" />
        </button>
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperSlider;
