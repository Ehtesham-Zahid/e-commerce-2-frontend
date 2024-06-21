import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import CartDrawer from "../CartDrawer/CartDrawer";
import SearchBar from "../SearchBar/SearchBar";

import PersonIcon from "@mui/icons-material/Person";

import Logo from "../../assets/Images/Logos/main-logo-3.png";

import "./Navbar.css";

const Navbar = () => {
  // ----------VARIABLE DECLARATIONS----------
  const token = localStorage.getItem("token");

  // -------USE STATES-----------
  const [scrolled, setScrolled] = useState(false);

  // ----------USE EFFECTS------------

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
        <Link to={token ? "/account" : "/account/signin"}>
          <PersonIcon className="mx-2 cursor-pointer transition ease-in-out  hover:translate-z-2 hover:scale-110   duration-300" />
        </Link>
        <CartDrawer />
      </div>
    </div>
  );
};

export default Navbar;
