import React from "react";

import logoImg from "../assets/imgs/logo.svg";
import arrowDown from "../assets/imgs/arrow_down.svg";
import profileIcon from "../assets/imgs/profile_close_2.svg";
import cartIcon from "../assets/imgs/bag_3.svg";
import searchIcon from "../assets/imgs/search-icon.svg";

import { Container } from "reactstrap";

export default function Navigation() {
  return (
    <div id="nav">
      <Container>
        <div className="logo mb-5 text-center">
          <img src={logoImg} alt="logo" />
        </div>

        <div className="sm-header-container">
          <div className="right-menu">
            <div className="right-menu-item mr-4 fw-600">
              <img className="menu-icon mr-1" src={profileIcon} alt="profile" />
              <span className="menu-text ls-1">My Profile</span>
            </div>
            <div className="right-menu-item mr-5">
              <img className="menu-icon mr-1" src={cartIcon} alt="cart" />
              <span className="menu-text ls-1">
                0 Items <span className="text-muted">$0.00</span>{" "}
              </span>{" "}
            </div>
            <div className="right-menu-item mr-2">
              <span className="menu-icon">
                <img className="menu-icon mr-1" src={searchIcon} alt="search" />
                <span className="menu-text ls-1">Search</span>
              </span>
            </div>
            <div className="right-menu-item mr-2">
              <div className="d-flex">
                <div className="mr-2">
                  EN{" "}
                  <span>
                    <img src={arrowDown} alt="arrow-down" />
                  </span>
                </div>
                <div className="mr-2">
                  USD{" "}
                  <span>
                    <img src={arrowDown} alt="arrow-down" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="sm-hr mt-0" />

        <div className="navigation">
          <div className="ls-1 fw-600">HOME</div>
          <div className="ls-1 fw-600">STORE</div>
          <div className="ls-1 fw-600">IPHONE</div>
          <div className="ls-1 fw-600">IPAD</div>
          <div className="ls-1 fw-600">MACBOOK</div>
          <div className="ls-1 fw-600">ACCESORIES</div>
        </div>
      </Container>
    </div>
  );
}
