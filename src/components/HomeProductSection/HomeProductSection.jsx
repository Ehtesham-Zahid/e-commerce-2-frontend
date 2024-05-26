import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import ProductCard from "../ProductCard/ProductCard";
import { Link } from "react-router-dom";

const HomeProductSection = (props) => {
  return (
    <div className="w-screen px-2 sm:px-5  lg:px-20">
      <div className="flex justify-between items-center  mt-10 mb-5">
        <p className="text-2xl sm:text-3xl font-semibold text-start">
          <strong className="text-stone-400">IRON</strong>WEAR{" "}
          {props.sectionTitle}
        </p>
        <Link
          to={props.page}
          className="mt-1 sm:mt-0  sm:me-4 font-semibold  min-[500px]:text-lg cool-link cursor-pointer"
        >
          View All <ArrowRightAltIcon fontSize="large" />
        </Link>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-2 my-5">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default HomeProductSection;
