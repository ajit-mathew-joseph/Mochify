import React, { useState } from "react";
import "./UserDetails.scss";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const UserDetails = (props) => {
  return (
    <div className="userDetails">
      <div className="userDetails__form--container">
        <label htmlFor="firstNameInput" className="userDetails__form--title">
          First Name
        </label>
        <input
          className="userDetails__form--input"
          name="firstName"
          type="text"
          placeholder="First Name"
          onChange={props.signInHandler}
          required
        />
      </div>
      <div className="userDetails__form--container">
        <label htmlFor="lastNameInput" className="userDetails__form--title">
          Last Name
        </label>
        <input
          className="userDetails__form--input"
          type="text"
          name="lastName"
          placeholder="Last Name"
          onChange={props.signInHandler}
          required
        />
      </div>

      <div className="userDetails__form--container">
        <label htmlFor="birthdayInput" className="userDetails__form--title">
          Birthday
        </label>
        {props.userInfo.birthday ? (
          <DatePicker
            selected={props.userInfo.birthday}
            onChange={(date) => props.dateHandler(date)}
          />
        ) : (
          <DatePicker
            selected={new Date("2000/01/01")}
            onChange={(date) => props.dateHandler(date)}
          />
        )}
      </div>

      <div className="userDetails__form--container">
        <label htmlFor="emailInput" className="userDetails__form--title">
          Email
        </label>
        <input
          className="userDetails__form--input"
          type="email"
          name="email"
          placeholder="Email Address"
          onChange={props.signInHandler}
          required
        />
      </div>

      <div className="userDetails__form--container">
        <label htmlFor="passwordInput" className="userDetails__form--title">
          Password
        </label>
        <input
          className="userDetails__form--input"
          type="password"
          name="password"
          placeholder="Enter a password for your account"
          onChange={props.signInHandler}
          minLength={10}
        />
      </div>

      <div className="userDetails__form--container">
        <label htmlFor="phoneInput" className="userDetails__form--title">
          Phone Number
        </label>
        <input
          className="userDetails__form--input"
          type="text"
          name="phoneNumber"
          placeholder="Enter a phone number"
          value={props.userInfo.phoneNumber || ''}
          onChange={props.phoneNumberHandler}
          minLength={10}
        />
      </div>

      <button className="userDetails__form--button" onClick={props.stepForward}>
        Next
      </button>
    </div>
  );
};

export default UserDetails;
