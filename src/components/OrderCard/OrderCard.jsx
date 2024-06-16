/* eslint-disable react/prop-types */
import { TableCell, TableRow } from "@/shadcn-components/ui/table";
import React from "react";
import { format, parseISO } from "date-fns";
const OrderCard = (props) => {
  // Parse the ISO date string
  const date = parseISO(props.date);

  // Format the date
  const formattedDate = format(date, "MMMM d, yyyy");

  return (
    <TableRow>
      {/* <TableCell className="font-medium">INV001</TableCell> */}
      <TableCell>#{props.id}</TableCell>
      <TableCell>{formattedDate}</TableCell>
      <TableCell>{props.paymentStatus}</TableCell>
      <TableCell>{props.orderStatus}</TableCell>
      <TableCell className="text-right">Rs.{props.totalPrice}</TableCell>
    </TableRow>
  );
};

export default OrderCard;
