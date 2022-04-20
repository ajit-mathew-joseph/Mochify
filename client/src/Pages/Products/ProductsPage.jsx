import React, { useEffect, useState } from "react";
import "./ProductsPage.scss";
import SortField from "../../Components/SortField/SortField";
import ProductCard from "../../Components/ProductCard/ProductCard";
import Paginate from "../../Components/Paginate/Paginate";

const ProductsPage = (props) => {
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
    <div className="products-page">
      <SortField
        selectHandler={selectHandler}
        sortHandler={props.sortHandler}
        category={null}
        title={"All Products"}
      />
      <div className="products-page__results">
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
        list={props.masterList}
      />
    </div>
  );
};

export default ProductsPage;
