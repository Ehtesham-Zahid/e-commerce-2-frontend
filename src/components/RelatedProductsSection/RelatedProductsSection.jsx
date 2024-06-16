/* eslint-disable react/prop-types */
import { fetchProductsByCategory } from "@/store/features/products/productsSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../ProductCard/ProductCard";
import Spinner from "../Spinner/Spinner";

const RelatedProductsSection = () => {
  const products = useSelector((state) => state.products);

  return (
    <div>
      <p className="text-2xl text-center font-semibold">RELATED PRODUCTS</p>
      {products.loading ? (
        <div className="flex justify-center items-center  ">
          <Spinner />
        </div>
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-2">
          {products.productsByCategory?.slice(0, 4)?.map((product) => {
            return (
              <ProductCard
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                // description={product.description}
                category={product.category}
                color={product?.variations[0]?.color}
                image={product?.variations[0]?.imageUrls[0]}
                image2={product?.variations[0]?.imageUrls[1]}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default RelatedProductsSection;
