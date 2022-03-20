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
              <Link className="header-mobile__slidingMenu--link" to="/">
                <li className="header-mobile__slidingMenu--link-text">
                  Accessories
                </li>
              </Link>
              <Link className="header-mobile__slidingMenu--link" to="/">
                <li className="header-mobile__slidingMenu--link-text">
                  Handbags
                </li>
              </Link>
              <Link className="header-mobile__slidingMenu--link" to="/">
                <li className="header-mobile__slidingMenu--link-text">
                  Makeup
                </li>
              </Link>
              <Link className="header-mobile__slidingMenu--link" to="/">
                <li className="header-mobile__slidingMenu--link-text">Mugs</li>
              </Link>
              <Link className="header-mobile__slidingMenu--link" to="/">
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
                  <Link className="header-mobile__slidingMenu--link2" to="/">
                    <img
                      className="header-mobile__slidingMenu--icon"
                      src={PersonOutline}
                    />
                    <li className="header-mobile__slidingMenu--link-text2">
                      My Account
                    </li>
                  </Link>
                  <Link className="header-mobile__slidingMenu--link2" to="/">
                    <img
                      className="header-mobile__slidingMenu--icon"
                      src={HistoryOutline}
                    />
                    <li className="header-mobile__slidingMenu--link-text2">
                      Order History
                    </li>
                  </Link>
                  <Link className="header-mobile__slidingMenu--link2" to="/">
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
                  <Link className="header-mobile__slidingMenu--link2" to="/">
                    <img
                      className="header-mobile__slidingMenu--icon"
                      src={AddOutline}
                    />
                    <li className="header-mobile__slidingMenu--link-text2">
                      Sign Up
                    </li>
                  </Link>

                  <Link className="header-mobile__slidingMenu--link2" to="/signin" onClick={props.slidingMenuHandler}>
                    <img
                      className="header-mobile__slidingMenu--icon"
                      src={PersonOutline}
                    />
                    <li className="header-mobile__slidingMenu--link-text2">
                      Log In
                    </li>
                  </Link>

                  <Link className="header-mobile__slidingMenu--link2" to="/">
                    <img
                      className="header-mobile__slidingMenu--icon"
                      src={HistoryOutline}
                    />
                    <li className="header-mobile__slidingMenu--link-text2">
                      Order History
                    </li>
                  </Link>
                  <Link className="header-mobile__slidingMenu--link2" to="/">
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

        {props.showSearch ? (
          <div className="header-mobile__options-container">
            <img
              className="header-mobile__options-search"
              src={SearchIconOutline}
              onClick={props.showSearchHandler}
            />
            <div
              ref={props.searchRef}
              className="header-mobile__options-search--container"
            >
              <input
                type="text"
                className="header-mobile__options-search--bar"
                placeholder="Search for..."
              />
              <button className="header-mobile__options-search--button">
                Search
              </button>
            </div>
            <img
              className="header-mobile__options-cart"
              src={CartIconOutline}
            />
          </div>
        ) : (
          <div className="header-mobile__options-container">
            <img
              className="header-mobile__options-search"
              src={SearchIconOutline}
              onClick={props.showSearchHandler}
            />
            <img
              className="header-mobile__options-cart"
              src={CartIconOutline}
            />
          </div>
        )}
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
              <Link to="/" className="header-desktop__options--link">
                Accessories
              </Link>
            </li>
            <li className="header-desktop__option">
              <Link to="/" className="header-desktop__options--link">
                Handbags
              </Link>
            </li>
            <li className="header-desktop__option">
              <Link to="/" className="header-desktop__options--link">
                Makeup
              </Link>
            </li>
            <li className="header-desktop__option">
              <Link to="/" className="header-desktop__options--link">
                Mugs
              </Link>
            </li>
            <li className="header-desktop__option">
              <Link to="/" className="header-desktop__options--link">
                Plush
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
          />
        </div>

        {props.showSearch ? (
          <>
            <div
              ref={props.searchRef}
              className="header-desktop__options-search--container"
            >
              <input
                type="text"
                className="header-desktop__options-search--bar"
                placeholder="Search for..."
              />
              <button className="header-desktop__options-search--button">
                Search
              </button>
            </div>
          </>
        ) : (
          <></>
        )}

        {props.dropDown ? (
          <div className="header-desktop__options-acount--container">
            <img
              className="header-desktop__options-account--dropDown"
              src={dropDownImg}
            />
            <ul className="header-desktop__options-account--list">
              <Link
                className="header-desktop__options-account--link"
                to="/"
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
                to="/"
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
                to="/"
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
        ) : (
          <></>
        )}
      </nav>
    </div>
  );
};

export default NavBar;
