import React, { useState } from "react";
import "./ResultsPage.scss";
import ProductCard from "../../Components/ProductCard/ProductCard";
import Paginate from "../../Components/Paginate/Paginate";
import SortField from "../../Components/SortField/SortField";

const ResultsPage = (props) => {
  const [productList, setProductList] = useState(null);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const selectHandler = (e) => {
    if (e.target.value === "Show 20 Results") {
      setItemsPerPage(20);
      console.log(productList);
    } else {
      setItemsPerPage(10);
    }
  };

  return (
    <div className="results-page">
      <SortField
        selectHandler={selectHandler}
        sortHandler={props.sortHandler}
        category={"plush"}
        title={"Your Results"}
      />
      <div className="results-page__results">
        {productList ? (
          productList.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              title={product.productName}
              price={product.productPrice}
            />
          ))
        ) : (
          <></>
        )}
      </div>
      <div className="results-page__page-container">
        <Paginate
          setProductList={setProductList}
          itemsPerPage={itemsPerPage}
          list={props.query}
        />
      </div>
    </div>
  );
};

export default ResultsPage;
