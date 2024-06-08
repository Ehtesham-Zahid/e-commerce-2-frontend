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
import AddressFormDialog from "../AddressFormDialog/AddressFormDialog";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  deleteAddress,
  fetchAddresses,
} from "@/store/features/address/addressSlice";

const AddressCard = (props) => {
  const dispatch = useDispatch();
  const deleteAddressHandler = () => {
    dispatch(deleteAddress(props.id)).then((result) => {
      result.meta.requestStatus === "fulfilled"
        ? dispatch(fetchAddresses())
        : null;
    });
  };
  return (
    <div className="w-full md:w-72 me-10 mb-10">
      <Table className="">
        {/* <TableCaption>A list of your recent orders.</TableCaption> */}
        <TableHeader>
          <TableRow>
            {/* <TableHead className="w-[100px]">Invoice</TableHead> */}
            <TableHead>{props.addressTitle}</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className="flex flex-col">
            {/* <TableCell className="font-medium">INV001</TableCell> */}
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
          {props.page === "account" ? (
            <Button className="m-4">
              <Link to="/account/addresses">MANAGE</Link>
            </Button>
          ) : (
            <div className="  flex justify-between px-10 mt-5">
              <AddressFormDialog action="Edit" />
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
