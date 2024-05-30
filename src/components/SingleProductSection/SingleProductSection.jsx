import Header from "../Header/Header";
import Banner from "../Banner/Banner";
import { useEffect, useState } from "react";
import ProductImagesSlider from "../ProductImagesSlider/ProductImagesSlider";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/shadcn-components/ui/avatar";
import { Button } from "@/shadcn-components/ui/button";
import { Separator } from "@/shadcn-components/ui/separator";

const SingleProductSection = () => {
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

      <div className="flex justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4  w-11/12 xl:w-5/6 2xl:w-3/4 mt-10">
          <ProductImagesSlider />
          <div className="col-span-1  py-4 ">
            <p className="text-2xl font-bold ">Cloud Feel Muscle Tee</p>
            <p className=" text-sm text-gray-500 mb-4">MEN</p>
            <p className="text-xl font-bold mb-10">Rs.2600</p>
            <Separator className="mb-12" />
            <p className=" mb-2 text-lg font-medium text-gray-500 ">
              Color - White
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
            <Button className="w-full 2xl:mt-10 py-5">ADD TO CART</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductSection;
