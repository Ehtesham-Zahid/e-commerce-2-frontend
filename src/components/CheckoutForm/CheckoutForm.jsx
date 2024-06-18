import { Button } from "@/shadcn-components/ui/button";
import { Input } from "@/shadcn-components/ui/input";
import { Label } from "@/shadcn-components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/shadcn-components/ui/radio-group";
import AddIcon from "@mui/icons-material/Add";
// import { Select } from "@/shadcn-components/ui/select";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/shadcn-components/ui/select";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shadcn-components/ui/accordion";
import { Separator } from "@/shadcn-components/ui/separator";
import CheckoutProductCard from "../CheckoutProductCard/CheckoutProductCard";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/store/features/auth/authSlice";
import { Link, useNavigate } from "react-router-dom";
import AddAddressFormDialog from "../AddAddressFormDialog/AddAddressFormDialog";
import {
  createOrderAuth,
  createOrderUnAuth,
} from "@/store/features/order/orderSlice";
import { fetchAddress } from "@/store/features/address/addressSlice";
import { useForm } from "react-hook-form";

const CheckoutForm = () => {
  const dispatch = useDispatch();
  const address = useSelector((state) => state.address);
  const cart = useSelector((state) => state.cart);
  const token = localStorage.getItem("token");
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
  // const [country, setCountry] = useState("");
  const [streetAddress, setStreetAddress] = useState("");

  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(logout());
    setIsLoggedIn(false);
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // const cartItems = JSON.parse(localStorage.getItem("cart"));

  // Function to remove a property from all objects in the array
  // const removeProperty = (arr, propToRemove) => {
  //   return arr?.map(({ [propToRemove]: _, ...rest }) => rest);
  // };

  // Remove the 'selectedSize' property from all objects
  // const arrayWithoutProperty = removeProperty(cartItems, "selectedSize");

  const addressDetails = {
    email,
    firstName,
    lastName,
    address: streetAddress,
    phoneNumber,
    city,
    zipcode,
  };
  const createOrderHandler = (e) => {
    // e.preventDefault();

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

    console.log(selectedAddress);

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

    // dispatch(createOrderAuth(authData));
  };

  // const onSubmit = () => {};
  return (
    <div className="flex justify-center lg:justify-end">
      <form
        onSubmit={handleSubmit(createOrderHandler)}
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
                  <p className="text-red-500 font-semibold">Enter the City</p>
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
          <p className="font-semibold text-xl">Rs. 6,850.00</p>
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
