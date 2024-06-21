/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import EditAddressFormDialog from "../EditAddressFormDialog/EditAddressFormDialog";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shadcn-components/ui/table";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/shadcn-components/ui/alert-dialog";
import { Checkbox } from "@/shadcn-components/ui/checkbox";
import { Button } from "@/shadcn-components/ui/button";
import {
  deleteAddress,
  fetchAddresses,
  updateAddress,
} from "@/store/features/address/addressSlice";

const AddressCard = (props) => {
  // ========VARIABLE DECLARATIONS----------
  const dispatch = useDispatch();
  const address = useSelector((state) => state.address);

  // ---------HANDLERS-----------

  const deleteAddressHandler = () => {
    dispatch(deleteAddress(props.id)).then((result) => {
      result.meta.requestStatus === "fulfilled"
        ? dispatch(fetchAddresses())
        : null;
    });
  };

  const updateAddressHandler = (e, data) => {
    e.preventDefault();
    console.log("IDDD: ", props.id);
    dispatch(updateAddress({ addressId: props.id, data })).then((result) => {
      if (result.meta.requestStatus === "fulfilled") {
        dispatch(fetchAddresses());
        document.getElementById("my_modal_2").close();
      }
    });
  };

  return (
    <div className="w-full md:w-72 me-10 mb-10">
      <Table className="">
        <TableHeader>
          <TableRow>
            <TableHead>{props.addressTitle}</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {address.addresses.length === 0 ? (
            <p className="mt-8 mb-4 ms-4 font-medium text-[16px]">
              You haven't saved any addresses yet.
            </p>
          ) : (
            <TableRow className="flex flex-col">
              <TableCell className="text-black font-medium text-base ">
                <p>
                  {props.firstName} {props.lastName}
                </p>
                <p>{props.address}</p>
                <p>
                  {props.city}, {props.zipcode}
                </p>
                <p>{props.country}</p>
              </TableCell>
            </TableRow>
          )}

          {props.page === "account" ? (
            <Button className="m-4">
              <Link to="/account/addresses">MANAGE</Link>
            </Button>
          ) : (
            <div className="  flex justify-between px-10 mt-5">
              <EditAddressFormDialog
                id={props.id}
                updateAddressHandler={updateAddressHandler}
              />
              <AlertDialog>
                <AlertDialogTrigger>
                  {" "}
                  <p className="font-semibold cool-link cursor-pointer hover:text-red-500">
                    Delete
                  </p>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Are you absolutely sure?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently delete
                      your address.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction
                      className="bg-red-500 hover:bg-red-600"
                      onClick={deleteAddressHandler}
                    >
                      Continue
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default AddressCard;
