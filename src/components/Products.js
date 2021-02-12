import React, { useRef, useEffect } from "react";

import { CardBody, Card, CardImg } from "reactstrap";
import { FaStar } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { products } from "../products_data";
import macbookImg from "../assets/imgs/50061505_575246-1.png";

gsap.registerPlugin(ScrollTrigger);

export default function Products() {
  const productsRef = useRef([]);

  useEffect(() => {
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
  return (
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
  )
}
