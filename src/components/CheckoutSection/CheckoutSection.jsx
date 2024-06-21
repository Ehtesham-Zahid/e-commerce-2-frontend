import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Spinner from "../Spinner/Spinner";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import CheckoutHeader from "../CheckoutHeader/CheckoutHeader";
import CheckoutProductCard from "../CheckoutProductCard/CheckoutProductCard";

import { fetchProductsByVariants } from "@/store/features/cart/cartSlice";
import {
  fetchAddresses,
  fetchPrimaryAddress,
} from "@/store/features/address/addressSlice";

const CheckoutSection = () => {
  // -----------VARIABLE DECLARATIONS-------------

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const products = useSelector((state) => state.products);
  const address = useSelector((state) => state.address);

  // --------USE EFFECTS-------
  useEffect(() => {
    dispatch(fetchProductsByVariants());
    dispatch(fetchPrimaryAddress());
    dispatch(fetchAddresses());
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <CheckoutHeader />
      {address.loading || products.loading ? (
        <div className="flex justify-center  items-center w-screen mt-72">
          <Spinner />
        </div>
      ) : (
        <div className="flex justify-center  ">
          <div className="grid grid-cols-1 lg:grid-cols-2   bg-white w-screen">
            <CheckoutForm />

            <div className="hidden lg:flex justify-start border-s border-black flex-col  bg-gray-300 ps-8 pt-8">
              <div className="w-5/6 xl:w-4/5 2xl:w-2/3">
                <div className=" col-span-1       ">
                  {cart?.items?.products?.map((product) => {
                    return (
                      <CheckoutProductCard
                        key={product._id}
                        title={product.title}
                        selectedSize={product.selectedSize}
                        productPrice={product.productPrice}
                        quantity={product.quantity}
                        color={product.variations[0].color}
                        image={product.variations[0].imageUrls[0]}
                      />
                    );
                  })}
                </div>
                <div className="flex justify-between items-center  ">
                  <p className="font-semibold text-xl m-3 ">Total</p>

                  <p className="font-semibold text-xl my-3">
                    <span className="text-gray-600 text-xs mx-2">PKR</span>Rs.
                    {cart.items.totalPrice}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutSection;
