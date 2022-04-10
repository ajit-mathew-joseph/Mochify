import React, { useEffect, useState } from "react";
import "./Paginate.scss";
import ReactPaginate from "react-paginate";

const Paginate = (props) => {
  const [pageCount, setPageCount] = useState(0);
  const [itemOffSet, setItemOffSet] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const endOffSet = itemOffSet + props.itemsPerPage;
      props.setProductList(props.list.slice(itemOffSet, endOffSet));
      setPageCount(Math.ceil(props.list.length / props.itemsPerPage));
    }, 10);

    return () => clearTimeout(timer);
  }, [itemOffSet, props.itemsPerPage, props.list]);

  const handlePageClick = (e) => {
    const newOffSet = (e.selected * props.itemsPerPage) % props.list.length;
    setItemOffSet(newOffSet);
  };

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="Next"
      previousLabel="Previous"
      onPageChange={handlePageClick}
      pageRangeDisplayed={1}
      pageCount={pageCount}
      renderOnZeroPageCount={null}
      containerClassName={"paginate"}
      previousLinkClassName={"paginate__link--previous"}
      nextLinkClassName={"paginate__link--next"}
      pageClassName={"paginate__page"}
      activeClassName={"paginate__page--active"}
    />
  );
};

export default Paginate;
