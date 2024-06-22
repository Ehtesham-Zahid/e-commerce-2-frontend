import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Header from "../Header/Header";
import Banner from "../Banner/Banner";
import ProductImagesSlider from "../ProductImagesSlider/ProductImagesSlider";
import SingleProductSectionSkeleton from "../SingleProductSectionSkeleton/SingleProductSectionSkeleton";
import RelatedProductsSection from "../RelatedProductsSection/RelatedProductsSection";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shadcn-components/ui/accordion";
import { Button } from "@/shadcn-components/ui/button";
import { Separator } from "@/shadcn-components/ui/separator";

import RecyclingIcon from "@mui/icons-material/Recycling";
import DescriptionIcon from "@mui/icons-material/Description";
import WarningIcon from "@mui/icons-material/Warning";

import { fetchSingleProduct } from "@/store/features/singleProduct/singleProductSlice";
import { fetchProductsByVariants } from "@/store/features/cart/cartSlice";
import { fetchProductsByCategory } from "@/store/features/products/productsSlice";

const SingleProductSection = () => {
  // -----VARIABLES DECALARATION------

  const Sizes = ["XS", "S", "M", "L", "XL", "XXL"];
  const dispatch = useDispatch();
  const singleProduct = useSelector((state) => state.singleProduct);
  const { productId, color } = useParams();

  // --------USE STATES-----------

  const [selectedSize, setSelectedSize] = useState("XS");
  const [scrolled, setScrolled] = useState(false);

  // ----------USE EFFECTS------------

  useEffect(() => {
    dispatch(fetchSingleProduct({ productId, color })).then((result) => {
      if (result.meta.requestStatus === "fulfilled") {
        dispatch(
          fetchProductsByCategory({
            category: result.payload.product.category,
          })
        );
      }
    });
  }, [productId, color]);

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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId, color]);

  // --------HANDLERS----------

  const addToLocalCartHandler = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const isItemAlreadyInCart = cart.some(
      (item) =>
        item.product === `${productId}/${color}` &&
        item.selectedSize === selectedSize
    );

    if (isItemAlreadyInCart) {
      toast.success("Item Already In Cart");
    } else {
      cart.push({
        product: `${productId}/${color}`,
        selectedSize,
        quantity: 1,
      });
      localStorage.setItem("cart", JSON.stringify(cart));
      toast.success("Added To Cart!");

      dispatch(fetchProductsByVariants());
    }
  };

  return (
    <div className="">
      <Banner />
      <div className={`${scrolled ? "fixed top-0 z-10" : ""}`}>
        <Header />
      </div>

      <div className="flex justify-center">
        <div className="flex justify-center flex-col    w-11/12 xl:w-5/6 2xl:w-3/4">
          {singleProduct.loading ? (
            <SingleProductSectionSkeleton />
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4  mt-10">
              <ProductImagesSlider
                imageUrls={singleProduct.currentVariation?.imageUrls}
              />
              <div className="col-span-1  py-4 ">
                <p className="text-2xl font-bold ">
                  {singleProduct.singleProduct?.title}
                </p>
                <p className=" text-sm text-gray-500 mb-4 uppercase">
                  {singleProduct.singleProduct?.category}
                </p>
                <p className="text-xl font-bold mb-10">
                  Rs.{singleProduct.singleProduct?.price}
                </p>
                <Separator className="mb-12" />
                {color !== "null" ? (
                  <p className=" mb-2 text-lg font-medium text-gray-500 ">
                    Color - {color}
                  </p>
                ) : null}

                <div className="flex items-center justify-start w-64 mb-8 mt-4">
                  {singleProduct.singleProduct?.variations?.map((variation) => {
                    return (
                      <Link
                        key={variation._id}
                        to={`/products/${productId}/${variation.color}`}
                      >
                        <img
                          src={variation.imageUrls[0]}
                          className={`w-24 me-4 border-2 rounded-sm ${
                            variation._id === singleProduct.currentVariation._id
                              ? "border-black"
                              : null
                          }`}
                        />
                      </Link>
                    );
                  })}
                </div>

                {singleProduct.singleProduct?.category !== "accessories" ? (
                  <>
                    <p className="text-lg font-medium text-gray-500 ">Size</p>
                    <div className="flex justify-between  flex-wrap overflow-auto gap-y-5 gap-x-2 items-center mb-12 ">
                      {Sizes.map((size) => {
                        return (
                          <button
                            key={size}
                            onClick={() => setSelectedSize(size)}
                            className={`rounded-sm py-1.5 border-2  text-center buttony-1.5 w-20 ${
                              selectedSize === size
                                ? "border-black text-black"
                                : " border-gray-300 text-gray-400 "
                            }`}
                          >
                            {size}
                          </button>
                        );
                      })}
                    </div>
                    <Separator className="mb-10" />
                  </>
                ) : null}
                <Button
                  className="w-full 2xl:mt-10 py-5"
                  onClick={addToLocalCartHandler}
                >
                  ADD TO CART
                </Button>
              </div>
            </div>
          )}
          <div className="my-10">
            <Accordion
              type="single"
              collapsible
              className="border-y border-gray-400  "
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg text-gray-700">
                  <p className="flex items-center">
                    <DescriptionIcon className="me-3" fontSize="small" />{" "}
                    DESCRIPTION
                  </p>
                </AccordionTrigger>
                <AccordionContent className="text-medium tracking-wider leading-7">
                  Yes. It adheres to the WAI-ARIA design pattern. Yes. It
                  adheres to the WAI-ARIA design pattern. Yes. It adheres to the
                  WAI-ARIA design pattern. Yes. It adheres to the WAI-ARIA
                  design pattern. Yes. It adheres to the WAI-ARIA design
                  pattern. Yes. It adheres to the WAI-ARIA design pattern. Yes.
                  It adheres to the WAI-ARIA design pattern. Yes. It adheres to
                  the WAI-ARIA design pattern. Yes. It adheres to the WAI-ARIA
                  design pattern. Yes. It adheres to the WAI-ARIA design
                  pattern. Yes. It adheres to the WAI-ARIA design pattern. Yes.
                  It adheres to the WAI-ARIA design pattern. Yes. It adheres to
                  the WAI-ARIA design pattern. Yes. It adheres to the WAI-ARIA
                  design pattern. Yes. It adheres to the WAI-ARIA design
                  pattern. Yes. It adheres to the WAI-ARIA design pattern. Yes.
                  It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion
              type="single"
              collapsible
              className="border-b border-gray-400"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg text-gray-700 ">
                  <p className="flex items-center">
                    <RecyclingIcon className="me-3" fontSize="small" />{" "}
                    COMPOSITION
                  </p>
                </AccordionTrigger>
                <AccordionContent className="text-lg">
                  Cotton 100%
                </AccordionContent>
              </AccordionItem>
            </Accordion>{" "}
            <Accordion
              type="single"
              collapsible
              className="border-b border-gray-400"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg text-gray-700">
                  <p className="flex items-center">
                    <WarningIcon className="me-3" fontSize="small" /> MATERIAL &
                    CARE
                  </p>
                </AccordionTrigger>
                <AccordionContent className="tracking-wide leading-6">
                  <p>o Do not bleach</p>
                  <p>o Do not dry clean</p>
                  <p>o Low iron if needed</p>
                  <p>o Machine wash cold</p>
                  <p>o Do not use fabric softener</p>
                  <p>o Use mild detergent only</p>
                  <p>o Wash with like colors</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div>
            <RelatedProductsSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductSection;
