import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

import PImage from "../../assets/Images/Products/product-2.webp";

const ProductImagesSlider = () => {
  return (
    <div className=" col-span-1 lg:col-span-2 flex  flex-col md:flex-row">
      <div className="flex justify-between items-stretch md:flex-col md:justify-center   md:w-36 md:mr-5">
        <img
          src={PImage}
          className="max-[390px]:w-24 max-[500px]:w-28 w-36 border-black  border-2 rounded-lg  mb-5"
        />
        <img
          src={PImage}
          className="max-[390px]:w-24 max-[500px]:w-28 w-36 border-2 rounded-lg  mb-5"
        />
        <img
          src={PImage}
          className="max-[390px]:w-24 max-[500px]:w-28 w-36 border-2 rounded-lg  mb-5"
        />
      </div>
      {/* <Zoom> */}
      <img src={PImage} className="md:w-3/4    " />
      {/* </Zoom> */}
    </div>
  );
};

export default ProductImagesSlider;
