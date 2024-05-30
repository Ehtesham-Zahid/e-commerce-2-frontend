import SearchIcon from "@mui/icons-material/Search";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/shadcn-components/ui/sheet";

import { X } from "lucide-react";
import { Separator } from "@/shadcn-components/ui/separator";
import ProductCard from "../ProductCard/ProductCard";
import { Button } from "@/shadcn-components/ui/button";

const SearchBar = () => {
  return (
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
  );
};

export default SearchBar;
