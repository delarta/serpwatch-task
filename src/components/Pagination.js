import React, { useState } from "react";

export default function Pagination() {
  const [page, setPage] = useState(3);

  return (
    <div className="pagination">
      <div
        onClick={() => setPage(1)}
        className={`page-number ${page === 1 && "active"}`}
      >
        1
      </div>
      <div
        onClick={() => setPage(2)}
        className={`page-number ${page === 2 && "active"}`}
      >
        2
      </div>
      <div
        onClick={() => setPage(3)}
        className={`page-number ${page === 3 && "active"}`}
      >
        3
      </div>
      <div
        onClick={() => setPage(4)}
        className={`page-number ${page === 4 && "active"}`}
      >
        4
      </div>
      <div
        onClick={() => setPage(5)}
        className={`page-number ${page === 5 && "active"}`}
      >
        5
      </div>
    </div>
  );
}
