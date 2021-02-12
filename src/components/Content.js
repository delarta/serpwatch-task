import React from "react";
import Hero from "./Hero";
import Pagination from "./Pagination";
import Products from "./Products";
import Sort from "./Sort";

export default function Content() {
  return (
    <div className="content">
      <Hero />
      <Sort />
      <Products />
      <Pagination />
    </div>
  );
}
