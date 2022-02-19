import "./App.scss";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import AboutPage from "./Pages/About/AboutPage";
import LandingPage from "./Pages/Landing/LandingPage";
import ProductsPage from "./Pages/Products/ProductsPage";
import ShoppingCartPage from "./Pages/ShoppingCart/ShoppingCartPage";
import SignUpPage from "./Pages/SignUp/SignUpPage";
import UserPage from "./Pages/User/UserPage";

const App = () => {
  return (
    <div>
      <Router>
        <NavBar user={false}/>
        <Routes>
          <Route path="/" element={<Navigate replace to="/landing" />} />
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/about" element={<AboutPage />} />
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
