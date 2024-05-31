import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import Header from "../Header/Header";

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

const AccountSection = () => {
  // -----VARIABLES DECALARATION------

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

  return (
    <div className="min-h-screen">
      <Banner />
      <div className={`${scrolled ? "fixed top-0" : ""}`}>
        <Header />
      </div>
      <div className="flex justify-center">
        <div className="w-5/6 xl:w-4/5 2xl:3/4 flex flex-col mt-10 ">
          <p className="text-3xl font-medium">Your Account</p>
          <p className="mt-2 mb-5">
            View all your orders and manage your account information.
          </p>
          <div className="flex flex-col lg:flex-row justify-between w-full">
            <Table className="lg:w-11/12 border-b border-black">
              {/* <TableCaption>A list of your recent orders.</TableCaption> */}
              <TableHeader>
                <TableRow>
                  {/* <TableHead className="w-[100px]">Invoice</TableHead> */}
                  <TableHead>ORDER</TableHead>
                  <TableHead>DATE</TableHead>
                  <TableHead>PAYMENT STATUS</TableHead>
                  <TableHead>FULFILLMENT STATUS</TableHead>
                  <TableHead className="text-right">TOTAL</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  {/* <TableCell className="font-medium">INV001</TableCell> */}
                  <TableCell>#1845064</TableCell>
                  <TableCell>Febrary 6, 2024</TableCell>
                  <TableCell>Pending</TableCell>
                  <TableCell>Fullfilled</TableCell>
                  <TableCell className="text-right">Rs.2,000</TableCell>
                </TableRow>
                <TableRow>
                  {/* <TableCell className="font-medium">INV001</TableCell> */}
                  <TableCell>#1845064</TableCell>
                  <TableCell>Febrary 6, 2024</TableCell>
                  <TableCell>Pending</TableCell>
                  <TableCell>Fullfilled</TableCell>
                  <TableCell className="text-right">Rs.2,000</TableCell>
                </TableRow>
                <TableRow>
                  {/* <TableCell className="font-medium">INV001</TableCell> */}
                  <TableCell>#1845064</TableCell>
                  <TableCell>Febrary 6, 2024</TableCell>
                  <TableCell>Pending</TableCell>
                  <TableCell>Fullfilled</TableCell>
                  <TableCell className="text-right">Rs.2,000</TableCell>
                </TableRow>{" "}
                <TableRow>
                  {/* <TableCell className="font-medium">INV001</TableCell> */}
                  <TableCell>#1845064</TableCell>
                  <TableCell>Febrary 6, 2024</TableCell>
                  <TableCell>Pending</TableCell>
                  <TableCell>Fullfilled</TableCell>
                  <TableCell className="text-right">Rs.2,000</TableCell>
                </TableRow>{" "}
                <TableRow>
                  {/* <TableCell className="font-medium">INV001</TableCell> */}
                  <TableCell>#1845064</TableCell>
                  <TableCell>Febrary 6, 2024</TableCell>
                  <TableCell>Pending</TableCell>
                  <TableCell>Fullfilled</TableCell>
                  <TableCell className="text-right">Rs.2,000</TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <div>
              <Table className=" w-72">
                {/* <TableCaption>A list of your recent orders.</TableCaption> */}
                <TableHeader>
                  <TableRow>
                    {/* <TableHead className="w-[100px]">Invoice</TableHead> */}
                    <TableHead>PRIMARY ADDRESS</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="flex flex-col">
                    {/* <TableCell className="font-medium">INV001</TableCell> */}
                    <TableCell className="text-black font-semibold text-base ">
                      Ehtesham Zahid Abbas park lane no.1 pattoki Pattoki 55300
                      Pakistan
                    </TableCell>
                  </TableRow>
                  <Button className="m-4">MANAGE</Button>
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSection;
