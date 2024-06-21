import React from "react";
import { Link } from "react-router-dom";

import PersonIcon from "@mui/icons-material/Person";

import PakistanFlag from "../../assets/Images/Logos/pakistan-flag.svg";

const Banner = () => {
  // --------VARIABLE DECLARATION--------
  const token = localStorage.getItem("token");
  return (
    <div className="w-screen flex justify-end py-0.5 px-8 items-center bg-neutral-200">
      <Link
        to={token ? "/account" : "/account/signin"}
        className=" border-r-2 px-3 border-neutral-600 font-normal cursor-pointer text-neutral-700 mx-1"
      >
        <PersonIcon fontSize="  " className="mb-0.5" /> Account
      </Link>
      <div className="flex cursor-pointer mx-1">
        <img src={PakistanFlag} className="w-5 h-5 mx-2" />
        <p className="text-sm font-normal  text-neutral-700">Pakistan</p>
      </div>
    </div>
  );
};

export default Banner;
