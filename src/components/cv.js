// src/components/pages/Cv.jsx
import React from "react";
import "./Cv.css";
import mifoto1 from "./imgs/eduardo.jpg";
import mifoto2 from "./imgs/eduardo2.jpg";
import mifoto3 from "./imgs/eduardo3.jpg";
import Navbar from "../components/Navbar"; 
import Servicios from "../components/Servicios";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Cv = () => {
    const skillsRef = useRef(null);
const isInView = useInView(skillsRef, { once: true });

  return (
    <div className="cv-container">
        <Navbar />
        

{/* Encabezado estilizado con nombre e imágenes flotantes */}
<section className="cv-title-section">
        <div className="floating-images">
          <img src={mifoto2} className="circle circle1" alt="Edu 1" />
          <img src={mifoto1} className="circle circle2" alt="Edu 2" />
          <img src={mifoto3} className="circle circle3" alt="Edu 3" />
        </div>
        <motion.h1
          className="cv-name"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          EDUARDO CAMPOS 
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Desarrollador, líder estudiantil y apasionado por la innovación tecnológica.
        </motion.p>
      </section>

      {/* Mi descripcion del CV */}
      <motion.section
        className="about-container"
        id="sobre-mi"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="header-info">
          <h1 className="logo">EDUARDO CAMPOS</h1>
          <p className="email">eduardo081001n@gmail.com ✦ Disponible desde junio 2025</p>
        </div>

        <div className="photo-stack">
          <img src={mifoto2} alt="foto divertida" className="photo tilted-left" />
          <img src={mifoto3} alt="foto formal" className="photo tilted-right" />
        </div>

        <div className="about-text">
          <h2>
            SOY UN DESARROLLADOR CREATIVO Y APASIONADO <br /> DESDE CELAYA, GTO.
          </h2>
          <p>
            <strong>Me encanta crear sitios accesibles, modernos y funcionales.</strong> 
            He colaborado en proyectos con estudiantes, agencias y universidades.
          </p>
          <p>
            <strong>Actualmente estoy desarrollando proyectos de seguridad, monitoreo inteligente y educación tecnológica</strong> 
            en el Instituto Tecnológico de Celaya.
          </p>
        </div>
      </motion.section>



{/* Mi parte del CV */}
<motion.section
  className="cv-section cv-timeline"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  <motion.h2>📚 Formación Académica</motion.h2>
  {[
    { date: "2017–2020", content: "CBTIS 198 – Especialidad en Programación" },
    { date: "2020–Actual", content: "Instituto Tecnológico de Celaya – Ingeniería en Sistemas Computacionales" },
  ].map((item, index) => (
    <motion.div
      className="timeline-item"
      key={index}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <span className="timeline-date">{item.date}</span>
      <span className="timeline-content">{item.content}</span>
    </motion.div>
  ))}

  <motion.h2 style={{ marginTop: "2.5rem" }}>💼 Experiencia</motion.h2>
  {[
    { date: "Freelance", content: "Creación de páginas web e-commerce" },
    { date: "2023", content: "App para dependencia municipal (seguridad y educación)" },
    { date: "Actual", content: "Marketing digital para empresas y grupos juveniles" },
  ].map((item, index) => (
    <motion.div
      className="timeline-item"
      key={index}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3 + index * 0.1 }}
      viewport={{ once: true }}
    >
      <span className="timeline-date">{item.date}</span>
      <span className="timeline-content">{item.content}</span>
    </motion.div>
  ))}

  <motion.h2 style={{ marginTop: "2.5rem" }}>🧠 Habilidades</motion.h2>
  {[
    { date: "Blandas", content: "Responsabilidad, trabajo en equipo, adaptabilidad" },
    { date: "Gestión", content: "Liderazgo estudiantil y manejo del tiempo" },
  ].map((item, index) => (
    <motion.div
      className="timeline-item"
      key={index}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.6 + index * 0.1 }}
      viewport={{ once: true }}
    >
      <span className="timeline-date">{item.date}</span>
      <span className="timeline-content">{item.content}</span>
    </motion.div>
  ))}

  <motion.h2 style={{ marginTop: "2.5rem" }}>🎖️ Liderazgo</motion.h2>
  {[
    { date: "Fundador", content: "ON Linces" },
    { date: "Presidente", content: "Impacto Guanajuato" },
    { date: "Red Líder", content: "Estatal y municipal" },
    { date: "Ponente", content: "Conferencista y coordinador juvenil" },
  ].map((item, index) => (
    <motion.div
      className="timeline-item"
      key={index}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.8 + index * 0.1 }}
      viewport={{ once: true }}
    >
      <span className="timeline-date">{item.date}</span>
      <span className="timeline-content">{item.content}</span>
    </motion.div>
  ))}

  <motion.h2 style={{ marginTop: "2.5rem" }}>🌐 Contacto</motion.h2>
  {[
    { date: "Email", content: "eduardo081001n@gmail.com" },
    { date: "Teléfono", content: "461 343 1429" },
    { date: "GitHub", content: "github.com/EduardoCampos08" },
  ].map((item, index) => (
    <motion.div
      className="timeline-item"
      key={index}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.1 + index * 0.1 }}
      viewport={{ once: true }}
    >
      <span className="timeline-date">{item.date}</span>
      <span className="timeline-content">{item.content}</span>
    </motion.div>
  ))}
</motion.section>


{/* Mi participacion dentro CV */}
<section className="cv-section cv-timeline">
  <h2>📢 Participación destacada</h2>
  <div className="timeline-item">
    <span className="timeline-date">Abril 2024</span>
    <span className="timeline-content">Ponente en el Congreso Nacional de Innovación Juvenil</span>
  </div>
  <div className="timeline-item">
    <span className="timeline-date">Octubre 2023</span>
    <span className="timeline-content">Organizador de Hackathon TecNM Celaya - Smart Campus</span>
  </div>
  <div className="timeline-item">
    <span className="timeline-date">Julio 2023</span>
    <span className="timeline-content">Coordinador Rally Estatal por el Medio Ambiente</span>
  </div>
  <div className="timeline-item">
    <span className="timeline-date">Mayo 2022</span>
    <span className="timeline-content">Conferencia sobre Liderazgo Tecnológico – IMJUVE</span>
  </div>
</section>
<Servicios />


      <section className="cv-section" ref={skillsRef}>
  <motion.h2
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
    transition={{ duration: 0.8 }}
  >
    💻 Lenguajes y tecnologías
  </motion.h2>

  <motion.div
    className="skills-container"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
    transition={{ duration: 1, delay: 0.3 }}
  >
    {[
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "React", level: 80 },
      { name: "PHP", level: 70 },
      { name: "SQL", level: 75 },
      { name: "Java", level: 65 },
      { name: "Node.js", level: 75 },
      { name: "SEO", level: 80 },
      { name: "GitHub", level: 90 },
    ].map((skill, index) => (
      <motion.div
        className="skill-bar"
        key={index}
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -30 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
      >
        <div className="skill-label">{skill.name}</div>
        <motion.div
          className="skill-fill"
          initial={{ width: 0 }}
          animate={{ width: isInView ? `${skill.level}%` : 0 }}
          transition={{ duration: 1, delay: index * 0.1 }}
        />
      </motion.div>
    ))}
  </motion.div>
</section>

      <motion.section
            className="cv-section"
            style={{ textAlign: "center", marginTop: "3rem" }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            >
            <motion.a
                href="/archivos/cv_EduardoCamposFrias.pdf"
                download
                className="download-btn"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                📄 Descargar MI CV (PDF)
            </motion.a>
        </motion.section>


    </div>
  );
};

export default Cv;
