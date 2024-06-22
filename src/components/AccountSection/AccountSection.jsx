import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Banner from "../Banner/Banner";
import Header from "../Header/Header";
import AddressCard from "../AddressCard/AddressCard";
import OrderCard from "../OrderCard/OrderCard";
import AddressCardSkeleton from "../AddressCardSkeleton/AddressCardSkeleton";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shadcn-components/ui/table";
import { Button } from "@/shadcn-components/ui/button";

import { logout } from "@/store/features/auth/authSlice";
import {
  fetchAddresses,
  fetchPrimaryAddress,
} from "@/store/features/address/addressSlice";
import { fetchOrders } from "@/store/features/order/orderSlice";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Spinner from "../Spinner/Spinner";
const AccountSection = () => {
  // -----VARIABLES DECALARATION------

  const dispatch = useDispatch();
  const address = useSelector((state) => state.address);
  const order = useSelector((state) => state.order);

  // ----------USE STATES---------

  const [scrolled, setScrolled] = useState(false);

  // ---------USE EFFECTS----------
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

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchAddresses());
    dispatch(fetchPrimaryAddress());
    dispatch(fetchOrders());
  }, []);

  // ---------HANDLERS---------
  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <div className="min-h-screen">
      <Banner />
      <div className={`${scrolled ? "fixed top-0" : ""}`}>
        <Header />
      </div>
      <div className="flex justify-center">
        <div className="w-5/6 xl:w-4/5 2xl:w-3/4  flex flex-col mt-10 ">
          <Link
            to="/account/signin"
            className="text-lg text-red-500 font-semibold cursor-pointer  "
            onClick={logoutHandler}
          >
            <ArrowBackIosIcon fontSize="small" className=" mb-1" /> Logout
          </Link>
          <p className="text-3xl font-medium">Your Account</p>
          <p className="mt-2 mb-5">
            View all your orders and manage your account information.
          </p>
          <div className="flex flex-col lg:flex-row justify-between ">
            {order.loading ? (
              <div className="flex justify-center items-center my-40 w-full">
                <Spinner />
              </div>
            ) : order.orders.length === 0 ? (
              // <div className="flex justify-center w-full mt-36 border-e">
              <p className="text-center font-bold text-2xl w-full my-32 sm:my-40 tracking-wide">
                YOU HAVEN'T PLACED ANY ORDER YET
              </p>
            ) : (
              // </div>
              <Table className="lg:w-11/12 border-b border-black ">
                <TableHeader>
                  <TableRow>
                    <TableHead>ORDER</TableHead>
                    <TableHead>DATE</TableHead>
                    <TableHead>PAYMENT STATUS</TableHead>
                    <TableHead>FULFILLMENT STATUS</TableHead>
                    <TableHead className="text-right">TOTAL</TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {order.orders.map((order) => {
                    return (
                      <OrderCard
                        key={order._id}
                        id={order._id}
                        orderNumber={order.orderNumber}
                        orderStatus={order.status}
                        paymentStatus={order.paymentStatus}
                        totalPrice={order.totalPrice}
                        date={order.createdAt}
                      />
                    );
                  })}
                </TableBody>
              </Table>
            )}
            <div className="mt-4 lg:mt-0">
              {address.loading ? (
                <AddressCardSkeleton />
              ) : (
                <AddressCard
                  firstName={address.primaryAddress?.firstName}
                  lastName={address.primaryAddress?.lastName}
                  phoneNumber={address.primaryAddress?.phoneNumber}
                  address={address.primaryAddress?.address}
                  city={address.primaryAddress?.city}
                  zipcode={address.primaryAddress?.zipcode}
                  country={address.primaryAddress?.country}
                  addressTitle={"PRIMARY ADDRESS"}
                  page="account"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSection;
