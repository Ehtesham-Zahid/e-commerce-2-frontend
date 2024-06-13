import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Banner from "../Banner/Banner";
import SwiperSlider from "../SwiperSlider/SwiperSlider";
import HomeProductSection from "../HomeProductSection/HomeProductSection";
import { fetchProducts } from "@/store/features/products/productsSlice";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const products = useSelector((state) => state.products);

  const groupedByCategory = products.allProducts.reduce((acc, product) => {
    const category = product.category;

    // If the category is not already a key in the accumulator, add it with an empty array
    if (!acc[category]) {
      acc[category] = [];
    }

    // Add the current person to the array for their category group
    acc[category].push(product);

    return acc;
  }, {});

  console.log(groupedByCategory);

  console.log(groupedByCategory.men?.splice(0, 4));

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
      <HomeProductSection
        sectionTitle="FOR MEN"
        page="/collections/men"
        productsArray={groupedByCategory.men?.splice(0, 4)}
      />
      <HomeProductSection
        sectionTitle="FOR WOMEN"
        page="/collections/women"
        productsArray={groupedByCategory.women?.splice(0, 4)}
      />
      <HomeProductSection
        sectionTitle="FOR KIDS"
        page="/collections/kids"
        productsArray={groupedByCategory.kids?.splice(0, 4)}
      />
      <HomeProductSection
        sectionTitle="ACCESSORIES"
        page="/collections/accessories"
        productsArray={groupedByCategory.accessories?.splice(0, 4)}
      />
    </div>
  );
};

export default Home;
