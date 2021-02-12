import React, { useRef, useEffect } from "react";

import iphoneImg from "../assets/imgs/iPhone6s_discover_desktop_08_iOS9.png";


import { gsap } from "gsap";

export default function Hero() {
  
  const phoneImgRef = useRef(null);
  const heroTextRef = useRef([]);

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

  }, []);
  return (
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
  )
}
