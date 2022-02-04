import './App.scss';
import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import axios from "axios";
import {v4 as uuidv4 } from 'uuid';
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import AboutPage from "./Pages/About/AboutPage";
import LandingPage from "./Pages/Landing/LandingPage";
import ProductPage from "./Pages/Products/ProductsPage";
import ShoppingCartPage from "./Pages/ShoppingCart/ShoppingCartPage";
import SignUpPage from "./Pages/SignUp/SignUpPage";
import UserPage from "./Pages/User/UserPage";

const App = () =>  {
  return (
    <div>
      <Router>
        <NavBar/>
        <Switch>
          <Route exact path="/">
            <Redirect to="/landing" />
          </Route>

          <Route path="/landing" render={(routeProps) => {
            return (<LandingPage {...routeProps}/>)
          }} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
