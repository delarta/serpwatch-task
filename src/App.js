import React, { useState } from "react";

import { Container } from "reactstrap";

import Header from "./components/Header";
import Navigation from "./components/Navigation";
import BreadCrumbs from "./components/BreadCrumbs";
import Sidebar from "./components/Sidebar";
import Sort from "./components/Sort";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Pagination from "./components/Pagination";
import MobileNav from "./components/MobileNav";
import Content from "./components/Content";

function App() {
  const [openFilter, setOpenFilter] = useState(false);
  const [openSort, setOpenSort] = useState(false);

  const toggleOpenFilter = () => {
    let sidebar = document.querySelector(".sidebar");
    let sidebarOverlay = document.querySelector(".sidebar-overlay");
    let body = document.querySelector("body");
    if (!openFilter) {
      sidebar.style.left = "0";
      sidebarOverlay.style.transition = "opacity 500ms ease-out 200ms";
      sidebarOverlay.style.width = "100vw";
      sidebarOverlay.style.opacity = "0.5";
      body.style.height = "100vh";
      body.style.overflow = "hidden";
    } else {
      sidebar.style.left = "-80vw";
      sidebarOverlay.style.width = "0";
      sidebarOverlay.style.opacity = "0";
      sidebarOverlay.style.transition =
        "opacity 200ms ease-out, width 0s 300ms";
      body.style.height = "auto";
      body.style.overflow = "auto";
    }

    setOpenFilter(!openFilter);
  };

  const toggleOpenSort = () => {
    let sort = document.querySelector(".sort-bar");

    if (!openSort) {
      sort.style.top = "calc(100vh - 300px)";
      sort.style.bottom = "88px";
    } else {
      sort.style.top = "100vh";
      sort.style.bottom = "0";
    }

    setOpenSort(!openSort);
  };

  return (
    <div className="App">
      <Header />

      <Navigation />
      <BreadCrumbs />

      <Container className="main">
        <Sidebar toggleOpenFilter={toggleOpenFilter} openFilter={openFilter} />
        <Content />
      </Container>
      <MobileNav
        toggleOpenFilter={toggleOpenFilter}
        toggleOpenSort={toggleOpenSort}
      />
    </div>
  );
}

export default App;
