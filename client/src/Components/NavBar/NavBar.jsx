import React from "react";
import "./NavBar.scss";
import MochifyLogo from "../../Assets/Logo/Mochify.png";
import MenuIconOutline from "../../Assets/Icons/menu-outline.svg";
import PersonIconOutline from "../../Assets/Icons/person-outline.svg";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  return (
    <div className="header-container">
      <div className="header-mobile">
        <img className="header-mobile__menu" src={MenuIconOutline}/>
        <Link className="header-mobile__logo-link" to="/">
          <img className="header-mobile__logo" src={MochifyLogo} />
        </Link>
        <img className="header-mobile__account" src={PersonIconOutline}/>

      </div>

      <div className="header-desktop"></div>
    </div>
  );
};

export default NavBar;
