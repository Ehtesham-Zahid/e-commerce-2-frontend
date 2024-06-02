/* eslint-disable react/prop-types */
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

const AddressFormDialog = (props) => {
  return (
    <Dialog>
      <DialogTrigger>
        {" "}
        {props.action === "Edit" ? (
          <p className="font-semibold cool-link cursor-pointer hover:text-blue-500">
            {props.action}
          </p>
        ) : (
          <Button>ADD ADDRESS</Button>
        )}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="">{props.action} Address</DialogTitle>
          <div className=" ">
            <input
              placeholder="First Name"
              className="border border-gray-400  rounded-md p-2 mb-3 mt-4 w-full "
            />{" "}
            <input
              placeholder="Last Name"
              className="border border-gray-400  rounded-md p-2 mb-3 w-full "
            />{" "}
            <input
              placeholder="Phone Number"
              className="border border-gray-400  rounded-md p-2 mb-3 w-full "
            />{" "}
            <input
              placeholder="Address"
              className="border border-gray-400  rounded-md p-2 mb-3 w-full "
            />{" "}
            <div>
              <input
                placeholder="City"
                className="border border-gray-400  rounded-md p-2 mb-3 w-full "
              />
              <input
                placeholder="Postal Code"
                className="border border-gray-400  rounded-md p-2 mb-3 w-full "
              />
            </div>
            <div className="flex items-center my-5">
              <Checkbox />
              <p className="ms-2 font-medium">Set as default address</p>
            </div>
            <DialogClose asChild>
              <Button className="w-full">SAVE ADDRESS</Button>
            </DialogClose>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default AddressFormDialog;
