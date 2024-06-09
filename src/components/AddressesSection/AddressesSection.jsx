import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import Header from "../Header/Header";

// import { Button } from "@/shadcn-components/ui/button";
import AddressCard from "../AddressCard/AddressCard";
import AddressFormDialog from "../EditAddressFormDialog/EditAddressFormDialog";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAddresses,
  fetchPrimaryAddress,
} from "@/store/features/address/addressSlice";
import AddAddressFormDialog from "../AddAddressFormDialog/AddAddressFormDialog";

const AddressesSection = () => {
  // -----VARIABLES DECALARATION------
  const dispatch = useDispatch();

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

  useEffect(() => {
    dispatch(fetchAddresses());
  }, []);

  const address = useSelector((state) => state.address);

  return (
    <div className="min-h-screen">
      <Banner />
      <div className={`${scrolled ? "fixed top-0" : ""}`}>
        <Header />
      </div>
      {address.addresses.length === 0 ? (
        <div className="flex flex-col justify-center items-center h-screen pb-44">
          {" "}
          <p className="mb-5 font-bold text-lg">ADDRESSES</p>
          <p className="mb-6 font-medium">
            You haven't saved any addresses yet.
          </p>
          <AddAddressFormDialog />
        </div>
      ) : (
        <div className="flex justify-center">
          <div className="w-5/6 xl:w-4/5 2xl:w-3/4 flex flex-col mt-10 ">
            <p className="text-3xl font-medium">ADDRESSES</p>
            <div className="my-5">
              <AddAddressFormDialog />{" "}
            </div>
            <div className="flex justify-start  flex-wrap overflow-auto gap-y-5  items-center my-5">
              {address.addresses.map((address, index) => {
                return (
                  <AddressCard
                    key={address._id}
                    id={address._id}
                    mainhunidteri={address._id}
                    firstName={address.firstName}
                    lastName={address.lastName}
                    phoneNumber={address.phoneNumber}
                    address={address.address}
                    city={address.city}
                    zipcode={address.zipcode}
                    country={address.country}
                    addressTitle={` ${
                      address.isPrimary
                        ? "PRIMARY ADDRESS"
                        : `ADDRESS ${index + 1}`
                    } `}
                  />
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddressesSection;
