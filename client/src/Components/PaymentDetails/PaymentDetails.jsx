import React, { useState } from "react";
import "./PaymentDetails.scss";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const PaymentDetails = (props) => {
  return (
    <div className="paymentDetails">
      <div className="paymentDetails__form--container">
        <label htmlFor="cardNameInput" className="paymentDetails__form--title">
          Name on Card
        </label>
        <input
          className="paymentDetails__form--input"
          type="text"
          name="cardName"
          placeholder="Name on Card"
          onChange={props.signInHandler}
          required
        />
      </div>
      <div className="paymentDetails__form--container">
        <label htmlFor="cardNumber" className="paymentDetails__form--title">
          Card Number
        </label>
        <input
          className="paymentDetails__form--input"
          type="text"
          name="cardNumber"
          value={props.userInfo.cardNumber || ""}
          placeholder="1234 1234 1234 1234"
          onChange={props.cardNumHandler}
        />
      </div>

      <div className="paymentDetails__form--areaContainer">
        <div className="paymentDetails__form--areaSubContainer">
          <label
            htmlFor="expirationDateInput"
            className="paymentDetails__form--title"
          >
            Expiration Date
          </label>
          {/* <input
            className="paymentDetails__form--input"
            type="text"
            name="expirationDate"
            placeholder="01/20"
            onChange={props.signInHandler}
          /> */}

          {props.userInfo.expirationDate ? (
            <DatePicker
              selected={props.userInfo.expirationDate}
              onChange={(date) => props.expirationDateHandler(date)}
              dateFormat="MM/yy"
              showMonthYearPicker
            />
          ) : (
            <DatePicker
              selected={new Date("2023/01/01")}
              dateFormat="MM/yy"
              showMonthYearPicker
              onChange={(date) => props.expirationDateHandler(date)}
            />
          )}
        </div>

        <div className="paymentDetails__form--areaSubContainer">
          <label htmlFor="postalInput" className="paymentDetails__form--title">
            CVV
          </label>
          <input
            className="paymentDetails__form--input"
            type="text"
            name="cvv"
            placeholder="100"
            onChange={props.signInHandler}
          />
        </div>
      </div>

      <div className="paymentDetails__form--button-container">
        <button
          className="paymentDetails__form--button"
          onClick={props.stepBackward}
        >
          Previous
        </button>

        <button
          className="paymentDetails__form--signUp"
          onClick={props.stepForward}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default PaymentDetails;
