// src/components/Projects.js
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./Projects.css";
import "./variables.css";

const projects = [
  {
    title: "ON Linces",
    image: "/images/on-linces.jpg", // asegúrate de tener estas imágenes en public/images/
    tags: ["2025", "DEV", "REACT"],
    path: "/project/on-linces",
  },
  {
    title: "DESI",
    image: "/images/desi.jpg",
    tags: ["SECURITY", "GSAP", "MOTION"],
    path: "/project/desi",
  },
  {
    title: "GESI",
    image: "/images/gesi.jpg",
    tags: ["IOT", "DATA", "PYTHON"],
    path: "/project/gesi",
  },
];

const Projects = () => {
  const navigate = useNavigate();

  return (
    <section className="projects-container" id="projects">
        <h2 className="section-title">Proyectos</h2>
      <h2 className="section-title">Selected Work</h2>
      <div className="projects-wrapper">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            onClick={() => navigate(project.path)}
          >
            <img src={project.image} alt={project.title} className="project-img" />
            <h3 className="project-title">{project.title}</h3>
            <div className="tags">
              {project.tags.map((tag, i) => (
                <span className="tag" key={i}>{tag}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
