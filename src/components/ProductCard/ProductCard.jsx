/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import AddToCartModal from "../AddToCartModal/AddToCartModal";
import { SheetClose } from "@/shadcn-components/ui/sheet";
import { Button } from "@/shadcn-components/ui/button";

const ProductCard = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  // const divStyle = {
  //   backgroundImage: `url(${isHovered ? props.image2 : props.image})`,
  //   backgroundSize: "cover",
  //   backgroundRepeat: "no-repeat",
  // };

  return props.searchBar ? (
    <div
      className="mx-0.5"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <SheetClose asChild>
        <Link to={`/products/${props.id}/${props.color}`}>
          <img
            src={isHovered ? props.image2 : props.image}
            // style={divStyle}
            className={`rounded-sm  `}
          />
        </Link>
      </SheetClose>
      <SheetClose asChild>
        <Link to={`/products/${props.id}/${props.color}`}>
          <p className="text-sm my-1.5">{props.title}</p>
        </Link>
      </SheetClose>
      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm mb-1.5 capitalize ">{props.color}</p>
          <p className="font-semibold my-1.5 capitalize">Rs. {props.price}</p>
        </div>
        {isHovered ? (
          <AddToCartModal productId={props.id} color={props.color} />
        ) : null}
      </div>
    </div>
  ) : (
    <div
      className="mx-0.5"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/products/${props.id}/${props.color}`}>
        <img
          src={isHovered ? props.image2 : props.image}
          // style={divStyle}
          className={`rounded-sm  `}
        />
      </Link>

      <Link to={`/products/${props.id}/${props.color}`}>
        <p className="text-sm my-1.5">{props.title}</p>
      </Link>
      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm mb-1.5 capitalize ">{props.color}</p>
          <p className="font-semibold my-1.5 capitalize">Rs. {props.price}</p>
        </div>

        <div className="lg:hidden">
          <AddToCartModal productId={props.id} color={props.color} />
        </div>
        <div className="hidden lg:flex">
          {isHovered ? (
            <AddToCartModal productId={props.id} color={props.color} />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
