import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { loadStripe } from "@stripe/stripe-js";

import CheckoutProductCard from "../CheckoutProductCard/CheckoutProductCard";
import AddAddressFormDialog from "../AddAddressFormDialog/AddAddressFormDialog";

import { Button } from "@/shadcn-components/ui/button";
import { Label } from "@/shadcn-components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/shadcn-components/ui/radio-group";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shadcn-components/ui/accordion";
import { Separator } from "@/shadcn-components/ui/separator";

import { logout } from "@/store/features/auth/authSlice";
import {
  createOrderAuth,
  createOrderUnAuth,
} from "@/store/features/order/orderSlice";

const CheckoutForm = () => {
  // -------------VARIABLE DECLARATIONS------------
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const address = useSelector((state) => state.address);
  const cart = useSelector((state) => state.cart);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // --------USE STATES-----------
  const [isLoggedIn, setIsLoggedIn] = useState(!!token); // Ensure this is a boolean
  const [paymentMethod, setPaymentMethod] = useState("Card");
  const [selectedAddress, setSelectedAddress] = useState(
    address.primaryAddress?._id
  );
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [streetAddress, setStreetAddress] = useState("");

  // -----------HANDLERS----------
  const logoutHandler = () => {
    dispatch(logout());
    setIsLoggedIn(false);
  };

  const addressDetails = {
    email,
    firstName,
    lastName,
    address: streetAddress,
    phoneNumber,
    city,
    zipcode,
  };
  const createOrderHandler = () => {
    const authData = {
      paymentMethod,
      addressId: selectedAddress,
      totalPrice: cart.items.totalPrice,
    };

    const unAuthData = {
      paymentMethod,
      addressDetails,
      totalPrice: cart.items.totalPrice,
    };

    token
      ? dispatch(createOrderAuth(authData)).then((result) =>
          result.meta.requestStatus === "fulfilled"
            ? navigate("/order-success")
            : null
        )
      : dispatch(createOrderUnAuth(unAuthData)).then((result) =>
          result.meta.requestStatus === "fulfilled"
            ? navigate("/order-success")
            : null
        );
  };

  const makePaymentHandler = async () => {
    const stripe = await loadStripe(
      "pk_test_51NxvxCJLfoWBZ0rFZ6zvyhiFfF2tmFGCCNC6eIz5wYkGDqVyZsuV1OAPIBSy9UysU5lc1faFUAK8lCli7NcflWrW00ay7a2sZB"
    );

    const body = {
      products: cart?.items?.products,
    };

    const headers = {
      "Content-Type": "application/json",
    };

    const response = await fetch(
      "https://e-commerce-2-backend.vercel.app/api/v1/orders/create-checkout-session/",
      {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      }
    );

    const session = await response.json();

    if (session.id) {
      localStorage.setItem(
        "orderData",
        JSON.stringify({
          paymentMethod,
          addressId: selectedAddress,
          addressDetails,
          totalPrice: cart.items.totalPrice,
          token,
        })
      );

      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (result.error) {
        console.log(result.error);
      }
    } else {
      console.error("Failed to create checkout session");
    }
  };

  return (
    <div className="flex justify-center lg:justify-end">
      <form
        onSubmit={handleSubmit(
          paymentMethod === "Card" ? makePaymentHandler : createOrderHandler
        )}
        className="col-span-1 p-6   w-full md:w-5/6 xl:w-4/5  2xl:w-2/3"
      >
        {isLoggedIn ? (
          <>
            <Accordion
              type="single"
              collapsible
              className="border-b border-gray-400 mb-3"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg text-gray-700 flex items-start">
                  <div className="flex flex-col items-start">
                    <p className="text-gray-500 font-semibold text-sm">
                      Account
                    </p>
                    <p className="text-sm mt-3 no-underline">
                      shamimalick321@gmail.com
                    </p>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-lg">
                  <p
                    className="text-blue-400 text-sm cursor-pointer"
                    onClick={logoutHandler}
                  >
                    Logout
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <RadioGroup
              defaultValue={address.primaryAddress?._id}
              className="mb-6"
            >
              <p className="font-semibold text-2xl mt-3">Address</p>
              {address.addresses?.map((address) => {
                return (
                  <div
                    className="flex items-center space-x-2  border-b border-black rounded-none  px-3  py-2.5"
                    key={address._id}
                    onClick={() => setSelectedAddress(address._id)}
                  >
                    <RadioGroupItem
                      value={address._id}
                      id={address._id}
                      className="me-1"
                    />
                    <Label htmlFor={address._id}>
                      <p className="text-[15px] mb-2.5">
                        {address.firstName} {address.lastName},{address.address}
                      </p>
                      <p className="text-neutral-600 mt-2.5 text-[15px]">
                        {address.city}, {address.zipcode}, PK
                      </p>
                    </Label>
                  </div>
                );
              })}

              <AddAddressFormDialog page="checkout" />
            </RadioGroup>
          </>
        ) : (
          <>
            <div>
              <div className="my-2 flex justify-between">
                <p className="font-semibold text-2xl">Contact</p>
                <Link to="/account/signin">Login</Link>
              </div>
              <div className="mb-2 w-full">
                <input
                  {...register("email", { required: true })}
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border border-gray-400 rounded-md p-2.5 w-full"
                />
                {errors.email && (
                  <p className="text-red-500 font-semibold">Enter the email</p>
                )}
              </div>

              <Separator orientation="horizontal" className="my-6" />
              <p className="font-semibold text-2xl my-3">Delivery</p>
              <div className="flex">
                <div className="mb-6 w-full">
                  <input
                    {...register("firstName", { required: true })}
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="border border-gray-400 rounded-md p-2.5 w-full me-2"
                  />
                  {errors.firstName && (
                    <p className="text-red-500 font-semibold">
                      Enter the First Name
                    </p>
                  )}
                </div>
                <div className="mb-6 w-full">
                  <input
                    {...register("lastName", { required: true })}
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="border border-gray-400 rounded-md p-2.5  w-full ms-2"
                  />
                  {errors.lastName && (
                    <p className="text-red-500 font-semibold">
                      Enter the Last Name
                    </p>
                  )}
                </div>
              </div>
              <div className="mb-6 w-full">
                <input
                  {...register("address", { required: true })}
                  placeholder="Address"
                  value={streetAddress}
                  onChange={(e) => setStreetAddress(e.target.value)}
                  className="border border-gray-400 rounded-md p-2.5  w-full"
                />
                {errors.address && (
                  <p className="text-red-500 font-semibold">
                    Enter the Address
                  </p>
                )}
              </div>
              <input
                placeholder="Apartment, suite, etc(optional)"
                className="border border-gray-400 rounded-md p-2.5 mb-6 w-full"
              />
              <div className="flex ">
                <div className="mb-6 w-full">
                  <input
                    {...register("city", { required: true })}
                    placeholder="City"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="border border-gray-400 rounded-md p-2.5   w-full me-2"
                  />
                  {errors.city && (
                    <p className="text-red-500 font-semibold">Enter the City</p>
                  )}
                </div>
                <div className="mb-6 w-full">
                  <input
                    {...register("zipCode", { required: true })}
                    placeholder="Zip Code"
                    value={zipcode}
                    onChange={(e) => setZipcode(e.target.value)}
                    className="border border-gray-400 rounded-md p-2.5   w-full ms-2"
                  />
                  {errors.zipCode && (
                    <p className="text-red-500 font-semibold">
                      Enter the Zip Code
                    </p>
                  )}
                </div>
              </div>
              <div className="mb-6 w-full">
                <input
                  {...register("phoneNumber", { required: true })}
                  placeholder="Phone Number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="border border-gray-400 rounded-md p-2.5  w-full"
                />
                {errors.phoneNumber && (
                  <p className="text-red-500 font-semibold">
                    Enter the Phone Number
                  </p>
                )}
              </div>
            </div>
            <Separator orientation="horizontal" className="my-6" />
          </>
        )}
        <div>
          <p className="font-semibold text-2xl">Payment</p>
          <p className="text-sm text-gray-400">
            All transactions are secure and encrypted.
          </p>
          <RadioGroup defaultValue="card">
            <div className="flex items-center space-x-2 py-3 cursor-pointer text-lg border-b border-gray-400">
              <RadioGroupItem value="card" id="card" />
              <Label
                htmlFor="card"
                className="text-lg cursor-pointer"
                onClick={() => setPaymentMethod("Card")}
              >
                Debit - Credit Card
              </Label>
            </div>
            <div className="flex items-center space-x-2 py-3 cursor-pointer text-lg border-b border-gray-400">
              <RadioGroupItem value="Cod" id="Cod" />
              <Label
                htmlFor="Cod"
                className="text-lg cursor-pointer"
                onClick={() => setPaymentMethod("Cod")}
              >
                Cash On Delivery
              </Label>
            </div>
          </RadioGroup>
        </div>
        <div className="my-2 flex justify-between mt-8 lg:hidden">
          <p className="font-semibold text-2xl">Total</p>
          <p className="font-semibold text-xl">Rs. {cart?.items?.totalPrice}</p>
        </div>
        <Accordion
          type="single"
          collapsible
          className="border-y border-gray-400 lg:hidden"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg text-gray-700">
              <p className="flex items-center font-bold">
                ORDER SUMMARY({cart?.items?.products?.length})
              </p>
            </AccordionTrigger>
            <AccordionContent className="text-lg">
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
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Button className="w-full my-8" type="submit">
          PAY NOW
        </Button>
      </form>
    </div>
  );
};

export default CheckoutForm;
