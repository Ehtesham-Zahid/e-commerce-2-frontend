/* eslint-disable react/prop-types */
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shadcn-components/ui/select";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/shadcn-components/ui/sheet";

import { Separator } from "@/shadcn-components/ui/separator";

import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";

import GridViewIcon from "@mui/icons-material/GridView";
import GridOnIcon from "@mui/icons-material/GridOn";
import ViewCompactIcon from "@mui/icons-material/ViewCompact";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SquareIcon from "@mui/icons-material/Square";
import { useMediaQuery } from "react-responsive";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProductsByCategory,
  setGridView,
} from "@/store/features/products/productsSlice";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Toolbar = (props) => {
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
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  const isMobile = useMediaQuery({ maxWidth: 768 });
  // ---------HANDLERS---------
  const sortProductsHandler = (sort) => {
    dispatch(
      fetchProductsByCategory({ category: products.currentCategory, sort })
    );
  };

  return isMobile ? (
    <div
      className={`w-screen flex ${
        props.searchPage ? "justify-center" : "justify-between"
      }   items-center bg-neutral-100 h-10 z-10 `}
    >
      {!props.searchPage ? (
        <Select
          onValueChange={(value) => sortProductsHandler(value)}
          className={`${props.searchPage ? "hidden" : null}`}
        >
          <SelectTrigger className=" w-[100px] sm:w-[135px]  ">
            {/* <SelectValue placeholder="Sort By" /> */}
            <p>Sort By</p>
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="price-low-to-high">
              Price, low to high
            </SelectItem>
            <SelectItem value="price-high-to-low">
              Price, high to low
            </SelectItem>
            <SelectItem value="alphabetically-A-Z">
              Alphabetically, A-Z
            </SelectItem>
            <SelectItem value="alphabetically-Z-A">
              Alphabetically, Z-A
            </SelectItem>
          </SelectContent>
        </Select>
      ) : null}

      <div className="flex justify-center items-center mx-3 h-full ">
        <SquareIcon
          fontSize="medium"
          className={`mx-1.5 text-neutral-500 cursor-pointer ${
            products.gridView === "1" ? "text-neutral-950" : null
          } `}
          onClick={() => dispatch(setGridView("1"))}
        />
        <GridViewIcon
          className={`mx-1.5 text-neutral-500 cursor-pointer ${
            products.gridView === "2" ? "text-neutral-950" : null
          } `}
          onClick={() => dispatch(setGridView("2"))}
        />
        {/* <Separator orientation="vertical" /> */}
      </div>
      {/* <Separator orientation="vertical" /> */}
      {/* {!props.searchPage ? (
        <Sheet>
          <SheetTrigger className="px-4 sm:px-6 flex items-center  text-neutral-500   hover:text-black ">
            <FilterAltIcon /> Filter(1)
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Are you absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      ) : null} */}
    </div>
  ) : (
    <div
      className={`w-screen flex ${
        props.searchPage ? "justify-center" : "justify-between"
      } items-center bg-neutral-100 h-12  `}
    >
      {/* <div className=""> */}
      <div className="flex justify-center items-center mx-3 h-full ">
        <GridViewIcon
          className={`mx-2 text-neutral-500 cursor-pointer ${
            products.gridView === "2" ? "text-neutral-950" : null
          } `}
          onClick={() => dispatch(setGridView("2"))}
        />
        <GridOnIcon
          className={`mx-2 text-neutral-500 cursor-pointer ${
            products.gridView === "3" ? "text-neutral-950" : null
          } `}
          onClick={() => dispatch(setGridView("3"))}
        />
        <ViewCompactIcon
          className={`me-2 ms-1 text-neutral-500 cursor-pointer ${
            products.gridView === "4" ? "text-neutral-950" : null
          } `}
          fontSize="large"
          onClick={() => dispatch(setGridView("4"))}
        />
        {!props.searchPage ? <Separator orientation="vertical" /> : null}
      </div>
      {!props.searchPage ? (
        <>
          {/* <p className="  flex   ">100 Products</p> */}
          <div className="flex sm:mx-5 h-full">
            <Separator orientation="vertical" />
            <Select onValueChange={(value) => sortProductsHandler(value)}>
              <SelectTrigger className=" w-[100px] sm:w-[135px]">
                {/* <SelectValue placeholder="Sort By" /> */}
                <p>Sort By</p>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="price-low-to-high">
                  Price, low to high
                </SelectItem>
                <SelectItem value="price-high-to-low">
                  Price, high to low
                </SelectItem>
                <SelectItem value="alphabetically-A-Z">
                  Alphabetically, A-Z
                </SelectItem>
                <SelectItem value="alphabetically-Z-A">
                  Alphabetically, Z-A
                </SelectItem>
              </SelectContent>
            </Select>
            {/* <Separator orientation="vertical" /> */}
            {/* <Sheet>
              <SheetTrigger className="px-4 sm:px-6 flex items-center  text-neutral-500 hover:text-black ">
                <FilterAltIcon /> Filter(1)
              </SheetTrigger>
              <SheetContent className="w-80">
                <SheetHeader>
                  <SheetTitle>Are you absolutely sure?</SheetTitle>
                  <SheetDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet> */}
          </div>{" "}
        </>
      ) : null}
    </div>
  );
};

export default Toolbar;
