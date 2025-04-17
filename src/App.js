import React from "react";
import Hero from "./components/Hero";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import "./App.css";
import ParticlesBackground from "./components/ParticlesBackground";

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundColor: "black",
        minHeight: "100vh",
        position: "relative",
      }}
    >
      <ParticlesBackground />
      <Navbar /> {/* Menú arriba a la izquierda */}

      {/* Sección Home */}
      <section
        id="home"
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "2rem",
          zIndex: 10,
          position: "relative",
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{
            color: "white",
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            textAlign: "center",
            lineHeight: "1.2",
          }}
        >
          Hola, soy Eduardo Campos
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          style={{
            color: "#aaa",
            fontSize: "clamp(1rem, 2vw, 1.5rem)",
            marginTop: "1rem",
            textAlign: "center",
            maxWidth: "600px",
          }}
        >
          Desarrollador creativo con pasión por la tecnología, el diseño y la innovación.
        </motion.p>
      </section>

      {/* Sección Proyectos */}
      <section id="projects">
        <Hero />
      </section>

      {/* Agregaremos más secciones después (About, Contact, etc.) */}
    </div>
  );
}

export default App;
