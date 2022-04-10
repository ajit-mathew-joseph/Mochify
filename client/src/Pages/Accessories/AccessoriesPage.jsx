import React from "react";
import "./AccessoriesPage.scss";
import ProductCard from "../../Components/ProductCard/ProductCard";

const AccessoriesPage = (props) => {
  return (
    <div className="accessories-page">
      {props.accessories ? (props.accessories.map(product => <ProductCard key={product.id} image={product.image} title={product.productName} price={product.productPrice}/>)) : (<></>)}
    </div>
  );
};

export default AccessoriesPage;