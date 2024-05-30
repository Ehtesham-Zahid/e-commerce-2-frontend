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
import CartDrawer from "../CartDrawer/CartDrawer";
import SearchBar from "../SearchBar/SearchBar";

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
        <SearchBar />
        <Link to="/account/signin">
          <PersonIcon className="mx-2 cursor-pointer transition ease-in-out  hover:translate-z-2 hover:scale-110   duration-300" />
        </Link>
        <CartDrawer />
      </div>
    </div>
  );
};

export default Navbar;
