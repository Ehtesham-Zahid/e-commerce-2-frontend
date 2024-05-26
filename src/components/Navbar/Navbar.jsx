import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/shadcn-components/ui/sheet";

import Logo from "../../assets/Images/Logos/main-logo-3.png";

import "./Navbar.css";
import { X } from "lucide-react";
import { Separator } from "@/shadcn-components/ui/separator";
import ProductCard from "../ProductCard/ProductCard";
import { Button } from "@/shadcn-components/ui/button";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <div
      className={`text-black border-b border-black  flex w-screen justify-between items-center    py-1 px-6 bg-white `}
    >
      <Link to="/">
        <img src={Logo} className="w-44 lg:w-52 " />
      </Link>

      <ul>
        <li>
          <Link to="/collections/men" className=" font-semibold mx-5 cool-link">
            MEN
          </Link>
          <Link
            to="/collections/women"
            className=" font-semibold mx-5 cool-link"
          >
            WOMEN
          </Link>
          <Link
            to="/collections/kids"
            className=" font-semibold mx-5 cool-link"
          >
            KIDS
          </Link>
          <Link
            to="/collections/accessories"
            className=" font-semibold mx-5 cool-link"
          >
            ACCESSORIES
          </Link>
        </li>
      </ul>

      <div className="">
        <Sheet>
          <SheetTrigger>
            <SearchIcon className="mx-2 cursor-pointer transition ease-in-out  hover:translate-z-2 hover:scale-110   duration-300 " />
          </SheetTrigger>

          <SheetContent side="top" className="w-full flex flex-col">
            {/* <SheetHeader></SheetHeader> */}
            <div className=" flex">
              <SearchIcon
                className="mx-2  text-neutral-400 mt-1"
                fontSize="large"
              />
              <input
                className="border-b border-neutral-400 w-full py-2  outline-none me-10 "
                placeholder="SEARCH FOR..."
              />
            </div>
            <div className="px-12 mt-3 flex flex-col ">
              <p className="font-bold text-black">PRODUCT RESULTS</p>
              <Separator />
              <div className="grid grid-cols-5 my-5">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
              </div>
              <div className="w-full flex justify-center">
                <Button>View All Results</Button>
              </div>
            </div>
            <SheetClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-slate-100 dark:ring-offset-slate-950 dark:focus:ring-slate-300 dark:data-[state=open]:bg-slate-800">
              <X className="h-8 w-8 mt-4" />
              <span className="sr-only">Close</span>
            </SheetClose>
          </SheetContent>
        </Sheet>

        <Link to="/account/signin">
          <PersonIcon className="mx-2 cursor-pointer transition ease-in-out  hover:translate-z-2 hover:scale-110   duration-300" />
        </Link>
        <ShoppingCartIcon className="mx-2 cursor-pointer transition ease-in-out  hover:translate-z-2 hover:scale-110   duration-300" />
      </div>
    </div>
  );
};

export default Navbar;
