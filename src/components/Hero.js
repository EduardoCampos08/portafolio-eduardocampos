import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { FaMousePointer, FaRegEye, FaTrophy, FaHandPointer } from "react-icons/fa";
import "./Hero.css";

const Hero = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const iconRefs = useRef([]);

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

    // Animar íconos en órbita
    iconRefs.current.forEach((icon, i) => {
      gsap.to(icon, {
        duration: 10,
        repeat: -1,
        ease: "linear",
        rotation: 360,
        transformOrigin: "center center",
      });
    });
  }, []);

  return (
    <section className="hero">
      <div className="orbita">
        {[FaMousePointer, FaRegEye, FaTrophy, FaHandPointer].map((Icon, i) => (
          <div
            key={i}
            className={`icon-wrapper icon-${i}`}
            ref={(el) => (iconRefs.current[i] = el)}
          >
            <Icon className="hero-icon" />
          </div>
        ))}
      </div>

      <div className="hero-content">
        <h1 ref={titleRef}>Hola, soy <span className="gradient-text">Eduardo Campos</span></h1>
        <p ref={subtitleRef}>
          Desarrollador creativo con pasión por la tecnología, el diseño y la innovación.
        </p>
      </div>
    </section>
  );
};

export default Hero;

