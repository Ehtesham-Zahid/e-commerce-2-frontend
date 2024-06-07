import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import Header from "../Header/Header";
import ProductsSection from "../ProductsSection/ProductsSection";
import Toolbar from "../Toolbar/Toolbar";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  fetchProductsByCategory,
  setCategory,
} from "@/store/features/products/productsSlice";

const Men = () => {
  // -----VARIABLES DECALARATION------
  const dispatch = useDispatch();

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    dispatch(fetchProductsByCategory({ category: "men" }));
    dispatch(setCategory("men"));
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

export default Men;
