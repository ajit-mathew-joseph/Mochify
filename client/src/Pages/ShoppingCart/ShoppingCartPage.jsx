import React, { useState, useEffect } from "react";
import CartCard from "../../Components/CartCard/CartCard";
import "./ShoppingCartPage.scss";

const ShoppingCartPage = (props) => {

  return (
    <div className="shopping-cart">
      <h3 className="shopping-cart__title">Your Cart</h3>
      <div className="shopping-cart__card-container">
        {props.cartList.length ? (
          props.cartList.map((product) => (
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
          <>
            <p className="shopping-cart__empty-cart">Your Cart is Empty</p>
          </>
        )}
      </div>

      <div className="shopping-cart__cartTotalContainer">
        <h3 className="shopping-cart__cartTotalContainer-title">Summary</h3>
        <div className="shopping-cart__cartTotalContainer-text">
          <p className="shopping-cart__cartTotalContainer-subTitle">PST</p>
          <p className="shopping-cart__cartTotalContainer-price">
            {"$" + `${props.gstVal.toFixed(2)}`}
          </p>
        </div>

        <div className="shopping-cart__cartTotalContainer-text">
          <p className="shopping-cart__cartTotalContainer-subTitle">GST</p>
          <p className="shopping-cart__cartTotalContainer-price">
            {"$" + `${props.pstVal.toFixed(2)}`}
          </p>
        </div>

        <div className="shopping-cart__cartTotalContainer-text">
          <p className="shopping-cart__cartTotalContainer-subTitle">Total</p>
          <p className="shopping-cart__cartTotalContainer-price">
            {"$" + `${props.total.toFixed(2)}`}
          </p>
        </div>

        <button
          className="shopping-cart__cartTotalContainer-button"
          onClick={props.cartHistoryHandler}
        >
          Check Out
        </button>
      </div>
    </div>
  );
};

export default ShoppingCartPage;
