// src/components/Footer.js
import React from "react";
import { motion } from "framer-motion";
import "./Footer.css";

const Footer = () => {
  return (
    <motion.footer
      className="footer-container"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="footer-left">
        <h1 className="footer-name">EDUARDO CAMPOS</h1>
        <div className="footer-section">
          <p className="footer-heading">WORK DAYS</p>
          <p>MON–FRI</p>
        </div>
        <div className="footer-section">
          <p className="footer-heading">FOCUS</p>
          <p>Desarrollo, liderazgo, innovación</p>
        </div>
        <div className="footer-section">
          <p className="footer-heading">SOCIALS</p>
          <div className="footer-links">
            <motion.a whileHover={{ scale: 1.1 }} href="https://github.com/EduardoCampos08" target="_blank" rel="noreferrer">GITHUB</motion.a>
            <motion.a whileHover={{ scale: 1.1 }} href="https://linkedin.com" target="_blank" rel="noreferrer">LINKEDIN</motion.a>
            <motion.a whileHover={{ scale: 1.1 }} href="mailto:eduardo081001n@gmail.com">EMAIL</motion.a>
          </div>
        </div>
      </div>

      <div className="footer-right">
        <p className="footer-availability">AVAILABLE JUNE 2025</p>
        <p className="footer-question">HAVE A PROJECT IN MIND?</p>
        <motion.a
          href="mailto:eduardo081001n@gmail.com"
          className="footer-email"
          whileHover={{ scale: 1.05 }}
        >
          → eduardo081001n@gmail.com
        </motion.a>
        <p className="footer-copy">© 2025 EDUARDO CAMPOS</p>
      </div>
    </motion.footer>
  );
};

export default Footer;
