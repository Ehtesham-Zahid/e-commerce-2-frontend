import React from "react";

import Product1 from "../../assets/Images/Products/product-1.webp";
import { Button } from "@/shadcn-components/ui/button";

const ProductCard = () => {
  return (
    <div className="">
      <img src={Product1} className="rounded-sm" />
      <p className="text-sm my-1.5">Cloud Feel Muscle Tee</p>
      <p className="text-sm mb-1.5 ">White</p>
      <p className="font-semibold my-1.5">Rs. 2,500</p>
    </div>
  );
};

export default ProductCard;
