import React from "react";

const Pagination = ({ pageHandler, totalPages, currentPage }) => {
  const renderPages = () => {
    const pages = [];
    for (let i = 1; i <= 5; i++) {
      pages.push(
        <button
          key={i}
          className={`join-item btn ${i == currentPage ? "btn-active" : ""}`}
          onClick={() => {
            pageHandler(i);
          }}
        >
          {i}
        </button>
      );
    }
    return pages;
  };
  return (
    <div className="join">
      <button
        key={"prev"}
        className={`join-item btn ${
          currentPage <= 1 ? "cursor-not-allowed" : ""
        }`}
        onClick={() => {
          currentPage = 1 ? "" : pageHandler(currentPage - 1);
        }}
      >
        Prev
      </button>
      {renderPages()}
      <button
        key={"next"}
        className={`join-item btn ${
          currentPage == totalPages ? "cursor-not-allowed" : ""
        }`}
        onClick={() => {
          currentPage == totalPages ? "" : pageHandler(currentPage + 1);
        }}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
