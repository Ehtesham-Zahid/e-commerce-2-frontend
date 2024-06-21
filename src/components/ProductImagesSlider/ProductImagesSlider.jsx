/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */

import "react-medium-image-zoom/dist/styles.css";

import { useState } from "react";

const ProductImagesSlider = (props) => {
  if (!props.imageUrls) return null; // or return a loading indicator, etc.
  const [currentImage, setCurrentImage] = useState(props?.imageUrls[0]);

  return (
    <div
      className={` col-span-1    flex  flex-col md:flex-row lg:col-span-2
       `}
    >
      <div
        className={`flex justify-between items-stretch    md:flex-col md:justify-center   md:w-36 md:mr-5`}
      >
        <img
          src={props?.imageUrls[0]}
          alt="product"
          onClick={() => setCurrentImage(props?.imageUrls[0])}
          className={`max-[390px]:w-24 max-[500px]:w-28 w-36 border-2 rounded-lg  mb-5 cursor-pointer ${
            currentImage === props?.imageUrls[0] ? "border-black" : null
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

      <img
        src={currentImage}
        className={` ${!props.modal ? " md:w-3/4" : null}    `}
      />
    </div>
  );
};

export default ProductImagesSlider;
