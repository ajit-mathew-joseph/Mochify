import React, { useRef, useState } from "react";
import "./CartCard.scss";
import addSign from "../../Assets/Icons/add-outline.svg";
import removeSign from "../../Assets/Icons/remove-outline.svg";
import deleteSign from "../../Assets/Icons/trash-outline.svg";

const CartCard = (props) => {
  const [cartQuantity, setCartQuantity] = useState(props.quantity);

  const addHandler = (e) => {
    if (cartQuantity < 10) {
      setCartQuantity(cartQuantity + 1);
      props.updateCartItemHandler(e, cartQuantity + 1);
    } else if (cartQuantity >= 10) {
      setCartQuantity(10);
      props.updateCartItemHandler(e, cartQuantity);
    }
  };

  const reduceHandler = (e) => {
    if (cartQuantity > 1) {
      setCartQuantity(cartQuantity - 1);
      props.updateCartItemHandler(e, cartQuantity - 1);
    }
  };

  return (
    <div className="cartCard">
      <div className="cartCard__image--container">
        <img
          className="cartCard__image--image"
          src={require(`../../Assets/Images/${props.image}.jpg`)}
        />
      </div>

      <div className="cartCard__text--container">
        <h4 className="cartCard__text--title">{props.title}</h4>

        <div className="cartCard__price">
          <div className="cartCard__price--text">{"$" + `${props.price}`}</div>
          <div className="cartCard__price--quantity-container">
            <img
              src={removeSign}
              onClick={(e) => reduceHandler(e)}
              className="cartCard__price--icon"
              id={props.id}
            />
            <p className="cartCard__price--display">{cartQuantity}</p>
            <img
              src={addSign}
              onClick={(e) => addHandler(e)}
              className="cartCard__price--icon"
              id={props.id}
            />
          </div>
          <div className="cartCard__price--delete-container">
            <img
              src={deleteSign}
              className="cartCard__price--icon"
              onClick={(e) => props.deleteCartItem(e)}
              id={props.id}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
