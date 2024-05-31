/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const ProductCard = (props) => {
  return (
    <div className="">
      <Link to={`/products/${props.id}`}>
        <img src={props.image} className="rounded-sm" />
      </Link>
      <Link to={`/products/${props.id}`}>
        <p className="text-sm my-1.5">{props.title}</p>
      </Link>
      <p className="text-sm mb-1.5 ">{props.color}</p>
      <p className="font-semibold my-1.5 capitalize">Rs. {props.price}</p>
    </div>
  );
};

export default ProductCard;
