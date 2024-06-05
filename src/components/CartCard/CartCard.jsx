import { Separator } from "@/shadcn-components/ui/separator";

import ImageP from "../../assets/Images/Products/product-1.webp";
import QuantitySelector from "../QuantitySelector/QuantitySelector";

const CartCard = (props) => {
  return (
    <div className="flex  items-center mb-4">
      <img src={props.image} className="w-32 me-4 " />
      <div>
        <p className="text-sm tracking-wide mb-3 font-medium">{props.title}</p>
        <p className="font-bold mb-3">Rs. {props.price}</p>
        <p className="text-xs mb-1.5">{props.selectedSize}</p>
        <div className=" flex items-center ">
          <QuantitySelector />
          <p className="ms-3 underline underline-offset-2   hover:text-red-500 cursor-pointer">
            Remove
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
