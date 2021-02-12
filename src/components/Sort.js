import React from "react";
import gridIcon from "../assets/imgs/icon-1.svg";
import listIcon from "../assets/imgs/icon.svg";

import { Input } from "reactstrap";

export default function Sort() {
  return (
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
  );
}
