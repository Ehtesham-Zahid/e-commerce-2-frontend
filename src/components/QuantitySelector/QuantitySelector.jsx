import React from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const QuantitySelector = () => {
  return (
    <div className="flex border items-center justify-around   border-gray-300 w-24 py-1 ">
      <p className="">
        <RemoveIcon fontSize="xs" className="text-gray-400 cursor-pointer" />
      </p>
      <p className="">10</p>
      <p className=" ">
        <AddIcon fontSize="xs" className="text-gray-400 cursor-pointer" />
      </p>
    </div>
  );
};

export default QuantitySelector;
