import { useState } from "react";

const Pagination = ({ rows, rowsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPage = Math.floor((rows.length + rowsPerPage - 1) / rowsPerPage);
  const currentPageStartIndex = (currentPage - 1) * rowsPerPage;
  const currentPageEndIndex = currentPageStartIndex + rowsPerPage - 1;
  const currentRows = rows.slice(
    currentPageStartIndex,
    currentPageEndIndex + 1
  );
  const handleNextClick = () => {
    if (currentPage < totalPage) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <>
      {currentRows.map((item) => {
        return <li>{item.title}</li>;
      })}
      {currentPage > 1 && currentPage <= totalPage ? (
        <button onClick={handlePrevClick}>prev</button>
      ) : null}
      {currentPage >= 1 && currentPage < totalPage ? (
        <button onClick={handleNextClick}>next</button>
      ) : null}
      <br />
      {rows.length ? <p>current page : {currentPage}</p> : null}
    </>
  );
};
export default Pagination;
