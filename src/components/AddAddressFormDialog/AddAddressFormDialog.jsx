/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

import { Button } from "@/shadcn-components/ui/button";
import { Checkbox } from "@/shadcn-components/ui/checkbox";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shadcn-components/ui/dialog";
import { SelectItem } from "@/shadcn-components/ui/select";

import {
  addAddress,
  fetchAddresses,
  updateAddress,
} from "@/store/features/address/addressSlice";

import AddIcon from "@mui/icons-material/Add";

const AddAddressFormDialog = (props) => {
  // -----VARIABLES DECALARATION------
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // ----------USE STATES---------
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [country, setCountry] = useState("");
  const [isPrimary, setIsPrimary] = useState(false);

  // ---------HANDLERS---------
  const onSubmit = () => {
    const data = {
      firstName,
      lastName,
      address,
      phoneNumber,
      city,
      zipcode: zipCode,
      country,
      isPrimary,
    };

    console.log(isPrimary);
    dispatch(addAddress(data)).then((result) => {
      if (result.meta.requestStatus === "fulfilled") {
        dispatch(fetchAddresses());
        document.getElementById("my_modal_1").close();
      }
    });
  };

  return (
    <>
      {props.page === "checkout" ? (
        <p
          className="flex items-center  border-b border-black rounded-none  p-3 cursor-pointer"
          onClick={() => {
            document.getElementById("my_modal_1").showModal();
          }}
        >
          <AddIcon />

          <p className="font-semibold">ADD NEW ADDRESS</p>
        </p>
      ) : (
        <Button
          onClick={() => {
            document.getElementById("my_modal_1").showModal();
          }}
        >
          ADD ADDRESS
        </Button>
      )}

      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <form>
            {/* if there is a button in form, it will close the modal */}
            <p className="font-bold text-[17px] absolute left-6 top-3 ">
              Add Address
            </p>
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-4 top-2  mt"
              onClick={() => document.getElementById("my_modal_1").close()}
              type="button"
            >
              ✕
            </button>
          </form>
          <form
            className="mt-6 "
            // onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col sm:flex-row justify-between mb-3">
              <div className="flex   flex-col mb-3 sm:mb-0">
                <input
                  {...register("firstName", { required: true })}
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="border border-gray-400  rounded-md p-2.5     w-full sm:w-[225px] "
                />{" "}
                {errors.firstName && (
                  <p className="text-red-500 font-semibold text-sm">
                    Enter the First Name
                  </p>
                )}
              </div>
              <div className="flex flex-col ">
                <input
                  {...register("lastName", { required: true })}
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="border border-gray-400  rounded-md p-2.5    w-full  sm:w-[225px] "
                />{" "}
                {errors.lastName && (
                  <p className="text-red-500 font-semibold text-sm">
                    Enter the Last Name
                  </p>
                )}
              </div>
            </div>
            <div className="mb-3">
              <input
                {...register("phoneNumber", { required: true })}
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="border border-gray-400  rounded-md p-2.5   w-full "
              />{" "}
              {errors.lastName && (
                <p className="text-red-500 font-semibold text-sm">
                  Enter the Phone Number
                </p>
              )}
            </div>
            <div className="mb-3">
              <input
                {...register("address", { required: true })}
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="border border-gray-400  rounded-md p-2.5   w-full "
              />{" "}
              {errors.address && (
                <p className="text-red-500 font-semibold text-sm">
                  Enter the Address
                </p>
              )}
            </div>
            {/* <div className="flex mb-3"> */}
            <div className="mb-3">
              <input
                {...register("city", { required: true })}
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="border border-gray-400  rounded-md p-2.5   w-full "
              />
              {errors.city && (
                <p className="text-red-500 font-semibold text-sm">
                  Enter the Address
                </p>
              )}
            </div>
            <div className="mb-3">
              <input
                {...register("zipCode", { required: true })}
                placeholder="Zip Code"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                className="border border-gray-400  rounded-md p-2.5    w-full "
              />
              {errors.zipCode && (
                <p className="text-red-500 font-semibold text-sm">
                  Enter the Zip Code
                </p>
              )}
            </div>
            {/* </div> */}
            <div className="mb-3">
              <input
                {...register("country", { required: true })}
                placeholder="Country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="border border-gray-400  rounded-md p-2.5   w-full "
              />{" "}
              {errors.country && (
                <p className="text-red-500 font-semibold text-sm  ">
                  Enter the Country
                </p>
              )}
            </div>
            <div
              className="flex items-center my-5"
              onClick={() => setIsPrimary(!isPrimary)}
            >
              <Checkbox id="primary" />
              <label htmlFor="primary" className="ms-2 font-semibold">
                Set as primary address
              </label>
            </div>
            {/* <DialogClose asChild> */}
            <Button
              className="w-full"
              type="button"
              onClick={handleSubmit(onSubmit)}
            >
              SAVE ADDRESS
            </Button>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default AddAddressFormDialog;
