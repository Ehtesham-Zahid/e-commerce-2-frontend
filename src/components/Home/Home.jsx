import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Banner from "../Banner/Banner";
import SwiperSlider from "../SwiperSlider/SwiperSlider";
import HomeProductSection from "../HomeProductSection/HomeProductSection";

const Home = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);
  return (
    <div className="">
      <Banner />
      <div className={`${scrolled ? "fixed top-0 z-10" : ""}`}>
        <Header />
      </div>
      <SwiperSlider />
      <HomeProductSection sectionTitle="FOR MEN" page="/collections/men" />
      <HomeProductSection sectionTitle="FOR WOMEN" page="/collections/women" />
      <HomeProductSection sectionTitle="FOR KIDS" page="/collections/kids" />
      <HomeProductSection
        sectionTitle="ACCESSORIES"
        page="/collections/accessories"
      />
    </div>
  );
};

export default Home;
