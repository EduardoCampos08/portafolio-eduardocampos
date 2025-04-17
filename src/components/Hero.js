import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./Hero.css";

const Hero = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
    );
    gsap.fromTo(
      subtitleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.4, ease: "power3.out", delay: 0.3 }
    );
  }, []);

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 ref={titleRef}>Hola, soy Eduardo Campos</h1>
        <p ref={subtitleRef}>Desarrollador creativo con pasión por la tecnología, el diseño y la innovación.</p>
      </div>
    </section>
  );
};

export default Hero;
