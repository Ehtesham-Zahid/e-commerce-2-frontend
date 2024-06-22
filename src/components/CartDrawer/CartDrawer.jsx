import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import CartCard from "../CartCard/CartCard";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/shadcn-components/ui/sheet";
import { Button } from "@/shadcn-components/ui/button";
import { X } from "lucide-react";

import { fetchProductsByVariants } from "@/store/features/cart/cartSlice";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import Spinner from "../Spinner/Spinner";

const CartDrawer = () => {
  // ----------VARIABLE DECLARATIONS-------------
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  // ----------USE EFFECTS-----------
  useEffect(() => {
    dispatch(fetchProductsByVariants());
  }, []);

  return (
    <Sheet className=" ">
      <SheetTrigger>
        <ShoppingCartIcon className="mx-2 cursor-pointer transition ease-in-out  hover:translate-z-2 hover:scale-110   duration-300" />
      </SheetTrigger>

      <SheetContent
        side="right"
        className="flex flex-col p-0 max-[450px]:w-[325px]"
      >
        <div className="flex justify-between items-center px-6 py-4 ">
          <p className="text-xl font-medium tracking-wide">CART</p>
          <SheetClose className="    rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-slate-100 dark:ring-offset-slate-950 dark:focus:ring-slate-300 dark:data-[state=open]:bg-slate-800">
            <X className="h-6 w-6  " />
            <span className="sr-only">Close</span>
          </SheetClose>
        </div>
        {cart?.loading ? (
          <div className="flex justify-center items-center mt-64 lg:mt-72">
            <Spinner />
          </div>
        ) : cart?.items?.products?.length !== 0 ? (
          <>
            <div className="overflow-auto px-4 mb-20">
              {cart.items?.products?.map((item, index) => {
                return (
                  <CartCard
                    key={item._id}
                    index={index}
                    title={item.title}
                    price={item.price}
                    selectedSize={item.selectedSize}
                    quantity={item.quantity}
                    color={item.variations[0].color}
                    image={item.variations[0].imageUrls[0]}
                  />
                );
              })}
            </div>

            <div className="bg-neutral-50 border-t border-gray-400 absolute bottom-0 w-full h-20 flex justify-center items-center">
              <Link to="/checkout">
                <Button>
                  <p>CHECKOUT</p>
                  <p className="mx-8">
                    <FiberManualRecordIcon fontSize="xs" />
                  </p>
                  <p>RS. {cart.items.totalPrice}</p>
                </Button>
              </Link>
            </div>
          </>
        ) : (
          <p className="text-center mt-72 font-semibold text-xl">
            CART IS EMPTY
          </p>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
