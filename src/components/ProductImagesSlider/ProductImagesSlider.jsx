/* eslint-disable react/prop-types */
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

import PImage from "../../assets/Images/Products/product-2.webp";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductImagesSlider = (props) => {
  if (!props.imageUrls) return null; // or return a loading indicator, etc.
  const [currentImage, setCurrentImage] = useState(props?.imageUrls[0]);
  // const products = useSelector((state) => state.products);
  // const { productId, color } = useParams();

  return (
    <div
      className={` col-span-1    flex  flex-col ${
        !props.modal ? "md:flex-row lg:col-span-2" : null
      } `}
    >
      <div
        className={`flex justify-between items-stretch ${
          !props.modal
            ? "md:flex-col md:justify-center   md:w-36 md:mr-5"
            : null
        }  `}
      >
        <img
          src={props?.imageUrls[0]}
          alt="product"
          onClick={() => setCurrentImage(props?.imageUrls[0])}
          className={`${
            props.modal
              ? `max-[390px]:w-24 max-[500px]:w-28 w-36 border-2 rounded-lg mb-5 cursor-pointer ${
                  currentImage === props?.imageUrls[0] ? "border-black" : ""
                }`
              : `max-[390px]:w-24 max-[500px]:w-28 w-36 border-2 rounded-lg mb-5 cursor-pointer ${
                  currentImage === props?.imageUrls[0] ? "border-black" : ""
                }`
          }`}
        />

        <img
          src={props?.imageUrls[1]}
          alt="product"
          onClick={() => setCurrentImage(props?.imageUrls[1])}
          className={`max-[390px]:w-24 max-[500px]:w-28 w-36 border-2 rounded-lg  mb-5 cursor-pointer ${
            currentImage === props?.imageUrls[1] ? "border-black" : null
          }`}
        />
        {props?.imageUrls[2] ? (
          <img
            src={props?.imageUrls[2]}
            alt="product"
            onClick={() => setCurrentImage(props?.imageUrls[2])}
            className={`max-[390px]:w-24 max-[500px]:w-28 w-36 border-2 rounded-lg  mb-5 cursor-pointer ${
              currentImage === props?.imageUrls[2] ? "border-black" : null
            }`}
          />
        ) : null}
      </div>
      {/* <Zoom> */}
      <img
        src={currentImage}
        className={` ${!props.modal ? " md:w-3/4" : null}    `}
      />
      {/* </Zoom> */}
    </div>
  );
};

export default ProductImagesSlider;
