import React, { useState, useRef, useEffect } from "react";
import "./SortField.scss";

const SortField = (props) => {
  return (
    <div className="sortField">
      <select className="sortField__sort-options" onChange={props.selectHandler}>
        <option className="sortField__sort-option" value="Show 10 Results" >
          Show 10 Results
        </option>
        <option className="sortField__sort-option" value="Show 20 Results">
          Show 20 Results
        </option>
      </select>
      <select className="sortField__sort-options" onChange={(e) => props.sortHandler(e)}>
        <option className="sortField__sort-option" value="Sort By: Featured">
          Sort By: Featured
        </option>
        <option className="sortField__sort-option" value="Price: High to Low">
          Price: High to Low
        </option>
        <option className="sortField__sort-option" value="Price: Low to High">
          Price: Low to High
        </option>
        <option className="sortField__sort-option" value="Order: A to Z">
          Order: A to Z
        </option>
      </select>
    </div>
  );
};

export default SortField;
