/* eslint-disable react/prop-types */
import { useState } from "react";
import { useDispatch } from "react-redux";

import { fetchProductsByVariants } from "@/store/features/cart/cartSlice";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const QuantitySelector = (props) => {
  // -------VARIABLE DELARATIONS--------
  const dispatch = useDispatch();

  // ---------USE STATES------------
  const [quantity, setQuantity] = useState(props.quantity);

  // -----------HANDLERS---------
  const decrementQuantityHandler = () => {
    //some logic here
    if (quantity > 1) {
      setQuantity(quantity - 1);
      let cart = JSON.parse(localStorage.getItem("cart"));
      cart[props.index].quantity = quantity - 1;
      localStorage.setItem("cart", JSON.stringify(cart));

      dispatch(fetchProductsByVariants());
    }
  };

  const incrementQuantityHandler = () => {
    //some logic here
    setQuantity(quantity + 1);
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart[props.index].quantity = quantity + 1;
    localStorage.setItem("cart", JSON.stringify(cart));

    dispatch(fetchProductsByVariants());
  };

  return (
    <div className="flex border items-center justify-around   border-gray-300 w-24 py-1 ">
      <p
        className={`${quantity < 0 ? "disabled:opacity-40" : ""}`}
        onClick={decrementQuantityHandler}
      >
        <RemoveIcon fontSize="xs" className="text-gray-400 cursor-pointer" />
      </p>
      <p className="">{props.quantity}</p>
      <p className=" " onClick={incrementQuantityHandler}>
        <AddIcon fontSize="xs" className="text-gray-400 cursor-pointer" />
      </p>
    </div>
  );
};

export default QuantitySelector;
