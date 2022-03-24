import React, { useState } from "react";
import "./UserAddress.scss";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";

const UserAddress = (props) => {
  return (
    <div className="userAddress">
      <div className="userAddress__form--container">
        <label htmlFor="addressInput1" className="userAddress__form--title">
          Address Line 1
        </label>
        <input
          className="userAddress__form--input"
          type="text"
          name="address1"
          placeholder="Address"
          onChange={props.signInHandler}
          required
        />
      </div>
      <div className="userAddress__form--container">
        <label htmlFor="addressInput2" className="userAddress__form--title">
          Address Line 2
        </label>
        <input
          className="userAddress__form--input"
          type="text"
          name="address2"
          placeholder="Optional"
          onChange={props.signInHandler}
        />
      </div>

      <div className="userAddress__form--areaContainer">
        <div className="userAddress__form--areaSubContainer">
          <label htmlFor="cityInput" className="userAddress__form--title">
            City
          </label>
          <input
            className="userAddress__form--input"
            type="text"
            name="city"
            placeholder="City"
            onChange={props.signInHandler}
          />
        </div>

        <div className="userAddress__form--areaSubContainer">
          <label htmlFor="postalInput" className="userAddress__form--title">
            Postal Code
          </label>
          <input
            className="userAddress__form--input"
            type="text"
            name="postalCode"
            placeholder="Postal Code"
            onChange={props.signInHandler}
          />
        </div>
      </div>

      <div className="userAddress__form--container">
        <label htmlFor="firstNameInput" className="userAddress__form--title">
          Country
        </label>
        <CountryDropdown
          value={props.userInfo.country}
          style={{ height: 30, border: "2px solid black" }}
          onChange={(country) => props.countryHandler(country)}
        />
      </div>

      <div className="userAddress__form--container">
        <label htmlFor="firstNameInput" className="userAddress__form--title">
          Region
        </label>
        <RegionDropdown
          country={props.userInfo.country}
          value={props.userInfo.region}
          onChange={(region) => props.regionHandler(region)}
          style={{ height: 30, border: "2px solid black" }}
        />
      </div>
      <div className="userAddress__form--button-container">
      <button
        className="userAddress__form--button"
        onClick={props.stepBackward}
      >
        Previous
      </button>

      <button
        className="userAddress__form--button"
        onClick={props.stepForward}
      >
        Next
      </button>
      </div>
    </div>
  );
};

export default UserAddress;
