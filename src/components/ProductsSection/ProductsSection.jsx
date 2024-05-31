import { useSelector } from "react-redux";
import ProductCard from "../ProductCard/ProductCard";
import Toolbar from "../Toolbar/Toolbar";

const ProductsSection = () => {
  // const products = useSelector((state) => state.products);
  // flex justify-around  flex-wrap overflow-auto gap-y-5  items-center my-5
  const products = useSelector((state) => state.products);
  let sectionClass;
  if (products.gridView === "1") {
    sectionClass = "grid grid-cols-1  p-2 ";
  } else if (products.gridView === "2") {
    sectionClass = "grid grid-cols-2 lg:grid-cols-4 gap-4 p-2 ";
  } else if (products.gridView === "3") {
    sectionClass = "grid grid-cols-3 lg:grid-cols-5 gap-2 p-2";
  } else if (products.gridView === "4") {
    sectionClass = "grid grid-cols-4 lg:grid-cols-6 gap-2 p-2 ";
  }
  return (
    <div className={sectionClass}>
      {products.productsByCategory.map((product) => {
        return (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
            category={product.category}
            color={product.color}
            image={product.imageUrls[0]}
          />
        );
      })}
    </div>
    // <div className="">
    // {/* <Toolbar /> */}
    // </div>
  );
};

export default ProductsSection;
