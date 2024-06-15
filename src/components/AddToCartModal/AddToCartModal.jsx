/* eslint-disable react/prop-types */
import AddIcon from "@mui/icons-material/Add";
import ProductImagesSlider from "../ProductImagesSlider/ProductImagesSlider";
import { useDispatch, useSelector } from "react-redux";
import { Separator } from "@/shadcn-components/ui/separator";
import { Button } from "@/shadcn-components/ui/button";
import { Link } from "react-router-dom";
import { fetchSingleProduct } from "@/store/features/singleProduct/singleProductSlice";
import { useState } from "react";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shadcn-components/ui/dialog";
import ImageSlider from "../ImageSlider/ImageSlider";
import toast from "react-hot-toast";
import { fetchProductsByVariants } from "@/store/features/cart/cartSlice";
import AddToCartModalSkeleton from "../AddToCartModalSkeleton/AddToCartModalSkeleton";

const AddToCartModal = (props) => {
  const Sizes = ["XS", "S", "M", "L", "XL", "XXL"];
  const dispatch = useDispatch();
  const singleProduct = useSelector((state) => state.singleProduct);

  // --------USE STATES-----------

  const [selectedSize, setSelectedSize] = useState("XS");

  const fetchSingleProductHandler = () => {
    dispatch(
      fetchSingleProduct({ productId: props.productId, color: props.color })
    );
  };
  const addToLocalCartHandler = () => {
    // if (isItemAlreadyInCart) {
    //     console.log('Item is already in the cart. Not adding it again.');
    // } else {
    //     // Add the item to the cart
    //     cart.push(itemToAdd);
    //     console.log('Item added to the cart.');
    // }

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const isItemAlreadyInCart = cart.some(
      (item) =>
        item.product === `${props.productId}/${props.color}` &&
        item.selectedSize === selectedSize
    );

    if (isItemAlreadyInCart) {
      toast.success("Item Already In Cart");
    } else {
      cart.push({
        product: `${props.productId}/${props.color}`,
        selectedSize,
        quantity: 1,
      });
      localStorage.setItem("cart", JSON.stringify(cart));
      toast.success("Added To Cart!");

      dispatch(fetchProductsByVariants());
    }
  };

  return (
    <Dialog className="">
      <DialogTrigger onClick={() => fetchSingleProductHandler()}>
        {/* <div className="relative cursor-pointer"> */}
        <div className=" relative     transition scale-110 translate-z-5 ease-in-out duration-300 bottom-24 right-5 bg-white border border-black rounded-sm px-1.5 py-1 ">
          <AddIcon />
        </div>
        {/* </div> */}
      </DialogTrigger>
      <DialogContent className="w-fit md:w-[650px] lg:w-[800px]">
        {singleProduct.loading ? (
          <AddToCartModalSkeleton />
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            <ImageSlider
              imageUrls={singleProduct.currentVariation?.imageUrls}
            />
            <div className="col-span-1    ">
              <p className="text-xl font-bold ">
                {singleProduct.singleProduct?.title}
              </p>
              <p className=" text-sm text-gray-500 mb-2 uppercase">
                {singleProduct.singleProduct?.category}
              </p>
              <p className="text-base font-bold mb-4">
                Rs.{singleProduct.singleProduct?.price}
              </p>
              <Separator className="mb-4" />
              <p className=" mb-2 text-lg font-medium text-gray-500 ">
                Color - {props.color}
                {/* <span className="   py-2 px-4  rounded-full     bg-black"></span> */}
              </p>

              <p className="text-lg font-medium text-gray-500 ">Size</p>
              {/* <div className="flex justify"> */}
              <div className="flex justify-between  flex-wrap overflow-auto gap-y-5 gap-x-2 items-center mb-6 ">
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
              <Separator className="mb-4" />
              <div className="flex">
                <Link to={`/products/${props.id}/${props.color}`}>
                  <Button
                    className="w-full 2xl:mt-4 py-5 me-2 border border-black hover:bg-slate-200"
                    variant="ghost"
                    //   onClick={addToLocalCartHandler}
                  >
                    VIEW FULL DETAILS
                  </Button>
                </Link>
                <DialogClose className="w-full">
                  <Button
                    className="w-full 2xl:mt-4 py-5 ms-2"
                    onClick={addToLocalCartHandler}
                  >
                    ADD TO CART
                  </Button>
                </DialogClose>
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default AddToCartModal;
