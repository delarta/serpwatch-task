import React, { useState } from "react";

import logoImg from "../assets/imgs/logo.svg";
import arrowDown from "../assets/imgs/arrow_down.svg";
import profileIcon from "../assets/imgs/profile_close_2.svg";
import cartIcon from "../assets/imgs/bag_3.svg";
import searchIcon from "../assets/imgs/search-icon.svg";

import { Container } from "reactstrap";

import { FaBars } from "react-icons/fa";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleOpenMenu = () => {
    let nav = document.querySelector("#nav");

    if (!openMenu) {
      nav.style.top = "60px";
    } else {
      nav.style.top = "-100vh";
    }

    setOpenMenu(!openMenu);
  };
  return (
    <div className="header">
      <Container>
        <div className="sm-screen">
          <img className="sm-logo" src={logoImg} alt="logo" />
          <div onClick={toggleOpenMenu} className="menu-icon">
            <FaBars />
          </div>
        </div>
        <div className="header-container">
          <div className="left-menu d-flex align-items-center">
            <div className="mr-2 d-flex align-items-center">
              EN <img className="ml-1" src={arrowDown} alt="arrow-down" />
            </div>
            <div className="mr-2 d-flex align-items-center">
              USD <img className="ml-1" src={arrowDown} alt="arrow-down" />
            </div>
          </div>
          <div className="right-menu d-flex">
            <div className="mr-4 fw-600">
              <img className="menu-icon mr-1" src={profileIcon} alt="profile" />
              <span className="menu-text ls-1">My Profile</span>
            </div>
            <div className="mr-5">
              <img className="menu-icon mr-1" src={cartIcon} alt="cart" />
              <span className="menu-text  ls-1">
                <span className="fw-600"> 0 Items</span>{" "}
                <span className="text-muted">$0.00</span>{" "}
              </span>
            </div>
            <div className="mr-2">
              <span className="menu-icon">
                <img src={searchIcon} alt="search" />
              </span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
