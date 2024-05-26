import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import Header from "../Header/Header";
import ProductsSection from "../ProductsSection/ProductsSection";
import Toolbar from "../Toolbar/Toolbar";
const KidsSection = () => {
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

export default KidsSection;
