import { useSelector } from "react-redux";

import ProductCard from "../ProductCard/ProductCard";
import Spinner from "../Spinner/Spinner";

const ProductsSection = () => {
  // ----------VARIABLE DECLARATION---------
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
      {products.loading ? (
        <div className="flex justify-center items-center w-screen  mt-52 md:mt-64">
          <Spinner />
        </div>
      ) : (
        products.productsByCategory?.map((product) => {
          return product.variations?.length > 1 ? (
            <>
              <ProductCard
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                category={product.category}
                color={product?.variations[0]?.color}
                image={product?.variations[0]?.imageUrls[0]}
                image2={product?.variations[0]?.imageUrls[1]}
              />
              <ProductCard
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                category={product.category}
                color={product?.variations[1]?.color}
                image={product?.variations[1]?.imageUrls[0]}
                image2={product?.variations[1]?.imageUrls[1]}
              />
            </>
          ) : (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              category={product.category}
              color={product?.variations[0]?.color}
              image={product?.variations[0]?.imageUrls[0]}
              image2={product?.variations[0]?.imageUrls[1]}
            />
          );
        })
      )}
    </div>
  );
};

export default ProductsSection;
