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
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  setSearchedProducts,
} from "@/store/features/products/productsSlice";
import ProductCardMini from "../ProductCardMini/ProductCardMini";
import { Link } from "react-router-dom";

const SearchBar = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    dispatch(setSearchedProducts(searchQuery));
  }, [searchQuery, dispatch]);

  return (
    <Sheet>
      <SheetTrigger>
        <SearchIcon
          className="mx-2 cursor-pointer transition ease-in-out hover:translate-z-2 hover:scale-110 duration-300"
          onClick={() => dispatch(fetchProducts())}
        />
      </SheetTrigger>

      <SheetContent side="top" className="w-full flex flex-col">
        <div className="flex">
          <SearchIcon className="mx-2 text-neutral-400 mt-1" fontSize="large" />
          <input
            className="border-b border-neutral-400 w-full py-2 outline-none me-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="SEARCH FOR..."
          />
        </div>
        <div className="lg:px-3 xl:px-6 2xl:px-12 mt-3 flex flex-col">
          <p className="font-bold text-black">PRODUCT RESULTS</p>
          <Separator />
          {searchQuery && products.searchedProducts.length === 0 ? (
            <div className="my-5 text-center">
              <p className="text-lg font-semibold">No products found</p>
            </div>
          ) : (
            <>
              <div className="hidden lg:grid grid-cols-5 my-5">
                {products.searchedProducts.slice(0, 5).map((product) => (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    price={product.price}
                    category={product.category}
                    color={product?.variations[0]?.color}
                    image={product?.variations[0]?.imageUrls[0]}
                    image2={product?.variations[0]?.imageUrls[1]}
                    searchBar={true}
                  />
                ))}
              </div>
              <div className="flex flex-col my-5 lg:hidden">
                {products.searchedProducts.slice(0, 5).map((product) => (
                  <ProductCardMini
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    price={product.price}
                    category={product.category}
                    color={product?.variations[0]?.color}
                    image={product?.variations[0]?.imageUrls[0]}
                    searchBar={true}
                  />
                ))}
              </div>
            </>
          )}
          {products.searchedProducts.length > 0 ? (
            <Link
              to={`/search/${searchQuery}`}
              className="w-full flex justify-center"
            >
              <Button>View All Results</Button>
            </Link>
          ) : null}
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
