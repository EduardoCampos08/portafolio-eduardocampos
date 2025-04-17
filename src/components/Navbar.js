import { color, hover } from "framer-motion";
import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <ul style={styles.ul}>
        <li><a href="#home" style={styles.link}>Inicio</a></li>
        <li><a href="#projects" style={styles.link}>Proyectos</a></li>
        <li><a href="#about" style={styles.link}>Sobre mí</a></li>
        <li><a href="#contact" style={styles.link}>Contacto</a></li>
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    position: "fixed",
    top: 20,
    left: 20,
    zIndex: 100,
  },
  ul: {
    listStyle: "none",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "1rem",
    opacity: 0.8,
    transition: "opacity 0.3s",
    
  },
  
};

export default Navbar;
