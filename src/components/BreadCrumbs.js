import React from "react";

import {Container} from "reactstrap"

export default function BreadCrumbs() {
  return (
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
  );
}
