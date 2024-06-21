/* eslint-disable react/prop-types */
import { format, parseISO } from "date-fns";

import { TableCell, TableRow } from "@/shadcn-components/ui/table";

const OrderCard = (props) => {
  // ---------VARIABLE DECLARATIONS----------

  // Parse the ISO date string
  const date = parseISO(props.date);

  // Format the date
  const formattedDate = format(date, "MMMM d, yyyy");

  return (
    <TableRow>
      <TableCell>{props.orderNumber}</TableCell>
      <TableCell>{formattedDate}</TableCell>
      <TableCell>{props.paymentStatus}</TableCell>
      <TableCell>{props.orderStatus}</TableCell>
      <TableCell className="text-right">Rs.{props.totalPrice}</TableCell>
    </TableRow>
  );
};

export default OrderCard;
