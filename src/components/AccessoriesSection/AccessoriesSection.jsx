import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import Header from "../Header/Header";
import ProductsSection from "../ProductsSection/ProductsSection";
import Toolbar from "../Toolbar/Toolbar";
import { useDispatch } from "react-redux";
import {
  fetchProductsByCategory,
  setCategory,
} from "@/store/features/products/productsSlice";

const AccessoriesSection = () => {
  // -----VARIABLES DECALARATION------
  const dispatch = useDispatch();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    dispatch(fetchProductsByCategory({ category: "accessories" }));
    dispatch(setCategory("accessories"));
  }, []);

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
    <div>
      <Banner />
      <div className={`${scrolled ? "fixed top-0" : ""}`}>
        <Header />
        <Toolbar />
      </div>
      <ProductsSection />
    </div>
  );
};

export default AccessoriesSection;
