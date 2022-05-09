import React from "react";
import "./OrderHistory.scss";
import CartCard from "../../Components/CartCard/CartCard";

const OrderHistory = (props) => {
  return (
    <div className="header-mobile__slidingMenu--cartContainer">
      {props.cartHistory ? (
        props.cartHistory.map((product) => (
          <CartCard
            key={product.id}
            id={product.id}
            image={product.image}
            title={product.productName}
            price={product.productPrice}
            quantity={product.quantity}
            updateCartItemHandler={props.updateCartItemHandler}
            deleteCartItem={props.deleteCartItem}
          />
        ))
      ) : (
        <></>
      )}
    </div>
  );
};

export default OrderHistory;
