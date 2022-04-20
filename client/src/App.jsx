import "./App.scss";
import React, { useState, useRef, useEffect } from "react";
import firebaseApp from "./firebase";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
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
import ProductList from "./tempData/tempData.json";
import AccessoriesPage from "./Pages/Accessories/AccessoriesPage";
import MakeupPage from "./Pages/Makeup/MakeupPage";
import MugsPage from "./Pages/Mugs/MugsPage";
import HandbagsPage from "./Pages/Handbags/HandbagsPage";
import PlushPage from "./Pages/Plush/PlushPage";
import ResultsPage from "./Pages/Results/ResultsPage";

const App = () => {
  const [userInfo, setUserInfo] = useState({
    birthday: null,
    country: null,
    region: null,
    expirationDate: null,
  });

  const [productInfo, setProductInfo] = useState({});

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

  const dataFilter = (string) => {
    const data = ProductList.filter((product) => product.tag === string);
    setProductInfo((prevState) => {
      return { ...prevState, [string]: data };
    });
  };

  const masterList = (string) => {
    const data = ProductList.filter((product) => product.subTag === string);
    setProductInfo((prevState) => {
      return { ...prevState, masterList: data };
    });
  };

  useEffect(() => {
    authListener();
    masterList("all");
    dataFilter("featured");
    dataFilter("accessories");
    dataFilter("handbags");
    dataFilter("makeup");
    dataFilter("plush");
    dataFilter("mugs");
    dataFilter("all");
  }, []);

  const signInHandler = (e) => {
    setUserInfo((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const dateHandler = (date) => {
    setUserInfo((prevState) => {
      return { ...prevState, birthday: date };
    });
  };

  const expirationDateHandler = (date) => {
    setUserInfo((prevState) => {
      return { ...prevState, expirationDate: date };
    });
  };

  const countryHandler = (country) => {
    console.log(country);
    setUserInfo((prevState) => {
      return { ...prevState, country: country };
    });
  };

  const regionHandler = (region) => {
    console.log(region);
    setUserInfo((prevState) => {
      return { ...prevState, region: region };
    });
  };

  // Test Function Out

  const phoneFormatter = (value) => {
    if (!value) return value;

    const phoneNumber = value.replace(/[^\d]/g, "");
    const phoneNumberLength = phoneNumber.length;

    if (phoneNumberLength < 4) return phoneNumber;

    if (phoneNumberLength < 7) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }

    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
      3,
      6
    )}-${phoneNumber.slice(6, 10)}`;
  };

  const phoneNumberHandler = (e) => {
    const formattedNumber = phoneFormatter(e.target.value);

    setUserInfo((prevState) => {
      return { ...prevState, [e.target.name]: formattedNumber };
    });
  };

  // Card Formatter

  const cardFormatter = (value) => {
    if (!value) return value;

    const cardNumber = value.replace(/[^\d]/g, "");
    const cardNumberLength = cardNumber.length;

    if (cardNumberLength < 5) return cardNumber;

    if (cardNumberLength < 9) {
      return `${cardNumber.slice(0, 4)} ${cardNumber.slice(4)}`;
    }

    if (cardNumberLength < 13) {
      return `${cardNumber.slice(0, 4)} ${cardNumber.slice(
        4,
        8
      )} ${cardNumber.slice(8, 12)}`;
    }

    return `${cardNumber.slice(0, 4)} ${cardNumber.slice(
      4,
      8
    )} ${cardNumber.slice(8, 12)} ${cardNumber.slice(12, 16)}`;
  };

  const cardNumHandler = (e) => {
    const formattedCard = cardFormatter(e.target.value);

    setUserInfo((prevState) => {
      return { ...prevState, [e.target.name]: formattedCard };
    });
  };

  const logoutHandler = () => {
    firebaseApp.auth().signOut();
    setSlidingMenu(!slidingMenu);
  };

  // NavBar Handlers

  const [slidingMenu, setSlidingMenu] = useState(false);
  const [cartMenu, setCartMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showMobSearch, setShowMobSearch] = useState(false);
  const [dropDown, setDropDown] = useState(false);

  let menuRef = useRef(null);
  let searchRef = useRef(null);
  let mobSearchRef = useRef(null);
  let cartRef = useRef(null);

  const slidingMenuHandler = () => {
    setSlidingMenu(!slidingMenu);
  };

  const showCartSlideHandler = () => {
    setCartMenu(!cartMenu);
  };

  const showSearchHandler = () => {
    setShowSearch(!showSearch);
  };

  const showMobSearchHandler = () => {
    setShowMobSearch(!showMobSearch);
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
    let mouseHandler = (e) => {
      if (!cartRef.current.contains(e.target)) {
        setCartMenu(false);
      }
    };

    document.addEventListener("mousedown", mouseHandler);

    return () => {
      document.removeEventListener("mousedown", mouseHandler);
    };
  });

  useEffect(() => {
    let mouseHandler = (e) => {
      if (!mobSearchRef.current.contains(e.target)) {
        setShowMobSearch(false);
        setQuery("");
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
        setShowSearch(false);
        setQuery("");
      }
    };

    document.addEventListener("mousedown", searchHandler);

    return () => {
      document.removeEventListener("mousedown", searchHandler);
    };
  });

  // Sort Functions

  const sortHandler = (e, category) => {
    const data = category
      ? ProductList.filter((product) => product.tag === category)
      : ProductList.filter((product) => product.subTag === "all");

    const featured = category
      ? ProductList.filter((product) => product.tag === category)
      : ProductList.filter((product) => product.subTag === "all");

    if (e.target.value === "Price: Low to High") {
      data.sort((a, b) => {
        if (a.productPrice < b.productPrice) {
          return -1;
        }

        if (a.productPrice > b.productPrice) {
          return 1;
        }
        return 0;
      });

      if (category) {
        setProductInfo((prevState) => {
          return { ...prevState, [category]: data };
        });
      } else {
        setProductInfo((prevState) => {
          return { ...prevState, masterList: data };
        });
      }
    } else if (e.target.value === "Price: High to Low") {
      data.sort((a, b) => {
        if (a.productPrice > b.productPrice) {
          return -1;
        }

        if (a.productPrice < b.productPrice) {
          return 1;
        }
        return 0;
      });

      if (category) {
        setProductInfo((prevState) => {
          return { ...prevState, [category]: data };
        });
      } else {
        setProductInfo((prevState) => {
          return { ...prevState, masterList: data };
        });
      }
    } else if (e.target.value === "Order: A to Z") {
      data.sort((a, b) => {
        if (a.productName.toLowerCase() < b.productName.toLowerCase()) {
          return -1;
        }

        if (a.productName.toLowerCase() > b.productName.toLowerCase()) {
          return 1;
        }
        return 0;
      });

      if (category) {
        setProductInfo((prevState) => {
          return { ...prevState, [category]: data };
        });
      } else {
        setProductInfo((prevState) => {
          return { ...prevState, masterList: data };
        });
      }
    } else if (e.target.value === "Sort By: Featured") {
      if (category) {
        setProductInfo((prevState) => {
          return { ...prevState, [category]: featured };
        });
      } else {
        setProductInfo((prevState) => {
          return { ...prevState, masterList: featured };
        });
      }

      if (category) {
        setProductInfo((prevState) => {
          return { ...prevState, [category]: data };
        });
      } else {
        setProductInfo((prevState) => {
          return { ...prevState, masterList: data };
        });
      }
    }
  };

  // Search Function
  const [query, setQuery] = useState("");

  const searchFunc = (searchTerm) => {
    const queryData = ProductList.filter((product) => {
      if (searchTerm === "") {
        return product;
      } else if (
        product.productName.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return product;
      }
    });

    if (searchTerm === "") {
      setQuery("");
    } else {
      setQuery(queryData);
    }
  };

  // Key Down Handler

  let navigate = useNavigate();

  const keyDownHandler = (e) => {
    if (e.key === "Enter") {
      navigate("../products/results", { replace: true });
      setShowSearch(false);
      setShowMobSearch(false);
    }
  };

  //Update Cart

  const updateCartHandler = (e) => {

  };

  return (
    <div>
      <NavBar
        user={userInfo.user}
        logout={logoutHandler}
        slidingMenuHandler={slidingMenuHandler}
        showSearchHandler={showSearchHandler}
        showCartSlideHandler={showCartSlideHandler}
        dropDownHandler={dropDownHandler}
        showMobSearchHandler={showMobSearchHandler}
        menuRef={menuRef}
        searchRef={searchRef}
        mobSearchRef={mobSearchRef}
        cartRef={cartRef}
        cartMenu={cartMenu}
        slidingMenu={slidingMenu}
        showMobSearch={showMobSearch}
        showSearch={showSearch}
        dropDown={dropDown}
        searchFunc={searchFunc}
        query={query}
        keyDownHandler={keyDownHandler}
      />
      <Routes>
        <Route path="/" element={<Navigate replace to="/landing" />} />
        <Route
          path="/landing"
          element={
            <LandingPage
              featured={productInfo.featured}
            />
          }
        />
        <Route
          path="/products"
          element={
            <ProductsPage
              masterList={productInfo.masterList}
              sortHandler={sortHandler}
            />
          }
        />
        <Route
          path="/products/accessories"
          element={
            <AccessoriesPage
              accessories={productInfo.accessories}
              sortHandler={sortHandler}
            />
          }
        />
        <Route
          path="/products/makeup"
          element={
            <MakeupPage makeup={productInfo.makeup} sortHandler={sortHandler} />
          }
        />
        <Route
          path="/products/handbags"
          element={
            <HandbagsPage
              handbags={productInfo.handbags}
              sortHandler={sortHandler}
            />
          }
        />
        <Route
          path="/products/mugs"
          element={
            <MugsPage mugs={productInfo.mugs} sortHandler={sortHandler} />
          }
        />
        <Route
          path="/products/plush"
          element={
            <PlushPage plush={productInfo.plush} sortHandler={sortHandler} />
          }
        />

        <Route
          path="/products/results"
          element={<ResultsPage query={query} sortHandler={sortHandler} />}
        />
        <Route path="/about" element={<AboutPage />} />
        <Route
          path="/signin"
          element={
            <SignInPage signInHandler={signInHandler} userInfo={userInfo} />
          }
        />
        <Route
          path="/signup"
          element={
            <SignUpPage
              signInHandler={signInHandler}
              userInfo={userInfo}
              dateHandler={dateHandler}
              phoneNumberHandler={phoneNumberHandler}
              countryHandler={countryHandler}
              regionHandler={regionHandler}
              cardNumHandler={cardNumHandler}
              expirationDateHandler={expirationDateHandler}
            />
          }
        />
        <Route path="/myCart" element={<ShoppingCartPage />} />
        <Route path="/myAccount" element={<UserPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
