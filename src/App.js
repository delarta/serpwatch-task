import React, { useState } from "react";

import logoImg from "./assets/imgs/logo.svg";
import iphoneImg from "./assets/imgs/pic@2x.png";
import macbookImg from "./assets/imgs/50061505_575246-1.png";
import arrowDown from "./assets/imgs/arrow_down.svg";
import profileIcon from "./assets/imgs/profile_close_2.svg";
import cartIcon from "./assets/imgs/bag_3.svg";
import searchIcon from "./assets/imgs/search-icon.svg";

import { CardBody, Container, Card, CardImg, Input } from "reactstrap";

function App() {
  const [priceRange, setPriceRange] = useState(50);
  const [colorsItem, setColorsItem] = useState("blue");

  return (
    <div className="App">
      <div className="header">
        <Container className="d-flex justify-content-between align-items-center">
          <div className="left-menu d-flex">
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
          <div className="right-menu d-flex">
            <div className="mr-4 fw-600">
              <img className="menu-icon mr-1" src={profileIcon} alt="profile" />
              <span className="menu-text ls-1">My Profile</span>
            </div>
            <div className="mr-5">
              <img className="menu-icon mr-1" src={cartIcon} alt="cart" />
              <span className="menu-text ls-1">
                {" "}
                0 Items <span className="text-muted">$0.00</span>{" "}
              </span>{" "}
            </div>
            <div className="mr-2">
              <span className="menu-icon">
                <img src={searchIcon} alt="search" />
              </span>
            </div>
          </div>
        </Container>
      </div>

      <div id="nav" className="my-5">
        <Container>
          <div className="logo mb-5 text-center">
            <img src={logoImg} alt="logo" />
          </div>

          <div className="navigation d-flex justify-content-between">
            <div className="mr-4 ls-1 fw-600">HOME</div>
            <div className="mr-4 ls-1 fw-600">STORE</div>
            <div className="mr-4 ls-1 fw-600">IPHONE</div>
            <div className="mr-4 ls-1 fw-600">IPAD</div>
            <div className="mr-4 ls-1 fw-600">MACBOOK</div>
            <div className="mr-4 ls-1 fw-600">ACCESORIES</div>
          </div>
        </Container>
      </div>

      <div className="breadcrumbs">
        <Container>
          <div className="d-flex justify-content-center flex-wrap">
            <div className="mr-2">
              <a href="#home">Home</a>{" "}
            </div>
            <div className="mr-2">/</div>
            <div className="mr-2">
              <a href="#accessories">Accessories</a>
            </div>
            <div className="mr-2">/</div>
            <div className="mr-2">
              <strong>Beat Solo2 on Ear Headphones - Black</strong>{" "}
            </div>
          </div>
        </Container>
      </div>

      <Container className="main">
        <div className="sidebar">
          <div className="sidecard accessories">
            <h5 className="sidecard-title">ACCESORIES</h5>
            <ul>
              <li>
                <div className="category">Apple</div>
                <div className="count">2</div>
              </li>
              <li className="active">
                <div className="category">Air port & wireless</div>
                <div className="count">48</div>
              </li>
              <li>
                <div className="category">Cables & Docks</div>
                <div className="count">14</div>
              </li>
              <li>
                <div className="category">Cases & Films</div>
                <div className="count">15</div>
              </li>
              <li>
                <div className="category">Charging Devices</div>
                <div className="count">23</div>
              </li>
              <li>
                <div className="category">Conected home</div>
                <div className="count">1</div>
              </li>
              <li>
                <div className="category">Headphones</div>
                <div className="count">95</div>
              </li>
            </ul>
          </div>
          <div className="sidecard prices">
            <h5 className="sidecard-title">PRICES</h5>
            <div className="d-flex justify-content-between mb-3">
              <div className="ranger-label fw-600">Ranger:</div>
              <div className="ranger-value">$13.99 - ${priceRange}</div>
            </div>
            <div className="ranger-input">
              <Input
                type="range"
                onChange={(e) => setPriceRange(e.target.value)}
                value={priceRange}
                name="range"
                id="exampleRange"
              />
            </div>
          </div>
          <div className="sidecard colors-card">
            <h5 className="sidecard-title">COLORS</h5>
            <div className="d-flex justify-content-between mb-3 color-list">
              <div
                onClick={() => setColorsItem("blue")}
                className={`colors-item blue ${
                  colorsItem === "blue" ? "outer-circle" : ""
                }`}
              >
                {/* <div className="blue"></div> */}
              </div>
              <div className="colors-item red"></div>
              <div className="colors-item black"></div>
              <div className="colors-item yellow"></div>
              <div className="colors-item pink"></div>
              <div className="colors-item cream"></div>
            </div>
          </div>
          <div className="sidecard brand">
            <h5 className="sidecard-title">BRAND</h5>
            <ul>
              <li>
                <div className="category">Apple</div>
                <div className="count">99</div>
              </li>
              <li className="active">
                <div className="category">LG</div>
                <div className="count">48</div>
              </li>
              <li>
                <div className="category">Samsung</div>
                <div className="count">14</div>
              </li>
              <li>
                <div className="category">Siemens</div>
                <div className="count">99</div>
              </li>
            </ul>
          </div>
          <div className="sidecard d-flex align-items-center justify-content-center">
            <div>MORE</div>
          </div>
        </div>
        <div className="content">
          <div className="hero">
            <div className="hero-text">
              <h1 className="display-4 text-light mb-4">iPhone SE</h1>
              <p className="mb-5 text-light fz-16">
                Performance and design. Taken right to the edge.
              </p>
              <div className="hero-button">
                <strong>SHOP NOW</strong>
              </div>

              <div className="hero-img">
                <img src={iphoneImg} />
              </div>
            </div>
          </div>
          <div className="bar mb-4">
            <div>bar</div>
          </div>

          <div className="products mb-4">
            <Card>
              <CardBody>
                <CardImg src={macbookImg} />
                <div className="card-content text-center ">
                  <p>
                    <strong>Apple Macbook</strong>
                  </p>
                  <p>Rating</p>
                  <p>
                    <span className="text-primary">$499</span>{" "}
                    <span className="text-muted">$599</span>
                  </p>
                </div>
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                <CardImg src={macbookImg} />
                <div className="card-content text-center mt-4">
                  <p>
                    <strong>Apple Macbook</strong>
                  </p>
                  <p>Rating</p>
                  <p>
                    <span className="text-primary">$499</span>{" "}
                    <span className="text-muted">$599</span>
                  </p>
                </div>
              </CardBody>
            </Card>{" "}
            <Card>
              <CardBody>
                <CardImg src={macbookImg} />
                <div className="card-content text-center mt-4">
                  <p>
                    <strong>Apple Macbook</strong>
                  </p>
                  <p>Rating</p>
                  <p>
                    <span className="text-primary">$499</span>{" "}
                    <span className="text-muted">$599</span>
                  </p>
                </div>
              </CardBody>
            </Card>{" "}
            <Card>
              <CardBody>
                <CardImg src={macbookImg} />
                <div className="card-content text-center mt-4">
                  <p>
                    <strong>Apple Macbook</strong>
                  </p>
                  <p>Rating</p>
                  <p>
                    <span className="text-primary">$499</span>{" "}
                    <span className="text-muted">$599</span>
                  </p>
                </div>
              </CardBody>
            </Card>{" "}
            <Card>
              <CardBody>
                <CardImg src={macbookImg} />
                <div className="card-content text-center mt-4">
                  <p>
                    <strong>Apple Macbook</strong>
                  </p>
                  <p>Rating</p>
                  <p>
                    <span className="text-primary">$499</span>{" "}
                    <span className="text-muted">$599</span>
                  </p>
                </div>
              </CardBody>
            </Card>{" "}
            <Card>
              <CardBody>
                <CardImg src={macbookImg} />
                <div className="card-content text-center mt-4">
                  <p>
                    <strong>Apple Macbook</strong>
                  </p>
                  <p>Rating</p>
                  <p>
                    <span className="text-primary">$499</span>{" "}
                    <span className="text-muted">$599</span>
                  </p>
                </div>
              </CardBody>
            </Card>
          </div>
        
          <div className="bar mb-4">
            <div>bar</div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default App;
