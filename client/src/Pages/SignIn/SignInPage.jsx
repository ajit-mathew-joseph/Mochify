import React from "react";
import "./SignInPage.scss";
import { useNavigate } from "react-router-dom";
import firebaseApp from "../../firebase";

const SignInPage = (props) => {
  const history = useNavigate();

  const loginHandler = (e) => {
    e.preventDefault();
    firebaseApp
      .auth()
      .signInWithEmailAndPassword(
        props.userInfo.email,
        props.userInfo.password
      )
      .then((u) => {})
      .catch((err) => {
        console.log(err);
      });

      history("/");
  };

  return (
    <div className="signIn">
      <h3 className="signIn__title">Login</h3>
      <form className="signIn__form" onSubmit={loginHandler}>
        <div className="signIn__form--container">
          <label className="signIn__form--title">Email Address</label>
          <input
            className="signIn__form--input"
            name="email"
            type="email"
            placeholder="Enter your email"
            onChange={props.signInHandler}
            required
          />
        </div>
        <div className="signIn__form--container">
        <label className="signIn__form--title">Password</label>
        <input
          className="signIn__form--input"
          type="passsword"
          name="password"
          placeholder="Enter your password"
          onChange={props.signInHandler}
        />
        </div>
        <button className="signIn__form--button">
          Log In
        </button>
      </form>
    </div>
  );
};

export default SignInPage;

