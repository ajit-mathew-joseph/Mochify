import React from "react";
import "./ProductCard.scss";

const ProductCard = (props) => {
  return (
    <div className="productCard">
      <div className="productCard__image--container">
        <img src="#" className="productCard__image--image" />
      </div>

      <div className="productCard__text--container">
          <h4 className="productCard__text--title"></h4>
          </div>
    </div>
  );
};

export default ProductCard;
