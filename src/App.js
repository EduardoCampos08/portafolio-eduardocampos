// App.js
import React from "react";
import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import SobreMi from "./components/SobreMi"
import Cv from "./components/cv"; 
import Contacto from "./components/Contacto";

import Footer from "./components/Footer"; 
import ParticlesBackground from "./components/ParticlesBackground";
import ProjectPage from "./components/pages/ProjectPage";
import "./App.css";

import imagen from './components/svg/nave1.png';
import imagen2 from './components/svg/dino.png';
import imagen3 from './components/svg/ajolote.png';
import imagen4 from './components/svg/click.png';
import imagen5 from './components/svg/nave2.png';
import imagen6 from './components/svg/bonsai.png';

import { motion } from "framer-motion";



function HomePage() {
    const location = useLocation();

    useEffect(() => {
        document.body.style.cursor = `url(${imagen4}) 32 32, auto`;
        if (location.state?.scrollTo) {
          const section = document.getElementById(location.state.scrollTo);
          setTimeout(() => {
            section?.scrollIntoView({ behavior: "smooth" });
          }, 100); // delay pequeño para asegurar que se haya renderizado
        }
      }, [location]);
  return (
    <>
      <Navbar />
      <main className="App" style={{ backgroundColor: "#fef6f1", minHeight: "100vh", position: "relative" }}>
        <ParticlesBackground />

        {/* Sección Home */}
        <section id="home" style={{
          minHeight: "100vh",
          paddingTop: "80px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          paddingLeft: "2rem",
          paddingRight: "2rem",
          zIndex: 10,
          position: "relative"
        }}>
          <div className="hero-title-container">
            <motion.div
              className="orbit-container"
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
            >
              <div className="orbit-icon orbit-icon-1">
                <img src={imagen} alt="Logo girando" />
              </div>
              <div className="orbit-icon orbit-icon-2">
                <img src={imagen2} alt="Dino" />
              </div>
              <div className="orbit-icon orbit-icon-3">
                <img src={imagen3} alt="Ajolote" />
              </div>
              <div className="orbit-icon orbit-icon-4">
                <img src={imagen4} alt="Click" />
              </div>
              <div className="orbit-icon orbit-icon-5">
                <img src={imagen5} alt="Nave" />
              </div>
              <div className="orbit-icon orbit-icon-6">
                <img src={imagen6} alt="Bonsai" />
              </div>
            </motion.div>

            <motion.h1 className="hero-title">
              <h1 className="hero-title-h1">
                Hola, soy <br /> <span className="gradient-text">Eduardo Campos</span>
              </h1>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="hero-description"
            >
              Creatividad y tecnología al servicio de la innovación.
            </motion.p>
          </div>
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="about" style={{ minHeight: "100vh", color: "white", padding: "2rem", backgroundColor: "#fef6f1" }}>
            <h2 style={{ textAlign: "center", color: "var(--color-text-primary)", marginBottom: "2rem" }}>Sobre mí</h2>
            <SobreMi />
         </section>

        <section id="contact" style={{ minHeight: "100vh", color: "white", padding: "2rem", backgroundColor: "#fef6f1" }}>
          <Contacto />
        </section>

        <Footer />
      </main>
    </>
  );
}

function ProjectPageWrapper() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "80px", backgroundColor: "#fef6f1", minHeight: "100vh" }}>
        <ProjectPage />
      </main>
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/project/:projectId" element={<ProjectPageWrapper />} />
      <Route path="/cv" element={<Cv />} />  
    </Routes>
  );
}

export default App;
