import React, { useState, useRef, useEffect } from "react";
import "./NavBar.scss";
import MochifyLogo from "../../Assets/Logo/Mochify.png";
import MenuIconOutline from "../../Assets/Icons/menu-outline.svg";
import CartIconOutline from "../../Assets/Icons/cart-outline.svg";
import SearchIconOutline from "../../Assets/Icons/search-outline.svg";
import CloseOutline from "../../Assets/Icons/close-outline.svg";
import HeartOutline from "../../Assets/Icons/heart-outline.svg";
import AddOutline from "../../Assets/Icons/person-add-outline.svg";
import HistoryOutline from "../../Assets/Icons/reader-outline.svg";
import PersonOutline from "../../Assets/Icons/person-outline.svg";
import NewArrivals from "../../Assets/Banners/New-Arrivals-Menu";
import Plushies from "../../Assets/Banners/30-Off-Plushies-Menu";
import dropDownImg from "../../Assets/Images/Nav/dropDown.png";
import { Link } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import CartCard from "../CartCard/CartCard";

const NavBar = (props) => {
  return (
    <div className="header-container">
      <div className="header-mobile">
        <img
          className="header-mobile__menu"
          src={MenuIconOutline}
          onClick={props.slidingMenuHandler}
        />
        {props.slidingMenu ? (
          <div ref={props.menuRef} className="header-mobile__slidingMenu">
            <div className="header-mobile__slidingMenu--close-container">
              <img
                className="header-mobile__slidingMenu--close-icon"
                onClick={props.slidingMenuHandler}
                src={CloseOutline}
              />
            </div>
            <ul className="header-mobile__slidingMenu--container">
              <Link
                className="header-mobile__slidingMenu--link"
                to="/products/accessories"
              >
                <li className="header-mobile__slidingMenu--link-text">
                  Accessories
                </li>
              </Link>
              <Link
                className="header-mobile__slidingMenu--link"
                to="/products/handbags"
              >
                <li className="header-mobile__slidingMenu--link-text">
                  Handbags
                </li>
              </Link>
              <Link
                className="header-mobile__slidingMenu--link"
                to="/products/makeup"
              >
                <li className="header-mobile__slidingMenu--link-text">
                  Makeup
                </li>
              </Link>
              <Link
                className="header-mobile__slidingMenu--link"
                to="/products/mugs"
              >
                <li className="header-mobile__slidingMenu--link-text">Mugs</li>
              </Link>
              <Link
                className="header-mobile__slidingMenu--link"
                to="/products/plush"
              >
                <li className="header-mobile__slidingMenu--link-text">
                  Plushies
                </li>
              </Link>
            </ul>

            <div className="header-mobile__slidingMenu--divider">
              <img
                className="header-mobile__slidingMenu--banner"
                src={NewArrivals}
              />
              <img
                className="header-mobile__slidingMenu--banner2"
                src={Plushies}
              />
            </div>

            <ul className="header-mobile__slidingMenu--container2">
              {props.user ? (
                <>
                  <Link
                    className="header-mobile__slidingMenu--link2"
                    to="/myAccount"
                  >
                    <img
                      className="header-mobile__slidingMenu--icon"
                      src={PersonOutline}
                    />
                    <li className="header-mobile__slidingMenu--link-text2">
                      My Account
                    </li>
                  </Link>
                  <Link
                    className="header-mobile__slidingMenu--link2"
                    to="/orderHistory"
                  >
                    <img
                      className="header-mobile__slidingMenu--icon"
                      src={HistoryOutline}
                    />
                    <li className="header-mobile__slidingMenu--link-text2">
                      Order History
                    </li>
                  </Link>
                  <Link
                    className="header-mobile__slidingMenu--link2"
                    to="/myWishlist"
                  >
                    <img
                      className="header-mobile__slidingMenu--icon"
                      src={HeartOutline}
                    />
                    <li className="header-mobile__slidingMenu--link-text2">
                      My Wishlist
                    </li>
                  </Link>

                  <Link
                    className="header-mobile__slidingMenu--link2"
                    to="/"
                    onClick={props.logout}
                  >
                    <img
                      className="header-mobile__slidingMenu--icon"
                      src={PersonOutline}
                    />
                    <li className="header-mobile__slidingMenu--link-text2">
                      Log Out
                    </li>
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    className="header-mobile__slidingMenu--link2"
                    to="/signup"
                  >
                    <img
                      className="header-mobile__slidingMenu--icon"
                      src={AddOutline}
                    />
                    <li className="header-mobile__slidingMenu--link-text2">
                      Sign Up
                    </li>
                  </Link>

                  <Link
                    className="header-mobile__slidingMenu--link2"
                    to="/signin"
                    onClick={props.slidingMenuHandler}
                  >
                    <img
                      className="header-mobile__slidingMenu--icon"
                      src={PersonOutline}
                    />
                    <li className="header-mobile__slidingMenu--link-text2">
                      Log In
                    </li>
                  </Link>

                  <Link
                    className="header-mobile__slidingMenu--link2"
                    to="/orderHistory"
                  >
                    <img
                      className="header-mobile__slidingMenu--icon"
                      src={HistoryOutline}
                    />
                    
                    <li className="header-mobile__slidingMenu--link-text2">
                      Order History
                    </li>
                  </Link>
                  <Link
                    className="header-mobile__slidingMenu--link2"
                    to="/myWishlist"
                  >
                    <img
                      className="header-mobile__slidingMenu--icon"
                      src={HeartOutline}
                    />
                    <li className="header-mobile__slidingMenu--link-text2">
                      My Wishlist
                    </li>
                  </Link>
                </>
              )}
            </ul>
          </div>
        ) : (
          <div className="header-mobile__slidingMenu--close">
            <div className="header-mobile__slidingMenu--close-container">
              <img
                className="header-mobile__slidingMenu--close-icon"
                onClick={props.slidingMenuHandler}
                src={CloseOutline}
              />
            </div>
          </div>
        )}
        <Link className="header-mobile__logo-link" to="/">
          <img className="header-mobile__logo" src={MochifyLogo} />
        </Link>
        <>
          <div className="header-mobile__options-container">
            <img
              className="header-mobile__options-search"
              src={SearchIconOutline}
              onClick={props.showMobSearchHandler}
            />
            <img
              className="header-mobile__options-cart"
              src={CartIconOutline}
              onClick={props.showCartMobSlideHandler}
            />

            {props.cartMobMenu ? (
              <div
                ref={props.cartMobRef}
                className="header-mobile__slidingMenu--cart"
              >
                <img
                  className="header-mobile__slidingMenu--cartClose-icon"
                  onClick={props.showCartMobSlideHandler}
                  src={CloseOutline}
                />
                <h3 className="header-mobile__slidingMenu--cartTitle">
                  Your Cart
                </h3>
                <div className="header-mobile__slidingMenu--cartContainer">
                  {props.cartList ? (
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
                    <></>
                  )}
                </div>

                <div className="header-mobile__slidingMenu--cartSubTotalContainer">
                  <div className="header-mobile__slidingMenu--cartSubTotalContainer-text">
                    <p className="header-mobile__slidingMenu--cartSubTotalContainer-title">
                      Total
                    </p>
                    <p className="header-mobile__slidingMenu--cartSubTotalContainer-price">
                      {"$" + `${props.subTotal.subTotal.toFixed(2)}`}
                    </p>
                  </div>
                  <button
                    className="header-mobile__slidingMenu--cartSubTotalContainer-button"
                    disabled={!props.checkoutToggle}
                    onClick={props.shoppingCartHandler}
                  >
                    Check Out
                  </button>
                </div>
              </div>
            ) : (
              <div
                ref={props.cartMobRef}
                className="header-mobile__slidingMenu--closeCart"
              ></div>
            )}
          </div>

          {props.showMobSearch ? (
            <>
              <div className="header-mobile__options-search--container">
                <div className="header-mobile__options-search--subContainer">
                  <input
                    ref={props.mobSearchRef}
                    type="text"
                    className="header-mobile__options-search--bar"
                    placeholder="Search for..."
                    onKeyDown={(e) => console.log(e)}
                    onChange={(e) => props.searchFunc(e.target.value)}
                  />
                  <button className="header-mobile__options-search--button">
                    Search
                  </button>
                </div>
                {props.query ? (
                  <div className="header-mobile__options-search--results">
                    {props.query.length !== 0 ? (
                      <h3 className="header-mobile__options-search--results-title">
                        Here are a few results
                      </h3>
                    ) : (
                      <h3 className="header-mobile__options-search--results-title">
                        No Results Found
                      </h3>
                    )}
                    {props.query.splice(0, 3).map((product) => (
                      <ProductCard
                        key={product.id}
                        image={product.image}
                        title={product.productName}
                        price={product.productPrice}
                      />
                    ))}
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </>
          ) : (
            <></>
          )}
        </>
      </div>

      {props.slidingMenu ? (
        <div className="header-mobile__overlay"></div>
      ) : (
        <div></div>
      )}

      <nav className="header-desktop">
        <div className="header-desktop__logo-container">
          <Link className="header-desktop__logo-link" to="/">
            <img className="header-desktop__logo" src={MochifyLogo} />
          </Link>

          <ul className="header-desktop__options">
            <li className="header-desktop__option">
              <Link
                to="/products/accessories"
                className="header-desktop__options--link"
              >
                Accessories
              </Link>
            </li>
            <li className="header-desktop__option">
              <Link
                to="/products/handbags"
                className="header-desktop__options--link"
              >
                Handbags
              </Link>
            </li>
            <li className="header-desktop__option">
              <Link
                to="/products/makeup"
                className="header-desktop__options--link"
              >
                Makeup
              </Link>
            </li>
            <li className="header-desktop__option">
              <Link
                to="/products/mugs"
                className="header-desktop__options--link"
              >
                Mugs
              </Link>
            </li>
            <li className="header-desktop__option">
              <Link
                to="/products/plush"
                className="header-desktop__options--link"
              >
                Plushies
              </Link>
            </li>
          </ul>
        </div>

        <div className="header-desktop__icon-container">
          <img
            className="header-desktop__icon"
            src={SearchIconOutline}
            onClick={props.showSearchHandler}
          />
          <img
            className="header-desktop__icon"
            src={PersonOutline}
            onClick={props.dropDownHandler}
          />
          <img
            className="header-desktop__icon"
            src={CartIconOutline}
            onClick={props.showCartSlideHandler}
          />
        </div>

        {props.cartMenu ? (
          <div
            ref={props.cartRef}
            className="header-desktop__slidingMenu--cart"
          >
            <img
              className="header-desktop__slidingMenu--cartClose-icon"
              onClick={props.showCartSlideHandler}
              src={CloseOutline}
            />
            <h3 className="header-desktop__slidingMenu--cartTitle">
              Your Cart
            </h3>
            <div className="header-desktop__slidingMenu--cartContainer">
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
                <></>
              )}
            </div>

            <div className="header-desktop__slidingMenu--cartSubTotalContainer">
              <div className="header-desktop__slidingMenu--cartSubTotalContainer-text">
                <p className="header-desktop__slidingMenu--cartSubTotalContainer-title">
                  Total
                </p>
                <p className="header-desktop__slidingMenu--cartSubTotalContainer-price">
                  {"$" + `${props.subTotal.subTotal.toFixed(2)}`}
                </p>
              </div>
              <button
                className="header-desktop__slidingMenu--cartSubTotalContainer-button"
                disabled={!props.checkoutToggle}
                onClick={props.shoppingCartHandler}
              >
                Check Out
              </button>
            </div>
          </div>
        ) : (
          <div
            ref={props.cartRef}
            className="header-desktop__slidingMenu--closeCart"
          ></div>
        )}

        {props.showSearch ? (
          <>
            <div
              ref={props.searchRef}
              className="header-desktop__options-search--container"
            >
              <div className="header-desktop__options-search--subContainer">
                <input
                  type="text"
                  className="header-desktop__options-search--bar"
                  placeholder="Search for..."
                  onKeyDown={(e) => props.keyDownHandler(e)}
                  onChange={(e) => props.searchFunc(e.target.value)}
                />
                <button className="header-desktop__options-search--button">
                  Search
                </button>
              </div>
              {props.query ? (
                <div className="header-desktop__options-search--results">
                  {props.query.length !== 0 ? (
                    <h3 className="header-desktop__options-search--results-title">
                      Here are a few results
                    </h3>
                  ) : (
                    <h3 className="header-desktop__options-search--results-noTitle">
                      No Results Found
                    </h3>
                  )}
                  {props.query.splice(0, 3).map((product) => (
                    <ProductCard
                      key={product.id}
                      image={product.image}
                      title={product.productName}
                      price={product.productPrice}
                    />
                  ))}
                </div>
              ) : (
                <></>
              )}
              ;
            </div>
          </>
        ) : (
          <></>
        )}

        {props.dropDown ? (
          <>
            {props.user ? (
              <div className="header-desktop__options-acount--container">
                <img
                  className="header-desktop__options-account--dropDown"
                  src={dropDownImg}
                />
                <ul className="header-desktop__options-account--list">
                  <Link
                    className="header-desktop__options-account--link"
                    to="/myAccount"
                    onClick={props.dropDownHandler}
                  >
                    <img
                      className="header-desktop__options-account--icon"
                      src={PersonOutline}
                    />
                    <li className="header-desktop__options-account--text">
                      My Account
                    </li>
                  </Link>
                  <Link
                    className="header-desktop__options-account--link"
                    to="/orderHistory"
                    onClick={props.dropDownHandler}
                  >
                    <img
                      className="header-desktop__options-account--icon"
                      src={HistoryOutline}
                    />
                    <li className="header-desktop__options-account--text">
                      Order History
                    </li>
                  </Link>
                  <Link
                    className="header-desktop__options-account--link"
                    to="/myWishlist"
                    onClick={props.dropDownHandler}
                  >
                    <img
                      className="header-desktop__options-account--icon"
                      src={HeartOutline}
                    />
                    <li className="header-desktop__options-account--text">
                      My Wishlist
                    </li>
                  </Link>
                  <Link
                    className="header-desktop__options-account--link"
                    to="/"
                    onClick={props.desktopLogout}
                  >
                    <img
                      className="header-desktop__options-account--icon"
                      src={PersonOutline}
                    />
                    <li className="header-desktop__options-account--text">
                      Log Out
                    </li>
                  </Link>
                </ul>
              </div>
            ) : (
              <div className="header-desktop__options-acount--container">
                <img
                  className="header-desktop__options-account--dropDown"
                  src={dropDownImg}
                />
                <ul className="header-desktop__options-account--list">
                  <Link
                    className="header-desktop__options-account--link"
                    to="/signup"
                    onClick={props.dropDownHandler}
                  >
                    <img
                      className="header-desktop__options-account--icon"
                      src={AddOutline}
                    />
                    <li className="header-desktop__options-account--text">
                      Sign Up
                    </li>
                  </Link>
                  <Link
                    className="header-desktop__options-account--link"
                    to="/signin"
                    onClick={props.dropDownHandler}
                  >
                    <img
                      className="header-desktop__options-account--icon"
                      src={PersonOutline}
                    />
                    <li className="header-desktop__options-account--text">
                      Log In
                    </li>
                  </Link>
                  <Link
                    className="header-desktop__options-account--link"
                    to="/orderHistory"
                    onClick={props.dropDownHandler}
                  >
                    <img
                      className="header-desktop__options-account--icon"
                      src={HistoryOutline}
                    />
                    <li className="header-desktop__options-account--text">
                      Order History
                    </li>
                  </Link>
                  <Link
                    className="header-desktop__options-account--link"
                    to="/myWishlist"
                    onClick={props.dropDownHandler}
                  >
                    <img
                      className="header-desktop__options-account--icon"
                      src={HeartOutline}
                    />
                    <li className="header-desktop__options-account--text">
                      My Wishlist
                    </li>
                  </Link>
                </ul>
              </div>
            )}
          </>
        ) : (
          <></>
        )}
      </nav>
    </div>
  );
};

export default NavBar;
