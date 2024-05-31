import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/shadcn-components/ui/sheet";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { X } from "lucide-react";
import CartCard from "../CartCard/CartCard";
import { Button } from "@/shadcn-components/ui/button";
import { Link } from "react-router-dom";

const CartDrawer = () => {
  return (
    <Sheet className=" ">
      <SheetTrigger>
        <ShoppingCartIcon className="mx-2 cursor-pointer transition ease-in-out  hover:translate-z-2 hover:scale-110   duration-300" />
      </SheetTrigger>
      <SheetContent side="right" className="flex flex-col p-0">
        <div className="flex justify-between items-center px-6 py-4 ">
          <p className="text-xl font-medium tracking-wide">CART</p>
          <SheetClose className="    rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-slate-100 dark:ring-offset-slate-950 dark:focus:ring-slate-300 dark:data-[state=open]:bg-slate-800">
            <X className="h-6 w-6  " />
            <span className="sr-only">Close</span>
          </SheetClose>
        </div>
        <div className="overflow-auto px-4 mb-20">
          <CartCard />
          <CartCard /> <CartCard /> <CartCard />
          <CartCard /> <CartCard /> <CartCard /> <CartCard />
        </div>
        <div className="bg-neutral-50 border-t border-gray-400 absolute bottom-0 w-full h-20 flex justify-center items-center">
          <Link to="/checkout">
            <Button>
              <p>CHECKOUT</p>
              <p className="mx-8">
                <FiberManualRecordIcon fontSize="xs" />
              </p>
              <p>RS.10,000</p>
            </Button>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
