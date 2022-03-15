import React from "react";
import "./ProductsPage.scss";
import ProductCard from "../../Components/ProductCard/ProductCard";

const ProductsPage = (props) => {
  return (
    <div className="products-page">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
};

export default ProductsPage;
