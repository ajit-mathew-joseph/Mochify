import "./App.scss";
import React, { useState, useRef, useEffect } from "react";
import firebaseApp from "./firebase";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import Cookies from "universal-cookie";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import AboutPage from "./Pages/About/AboutPage";
import LandingPage from "./Pages/Landing/LandingPage";
import ProductsPage from "./Pages/Products/ProductsPage";
import ShoppingCartPage from "./Pages/ShoppingCart/ShoppingCartPage";
import SignUpPage from "./Pages/SignUp/SignUpPage";
import SignInPage from "./Pages/SignIn/SignInPage";
import UserPage from "./Pages/User/UserPage";

const App = () => {
  const [userInfo, setUserInfo] = useState({});

  const userCookie = new Cookies();

  const authListener = () => {
    firebaseApp.auth().onAuthStateChanged((user) => {
      if (user) {
        userCookie.set("userID", user.uid, {
          path: "/",
          expires: new Date(Date.now() + 7200000),
        });
        setUserInfo((prevState) => {
          return { ...prevState, user: user.uid };
        });
      } else {
        userCookie.remove("userID");
        setUserInfo({});
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);

  const signInHandler = (e) => {
    setUserInfo((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const logoutHandler = () => {
    firebaseApp.auth().signOut();
    setSlidingMenu(!slidingMenu);
  };

  // NavBar Handlers

  const [slidingMenu, setSlidingMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [dropDown, setDropDown] = useState(false);

  let menuRef = useRef(null);
  let searchRef = useRef(null);

  const slidingMenuHandler = () => {
    setSlidingMenu(!slidingMenu);
  };

  const showSearchHandler = () => {
    setShowSearch(!showSearch);
  };

  const dropDownHandler = () => {
    setDropDown(!dropDown);
  };

  useEffect(() => {
    let mouseHandler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setSlidingMenu(false);
      }
    };

    document.addEventListener("mousedown", mouseHandler);

    return () => {
      document.removeEventListener("mousedown", mouseHandler);
    };
  });

  useEffect(() => {
    let searchHandler = (e) => {
      if (!searchRef.current.contains(e.target)) {
        setShowSearch(!showSearch);
      }
    };

    document.addEventListener("mousedown", searchHandler);

    return () => {
      document.removeEventListener("mousedown", searchHandler);
    };
  });

  return (
    <div>
      <Router>
        <NavBar
          user={userInfo.user}
          logout={logoutHandler}
          slidingMenuHandler={slidingMenuHandler}
          showSearchHandler={showSearchHandler}
          dropDownHandler={dropDownHandler}
          menuRef={menuRef}
          searchRef={searchRef}
          slidingMenu={slidingMenu}
          showSearch={showSearch}
          dropDown={dropDown}
        />
        <Routes>
          <Route path="/" element={<Navigate replace to="/landing" />} />
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route
            path="/signin"
            element={
              <SignInPage signInHandler={signInHandler} userInfo={userInfo} />
            }
          />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/myCart" element={<ShoppingCartPage />} />
          <Route path="/myAccount" element={<UserPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
