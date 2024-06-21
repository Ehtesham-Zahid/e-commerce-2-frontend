/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

import { SheetClose } from "@/shadcn-components/ui/sheet";

const ProductCardMini = (props) => {
  return props.searchBar ? (
    <SheetClose asChild>
      <Link
        to={`/products/${props.id}/${props.color}`}
        className="flex items-center justify-start my-2"
      >
        <img className="w-20 h-20 rounded-lg" src={props.image} />

        <div>
          <p className="text-lg tracking-wide m-2">{props.title}</p>
          <p className="font-semibold m-2">Rs. {props.price}</p>
        </div>
      </Link>
    </SheetClose>
  ) : (
    <Link
      to={`/products/${props.id}/${props.color}`}
      className="flex items-center justify-start my-2"
    >
      <img className="w-20 h-20 rounded-lg" src={props.image} />

      <div>
        <p className="text-lg tracking-wide m-2">{props.title}</p>
        <p className="font-semibold m-2">Rs. {props.price}</p>
      </div>
    </Link>
  );
};

export default ProductCardMini;
