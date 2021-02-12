import React from "react";

export default function MobileNav(props) {
  return (
    <div className="mobile-nav">
      <div onClick={() => props.toggleOpenFilter()}>Filter</div>
      <div onClick={() => props.toggleOpenSort()}>Sort</div>
    </div>
  );
}
