import React, { useRef, useState } from "react";
import "./ProductCard.scss";
import heartOutline from "../../Assets/Icons/heart-outline.svg";
import addSign from "../../Assets/Icons/add-outline.svg";
import removeSign from "../../Assets/Icons/remove-outline.svg";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  const [quantity, setQuantity] = useState(1);

  const addHandler = () => {
    if (quantity < 10) {
      setQuantity(quantity + 1);
    }
  };

  const reduceHandler = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="productCard">
      <div className="productCard__image--container">
        <Link to="/">
          <img className="productCard__image--image" src={require(`../../Assets/Images/${props.image}.jpg`)} />
        </Link>
      </div>

      <div className="productCard__text--container">
        <h4 className="productCard__text--title">{props.title}</h4>
        <img className="productCard__text--icon" src={heartOutline} />
      </div>

      <div className="productCard__price">
        <div className="productCard__price--text">{'$' + `${props.price}`}</div>
        <div className="productCard__price--quantity-container">
          <img
            src={removeSign}
            onClick={reduceHandler}
            className="productCard__price--icon"
          />
          <p className="productCard__price--display">{quantity}</p>
          <img
            src={addSign}
            onClick={addHandler}
            className="productCard__price--icon"
          />
        </div>
        <button className="productCard__price--button">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
