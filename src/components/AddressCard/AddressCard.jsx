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

const AddressCard = () => {
  return (
    <div className="w-full md:w-72 me-10 mb-10">
      <Table className="">
        {/* <TableCaption>A list of your recent orders.</TableCaption> */}
        <TableHeader>
          <TableRow>
            {/* <TableHead className="w-[100px]">Invoice</TableHead> */}
            <TableHead>DEFAULT ADDRESS</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className="flex flex-col">
            {/* <TableCell className="font-medium">INV001</TableCell> */}
            <TableCell className="text-black font-medium text-base ">
              <p>Ehtesham Zahid</p>
              <p>Abbas Park lnae no1</p>
              <p>Pattoki, 55300</p>
              <p>Pakistan</p>
            </TableCell>
          </TableRow>
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
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete
                    your address.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction className="bg-red-500 hover:bg-red-600">
                    Continue
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
          {/* <Button className="m-4">MANAGE</Button> */}
        </TableBody>
      </Table>
    </div>
  );
};

export default AddressCard;
