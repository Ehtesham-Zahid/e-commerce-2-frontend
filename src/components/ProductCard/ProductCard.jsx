/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";

const ProductCard = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  // const divStyle = {
  //   backgroundImage: `url(${isHovered ? props.image2 : props.image})`,
  //   backgroundSize: "cover",
  //   backgroundRepeat: "no-repeat",
  // };

  return (
    <div
      className="relative"
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
      <Link to={`/products/${props.id}`}>
        <p className="text-sm my-1.5">{props.title}</p>
      </Link>
      <p className="text-sm mb-1.5 capitalize ">{props.color}</p>
      <p className="font-semibold my-1.5 capitalize">Rs. {props.price}</p>
      {isHovered ? (
        <div className="absolute transition scale-110 translate-z-5 ease-in-out duration-300 bottom-24 right-5 bg-white border border-black rounded-sm px-1.5 py-1 ">
          <AddIcon />
        </div>
      ) : null}
    </div>
  );
};

export default ProductCard;
