import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/shadcn-components/ui/sheet";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import Logo from "../../assets/Images/Logos/main-logo-3.png";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import ProductCard from "../ProductCard/ProductCard";
// import { Separator } from "@radix-ui/react-select";
import { Button } from "@/shadcn-components/ui/button";
import ProductCardMini from "../ProductCardMini/ProductCardMini";
import { Separator } from "@/shadcn-components/ui/separator";

const SideDrawer = () => {
  return (
    <Sheet>
      <div className="flex justify-between items-center w-screen bg-white px-2">
        <div className="w-44 flex justify-start items-center ">
          <SheetTrigger>
            <MenuIcon fontSize="large" />
          </SheetTrigger>
        </div>
        <img src={Logo} className="w-44" />
        <div className="w-44 flex justify-end items-center">
          <span className="max-[500px]:hidden mb-0.5 ">
            <PersonIcon className="mx-1  cursor-pointer transition ease-in-out  hover:translate-z-2 hover:scale-110   duration-300  " />
          </span>
          <Sheet>
            <SheetTrigger>
              <SearchIcon className="mx-2 cursor-pointer transition ease-in-out  hover:translate-z-2 hover:scale-110   duration-300 " />
            </SheetTrigger>

            <SheetContent side="top" className="w-full flex flex-col">
              <div className=" flex">
                <SearchIcon
                  className="me-2 ms-1   text-neutral-400 mt-1"
                  // fontSize="large"
                />
                <input
                  className="border-b border-neutral-400 w-full   outline-none me-6 "
                  placeholder="SEARCH FOR..."
                />
              </div>
              <div className="  mt-3 flex flex-col items-start  ">
                <p className="font-bold text-black">PRODUCT RESULTS</p>
                <Separator />
                <div className="flex flex-col mt-2">
                  <ProductCardMini />
                  <ProductCardMini />
                  <ProductCardMini />
                  <ProductCardMini />
                  <ProductCardMini />
                </div>
                <Button size="sm" className="ms-3 mt-4">
                  View All Results
                </Button>
              </div>
              <SheetClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-slate-100 dark:ring-offset-slate-950 dark:focus:ring-slate-300 dark:data-[state=open]:bg-slate-800">
                <X className="h-5 w-5 mt-4" />
                <span className="sr-only">Close</span>
              </SheetClose>
            </SheetContent>
          </Sheet>
          <ShoppingCartIcon className="mx-1  cursor-pointer transition ease-in-out  hover:translate-z-2 hover:scale-110   duration-300  " />
        </div>
      </div>
      <SheetContent side="left" className="w-80">
        <SheetHeader></SheetHeader>
        <ul className="w-full flex flex-col justify-center items-center mt-2">
          <li className="border-b-2 border-neutral-300 w-full my-4  ">
            <SheetClose asChild>
              <Link to="/" className="font-semibold flex justify-between  ">
                MEN
                <KeyboardArrowRightIcon />
              </Link>
            </SheetClose>
          </li>
          <li className="border-b-2 border-neutral-300 w-full  my-4">
            <SheetClose asChild>
              <Link to="/" className="font-semibold flex justify-between  ">
                WOMEN
                <KeyboardArrowRightIcon />
              </Link>
            </SheetClose>
          </li>{" "}
          <li className="border-b-2 border-neutral-300 w-full  my-4">
            <SheetClose asChild>
              <Link to="/" className="font-semibold flex justify-between  ">
                KIDS
                <KeyboardArrowRightIcon />
              </Link>
            </SheetClose>
          </li>{" "}
          <li className="border-b-2 border-neutral-300 w-full  my-4 ">
            <SheetClose asChild>
              <Link to="/" className="font-semibold flex justify-between  ">
                ACCESSORIES
                <KeyboardArrowRightIcon />
              </Link>
            </SheetClose>
          </li>
          <li className="border-b-2 border-neutral-300 w-full  my-4 min-[500px]:hidden">
            <SheetClose asChild>
              <Link to="/" className="font-semibold flex justify-between  ">
                ACCOUNT
                <KeyboardArrowRightIcon />
              </Link>
            </SheetClose>
          </li>
        </ul>
        <SheetClose className="absolute right-4 top-4  rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-slate-100 dark:ring-offset-slate-950 dark:focus:ring-slate-300 dark:data-[state=open]:bg-slate-800">
          <X className="h-4 w-4  " />
          <span className="sr-only   ">Close</span>
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
};

export default SideDrawer;
