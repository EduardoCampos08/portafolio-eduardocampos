// Navbar.js
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const handleNavigation = (sectionId) => {
    setIsMenuOpen(false); // Cierra el menú
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: sectionId } });
    } else {
      const section = document.getElementById(sectionId);
      section?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Barra superior siempre visible */}
      <nav className="navbar">
        <div className="navbar-container">
          <h1 className="logo">EC</h1>

          <div
            className={`hamburger ${isMenuOpen ? "open" : ""}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
      </nav>

      {/* Pantalla desplegable del menú */}
      <div className={`menu-overlay ${isMenuOpen ? "active" : ""}`}>
      <ul className="menu-links">
  <motion.li onClick={() => handleNavigation("home")} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
    <a>Inicio</a>
  </motion.li>
  <motion.li onClick={() => handleNavigation("projects")} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
    <a>Proyectos</a>
  </motion.li>
  <motion.li onClick={() => handleNavigation("about")} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
    <a>Sobre mí</a>
  </motion.li>
  <motion.li onClick={() => handleNavigation("contact")} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
    <a>Contacto</a>
  </motion.li>
</ul>

        <footer className="menu-footer">
          <p>© 2025 Eduardo Campos</p>
        </footer>
      </div>
    </>
  );
}

export default Navbar;
