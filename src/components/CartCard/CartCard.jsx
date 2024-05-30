import { Separator } from "@/shadcn-components/ui/separator";

import ImageP from "../../assets/Images/Products/product-1.webp";
import QuantitySelector from "../QuantitySelector/QuantitySelector";

const CartCard = () => {
  return (
    <div className="flex  items-center mb-4">
      <img src={ImageP} className="w-36 " />
      <div>
        <p className="text-sm tracking-wide mb-4 font-medium">
          Cloud Feel Muscle Tee
        </p>
        <p className="font-bold mb-4">Rs. 3000</p>
        <p className="text-xs mb-2">XL</p>
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
