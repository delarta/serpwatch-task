import React, { useState, useRef, useEffect } from "react";

import logoImg from "./assets/imgs/logo.svg";
import iphoneImg from "./assets/imgs/iPhone6s_discover_desktop_08_iOS9.png";
import macbookImg from "./assets/imgs/50061505_575246-1.png";
import arrowDown from "./assets/imgs/arrow_down.svg";
import profileIcon from "./assets/imgs/profile_close_2.svg";
import cartIcon from "./assets/imgs/bag_3.svg";
import searchIcon from "./assets/imgs/search-icon.svg";
import gridIcon from "./assets/imgs/icon-1.svg";
import listIcon from "./assets/imgs/icon.svg";

import { CardBody, Container, Card, CardImg, Input } from "reactstrap";

import { FaStar, FaTimes, FaBars } from "react-icons/fa";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { products } from "./products_data";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [priceRange, setPriceRange] = useState(50);
  const [colorsItem, setColorsItem] = useState("blue");
  const [page, setPage] = useState(3);
  const [openFilter, setOpenFilter] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [openSort, setOpenSort] = useState(false);

  const phoneImgRef = useRef(null);
  const heroTextRef = useRef([]);
  const productsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(phoneImgRef.current, {
      duration: 1,
      y: "-10%",
      autoAlpha: 0,
      ease: "power3.out",
      delay: 0.5,
    }, {
      autoAlpha: 1,
      y: 0,
    }
    );

    gsap.from(heroTextRef.current, {
      duration: 1,
      y: "-10%",
      opacity: 0,
      ease: "power4.out",
      stagger: 0.2,
    });

    productsRef.current.forEach((el, index) => {

      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: 'top bottom-=100',
        },
        duration: 0.8,
        opacity: 0,
        y: "20%",
        ease: "power3.out",
      });
    } )

  }, []);

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

  const toggleOpenMenu = () => {
    let nav = document.querySelector("#nav");

    if (!openMenu) {
      nav.style.top = "60px";
    } else {
      nav.style.top = "-100vh";
    }

    setOpenMenu(!openMenu);
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
      <div className="header">
        <Container>
          <div className="sm-screen">
            <img className="sm-logo" src={logoImg} alt="logo" />
            <div onClick={toggleOpenMenu} className="menu-icon">
              <FaBars />
            </div>
          </div>
          <div className="header-container">
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
                <img
                  className="menu-icon mr-1"
                  src={profileIcon}
                  alt="profile"
                />
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
          </div>
        </Container>
      </div>

      <div id="nav">
        <Container>
          <div className="logo mb-5 text-center">
            <img src={logoImg} alt="logo" />
          </div>

          <div className="sm-header-container">
            <div className="right-menu">
              <div className="right-menu-item mr-4 fw-600">
                <img
                  className="menu-icon mr-1"
                  src={profileIcon}
                  alt="profile"
                />
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
                  <img
                    className="menu-icon mr-1"
                    src={searchIcon}
                    alt="search"
                  />
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

      <div className="breadcrumbs">
        <Container>
          <div className="breadcrumbs-container">
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
        <div
          className="sidebar-overlay"
          onClick={() => toggleOpenFilter()}
        ></div>
        <div className="sidebar">
          <div className="sidecard accessories">
            <div className="d-flex justify-content-between">
              <h5 className="sidecard-title">ACCESORIES</h5>
              {openFilter && (
                <div onClick={() => toggleOpenFilter()}>
                  <FaTimes />
                </div>
              )}
            </div>
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
          <div className="sidecard colors">
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
              <div
                onClick={() => setColorsItem("red")}
                className={`colors-item red ${
                  colorsItem === "red" ? "outer-circle" : ""
                }`}
              ></div>
              <div
                onClick={() => setColorsItem("black")}
                className={`colors-item black ${
                  colorsItem === "black" ? "outer-circle" : ""
                }`}
              ></div>
              <div
                onClick={() => setColorsItem("yellow")}
                className={`colors-item yellow ${
                  colorsItem === "yellow" ? "outer-circle" : ""
                }`}
              ></div>
              <div
                onClick={() => setColorsItem("pink")}
                className={`colors-item pink ${
                  colorsItem === "pink" ? "outer-circle" : ""
                }`}
              ></div>
              <div
                onClick={() => setColorsItem("cream")}
                className={`colors-item cream ${
                  colorsItem === "cream" ? "outer-circle" : ""
                }`}
              ></div>
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
              <h1
                ref={(el) => (heroTextRef.current[0] = el)}
                className="display-4 text-light"
              >
                iPhone SE
              </h1>
              <p
                ref={(el) => (heroTextRef.current[1] = el)}
                className="hero-subtext text-light fz-16"
              >
                Performance and design. Taken right to the edge.
              </p>
              <div
                ref={(el) => (heroTextRef.current[2] = el)}
                className="hero-button"
              >
                SHOP NOW
              </div>
            </div>

            <div className="hero-img">
              <img ref={phoneImgRef} src={iphoneImg} />
            </div>
          </div>
          <div className="sort-bar">
            <div className="left-bar">
              <div className="mr-3">13 Items</div>
              <div className="sort-input">
                <div className="mr-2">Sort By</div>
                <div className="bar-dropdown">
                  <Input type="select">
                    <option>Name</option>
                    <option>Prices</option>
                    <option>Rating</option>
                  </Input>
                </div>
              </div>

              <div className="sort-input">
                <div className="mr-2">Show</div>
                <div className="bar-dropdown">
                  <Input type="select">
                    <option>12</option>
                    <option>13</option>
                    <option>14</option>
                    <option>15</option>
                    <option>16</option>
                  </Input>
                </div>
              </div>
            </div>
            <div className="right-bar">
              <div className="active">
                <img src={gridIcon} alt="grid-icon" />
              </div>
              <div className="list-view">
                <img src={listIcon} alt="grid-icon" />
              </div>
            </div>
          </div>

          <div className="products mb-4">
            {products &&
              products.map((product, index) => (
                <div
                  ref={(el) => (productsRef.current[index] = el)}
                  key={index}
                >
                  <Card>
                    <CardBody>
                      <CardImg src={macbookImg} />
                      <hr className="my-4" />
                      <div className="card-content text-center ">
                        <p>
                          <strong>{product.name}</strong>
                        </p>
                        <div className="mb-1 ratings">
                          <FaStar className="rated" />{" "}
                          <FaStar className="rated" />{" "}
                          <FaStar className="rated" />{" "}
                          <FaStar className="rated" /> <FaStar />
                        </div>
                        <p className="mb-1">
                          <span className="text-primary">${product.price}</span>{" "}
                          <span className="text-muted">
                            <s>${product.originalPrice}</s>
                          </span>
                        </p>
                      </div>
                    </CardBody>
                  </Card>
                </div>
              ))}
          </div>

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
        </div>
      </Container>
      <div className="mobile-nav">
        <div onClick={() => toggleOpenFilter()}>Filter</div>
        <div onClick={() => toggleOpenSort()}>Sort</div>
      </div>
    </div>
  );
}

export default App;
