import React, { useState } from "react";
import "./PlushPage.scss";
import ProductCard from "../../Components/ProductCard/ProductCard";
import Paginate from "../../Components/Paginate/Paginate";
import SortField from "../../Components/SortField/SortField";

const PlushPage = (props) => {
  const [productList, setProductList] = useState(null);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const selectHandler = (e) => {
    if (e.target.value === "Show 20 Results") {
      setItemsPerPage(20);
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
        title={"All Plushies"}
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
      <Paginate
          setProductList={setProductList}
          itemsPerPage={itemsPerPage}
          list={props.plush}
        />
    </div>
  );
};

export default PlushPage;
