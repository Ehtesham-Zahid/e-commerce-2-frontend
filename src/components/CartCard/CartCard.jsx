/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

import QuantitySelector from "../QuantitySelector/QuantitySelector";

import {
  fetchProductsByVariants,
  resetCartItems,
} from "@/store/features/cart/cartSlice";

const CartCard = (props) => {
  // ----------VARIABLE DECLARATION-----------
  const dispatch = useDispatch();

  // -------HANDLERS------------
  const removeFromLocalCartHandler = () => {
    let cart = JSON.parse(localStorage.getItem("cart"));

    cart.splice(props.index, 1);
    if (cart.length === 0) {
      localStorage.removeItem("cart");
      dispatch(resetCartItems());
    } else {
      localStorage.setItem("cart", JSON.stringify(cart));
    }

    toast.success("Item Removed!");

    dispatch(fetchProductsByVariants());
  };
  return (
    <div className="flex  items-center mb-4">
      <img src={props.image} className="w-28 min-[500px]:w-32 me-4 " />
      <div>
        <p className="text-xs  min-[500px]:text-sm tracking-wide mb-3 font-medium">
          {props.title} ({props.color})
        </p>
        <p className="font-bold mb-2 min-[500px]:mb-3  text-sm min-[500px]:text-base">
          Rs. {props.price}
        </p>
        <p className="text-xs mb-1.5">{props.selectedSize}</p>
        <div className=" flex items-center ">
          <QuantitySelector quantity={props.quantity} index={props.index} />
          <p
            className="ms-3 underline underline-offset-2   hover:text-red-500 cursor-pointer"
            onClick={removeFromLocalCartHandler}
          >
            Remove
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
