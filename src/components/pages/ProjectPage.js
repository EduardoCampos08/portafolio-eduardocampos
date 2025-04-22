// src/pages/ProjectPage.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./ProjectPage.css";

const projectData = {
  "on-linces": {
    title: "ON Linces",
    description: "Página web para el grupo de programación ON Linces...",
    technologies: ["React", "Framer Motion", "CSS"],
    image: "/images/on-linces.jpg",
  },
  desi: {
    title: "DESI",
    description: "Sistema integral de seguridad y visualización...",
    technologies: ["Seguridad", "C4", "Node.js"],
    image: "/images/desi.jpg",
  },
  gesi: {
    title: "GESI",
    description: "Sistema inteligente de gestión de estacionamiento...",
    technologies: ["IoT", "Python", "Data Science"],
    image: "/images/gesi.jpg",
  },
};

const ProjectPage = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const project = projectData[projectId];

  if (!project)
    return (
      <div className="project-page">
        <h2>Proyecto no encontrado</h2>
      </div>
    );

  return (
    <div className="project-page">

      <motion.img
        src={project.image}
        alt={project.title}
        className="project-banner"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      />

      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
      >
        {project.title}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        {project.description}
      </motion.p>

      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        {project.technologies.map((tech, i) => (
          <motion.li
            key={i}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {tech}
          </motion.li>
        ))}
      </motion.ul>

      <motion.button
        className="back-button"
        onClick={() => navigate("/")}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        ← Volver a proyectos
      </motion.button>
    </div>
  );
};

export default ProjectPage;
