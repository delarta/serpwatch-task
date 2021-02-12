import React, { useState, useRef, useEffect } from "react";

import iphoneImg from "../assets/imgs/iPhone6s_discover_desktop_08_iOS9.png";
import macbookImg from "../assets/imgs/50061505_575246-1.png";
import gridIcon from "../assets/imgs/icon-1.svg";
import listIcon from "../assets/imgs/icon.svg";

import { CardBody, Container, Card, CardImg, Input } from "reactstrap";

import { FaStar, FaTimes } from "react-icons/fa";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Sidebar(props) {
  const [priceRange, setPriceRange] = useState(50);
  const [colorsItem, setColorsItem] = useState("blue");
  return (
    <>
      <div
          className="sidebar-overlay"
          onClick={() => props.toggleOpenFilter()}
        ></div>

        <div className="sidebar">
          <div className="sidecard accessories">
            <div className="d-flex justify-content-between">
              <h5 className="sidecard-title">ACCESORIES</h5>
              {props.openFilter && (
                <div onClick={() => props.toggleOpenFilter()}>
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
        
    </>
  )
}
