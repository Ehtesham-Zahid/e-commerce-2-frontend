import Header from "../Header/Header";
import Banner from "../Banner/Banner";
import { useEffect, useState } from "react";
import ProductImagesSlider from "../ProductImagesSlider/ProductImagesSlider";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/shadcn-components/ui/avatar";
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
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleProduct } from "@/store/features/products/productsSlice";
import { useParams } from "react-router-dom";
import { addToLocalCart } from "@/store/features/cart/cartSlice";
import Spinner from "../Spinner/Spinner";

const SingleProductSection = () => {
  // -----VARIABLES DECALARATION------
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const { productId } = useParams();

  const [scrolled, setScrolled] = useState(false);
  console.log(productId);
  useEffect(() => {
    console.log(productId);
    dispatch(fetchSingleProduct(productId));
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

  // -----HANDLERS-------
  // const addToLocalCartHandler = (product) => {
  //   const cart = JSON.parse(localStorage.getItem("cart")) || [];
  //   cart.push(product);
  //   localStorage.setItem("cart", JSON.stringify(cart));
  // };
  console.log(products.singleProduct);

  const addToLocalCartHandler = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(products.singleProduct.id);
    localStorage.setItem("cart", JSON.stringify(cart));
  };
  return (
    <div className="">
      <Banner />
      <div className={`${scrolled ? "fixed top-0 z-10" : ""}`}>
        <Header />
      </div>
      {products.loading ? (
        <Spinner />
      ) : (
        <div className="flex justify-center">
          <div className="flex justify-center flex-col    w-11/12 xl:w-5/6 2xl:w-3/4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4  mt-10">
              <ProductImagesSlider
                imageUrls={products.singleProduct?.imageUrls}
                // image1={products.singleProduct?.imageUrls[0]}
              />
              <div className="col-span-1  py-4 ">
                <p className="text-2xl font-bold ">
                  {products.singleProduct?.title}
                </p>
                <p className=" text-sm text-gray-500 mb-4 uppercase">
                  {products.singleProduct?.category}
                </p>
                <p className="text-xl font-bold mb-10">
                  Rs.{products.singleProduct?.price}
                </p>
                <Separator className="mb-12" />
                <p className=" mb-2 text-lg font-medium text-gray-500 ">
                  Color - {products.singleProduct?.color}
                  {/* <span className="   py-2 px-4  rounded-full     bg-black"></span> */}
                </p>
                <p className="text-lg font-medium text-gray-500">Colors:</p>
                <div className="flex items-center justify-between w-64 mb-8">
                  <Avatar className="bg-red-600  " />
                  <Avatar className="bg-black  " />
                  <Avatar className="bg-gray-500  " />
                  <Avatar className="bg-red-600  " />
                  <Avatar className="bg-red-600  " />
                </div>
                <p className="text-lg font-medium text-gray-500 ">Size</p>
                {/* <div className="flex justify"> */}
                <div className="flex justify-between  flex-wrap overflow-auto gap-y-5 gap-x-2 items-center mb-12 ">
                  <p className="rounded-sm  border-2 border-gray-300 text-gray-400   text-center py-1.5 w-20 ">
                    XS
                  </p>
                  <p className="rounded-sm  border-2 border-gray-300 text-gray-400   text-center py-1.5 w-20 ">
                    S
                  </p>{" "}
                  <p className="rounded-sm  border-2 border-gray-300 text-gray-400   text-center py-1.5 w-20 ">
                    M
                  </p>{" "}
                  <p className="rounded-sm  border-2 border-gray-300 text-gray-400   text-center py-1.5 w-20 ">
                    L
                  </p>
                  <p className="rounded-sm  border-2 border-gray-300 text-gray-400   text-center py-1.5 w-20 ">
                    XL
                  </p>{" "}
                  <p className="rounded-sm  border-2 border-gray-300 text-gray-400   text-center py-1.5 w-20 ">
                    XXL
                  </p>
                </div>
                <Separator className="mb-10" />
                {/* <p className="rounded-sm  border  px-6 py-4">S</p>{" "}
            <p className="rounded-sm  border  px-6 py-4">S</p>{" "}
            <p className="rounded-sm  border  px-6 py-4">S</p> */}
                {/* </div> */}
                <Button
                  className="w-full 2xl:mt-10 py-5"
                  onClick={addToLocalCartHandler}
                >
                  ADD TO CART
                </Button>
              </div>
            </div>
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
                    adheres to the WAI-ARIA design pattern. Yes. It adheres to
                    the WAI-ARIA design pattern. Yes. It adheres to the WAI-ARIA
                    design pattern. Yes. It adheres to the WAI-ARIA design
                    pattern. Yes. It adheres to the WAI-ARIA design pattern.
                    Yes. It adheres to the WAI-ARIA design pattern. Yes. It
                    adheres to the WAI-ARIA design pattern. Yes. It adheres to
                    the WAI-ARIA design pattern. Yes. It adheres to the WAI-ARIA
                    design pattern. Yes. It adheres to the WAI-ARIA design
                    pattern. Yes. It adheres to the WAI-ARIA design pattern.
                    Yes. It adheres to the WAI-ARIA design pattern. Yes. It
                    adheres to the WAI-ARIA design pattern. Yes. It adheres to
                    the WAI-ARIA design pattern. Yes. It adheres to the WAI-ARIA
                    design pattern. Yes. It adheres to the WAI-ARIA design
                    pattern.
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
                      <WarningIcon className="me-3" fontSize="small" /> MATERIAL
                      & CARE
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
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleProductSection;
