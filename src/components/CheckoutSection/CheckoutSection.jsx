import { useDispatch, useSelector } from "react-redux";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import CheckoutHeader from "../CheckoutHeader/CheckoutHeader";
import CheckoutProductCard from "../CheckoutProductCard/CheckoutProductCard";

import { useEffect } from "react";
import { fetchProductsByVariants } from "@/store/features/cart/cartSlice";
import {
  fetchAddresses,
  fetchPrimaryAddress,
} from "@/store/features/address/addressSlice";
import Spinner from "../Spinner/Spinner";

const CheckoutSection = () => {
  const cart = useSelector((state) => state.cart);
  const products = useSelector((state) => state.products);
  const address = useSelector((state) => state.address);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsByVariants());
    dispatch(fetchPrimaryAddress());
    dispatch(fetchAddresses());
  }, []);
  return (
    <div>
      <CheckoutHeader />
      {address.loading || products.loading ? (
        <Spinner />
      ) : (
        <div className="flex justify-center  ">
          <div className="grid grid-cols-1 lg:grid-cols-2   bg-white w-screen">
            {/* <div className=""> */}
            <CheckoutForm />
            {/* </div> */}
            <div className="hidden lg:flex justify-start border-s border-black flex-col  bg-gray-200 ps-8 pt-8">
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
                  {/* <CheckoutProductCard />
                <CheckoutProductCard />
                <CheckoutProductCard />
                <CheckoutProductCard />
                <CheckoutProductCard /> */}
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
