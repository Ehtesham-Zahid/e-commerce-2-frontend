import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import Header from "../Header/Header";

// import { Button } from "@/shadcn-components/ui/button";
import AddressCard from "../AddressCard/AddressCard";
import AddressFormDialog from "../AddressFormDialog/AddressFormDialog";

const AddressesSection = () => {
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
        <div className="w-5/6 xl:w-4/5 2xl:w-3/4 flex flex-col mt-10 ">
          <p className="text-3xl font-medium">ADDRESSES</p>
          <div className="my-5">
            <AddressFormDialog action="Add" />
          </div>
          <div className="flex justify-start  flex-wrap overflow-auto gap-y-5  items-center my-5">
            <AddressCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressesSection;
