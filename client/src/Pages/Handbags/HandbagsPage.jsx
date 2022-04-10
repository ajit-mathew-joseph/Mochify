import React from "react";
import "./HandbagsPage.scss";
import ProductCard from "../../Components/ProductCard/ProductCard";

const HandbagsPage = (props) => {
  return (
    <div className="handbags-page">
      {props.handbags ? (props.handbags.map(product => <ProductCard key={product.id} image={product.image} title={product.productName} price={product.productPrice}/>)) : (<></>)}
    </div>
  );
};

export default HandbagsPage;