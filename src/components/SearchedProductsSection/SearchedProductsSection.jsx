import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Banner from "../Banner/Banner";
import Header from "../Header/Header";
import Toolbar from "../Toolbar/Toolbar";
import ProductCard from "../ProductCard/ProductCard";
import Spinner from "../Spinner/Spinner";

import {
  fetchProducts,
  setSearchedProducts,
} from "@/store/features/products/productsSlice";

const SearchedProductsSection = () => {
  // -----VARIABLES DECALARATION------

  const { query } = useParams();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  let sectionClass;
  if (products.gridView === "1") {
    sectionClass = "grid grid-cols-1  p-2 ";
  } else if (products.gridView === "2") {
    sectionClass = "grid grid-cols-2 lg:grid-cols-4 gap-4 p-2 ";
  } else if (products.gridView === "3") {
    sectionClass = "grid grid-cols-3 lg:grid-cols-5 gap-2 p-2";
  } else if (products.gridView === "4") {
    sectionClass = "grid grid-cols-4 lg:grid-cols-6 gap-2 p-2 ";
  }
  // ----------USE STATES-----------

  const [scrolled, setScrolled] = useState(false);

  // -----------USE EFFECTS--------------
  useEffect(() => {
    dispatch(fetchProducts()).then((result) =>
      result.meta.requestStatus === "fulfilled"
        ? dispatch(setSearchedProducts(query))
        : null
    );
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
    <div className="min-h-screen">
      <Banner />
      <div className={`z-10 ${scrolled ? "fixed top-0" : ""}`}>
        <Header />
        <Toolbar searchPage={true} />
      </div>
      <p className="text-center font-bold text-xl sm:text-2xl   my-5">
        SEARCHED PRODUCTS
      </p>
      <div className={sectionClass}>
        {products.loading ? (
          <div className="flex justify-center items-center w-screen  mt-52 md:mt-64">
            <Spinner />
          </div>
        ) : (
          products.searchedProducts?.map((product) => {
            return product.variations?.length > 1 ? (
              <>
                <ProductCard
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  category={product.category}
                  color={product?.variations[0]?.color}
                  image={product?.variations[0]?.imageUrls[0]}
                  image2={product?.variations[0]?.imageUrls[1]}
                />
                <ProductCard
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  category={product.category}
                  color={product?.variations[1]?.color}
                  image={product?.variations[1]?.imageUrls[0]}
                  image2={product?.variations[1]?.imageUrls[1]}
                />
              </>
            ) : (
              <ProductCard
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                category={product.category}
                color={product?.variations[0]?.color}
                image={product?.variations[0]?.imageUrls[0]}
                image2={product?.variations[0]?.imageUrls[1]}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default SearchedProductsSection;
