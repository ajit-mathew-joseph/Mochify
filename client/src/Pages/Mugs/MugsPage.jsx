import React, { useState } from "react";
import "./MugsPage.scss";
import ProductCard from "../../Components/ProductCard/ProductCard";
import Paginate from "../../Components/Paginate/Paginate";
import SortField from "../../Components/SortField/SortField";

const MugsPage = (props) => {
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
    <div className="mugs-page">
      <SortField
        selectHandler={selectHandler}
        sortHandler={props.sortHandler}
        category={"mugs"}
        title={"All Mugs"}
      />
      <div className="mugs-page__results">
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
          list={props.mugs}
        />
    </div>
  );
};

export default MugsPage;