// src/components/Servicios.jsx
import React from "react";
import "./Servicios.css";
import { motion } from "framer-motion";
import { Code, PenTool, Users, Shield } from "lucide-react"; // Puedes usar otros íconos

const servicios = [
  {
    icon: <Code size={32} />,
    title: "Desarrollo Web",
    desc: "Construyo sitios web modernos, accesibles y rápidos, adaptados a cualquier dispositivo.",
  },
  {
    icon: <Shield size={32} />,
    title: "Proyectos con impacto social",
    desc: "Trabajo con universidades y dependencias para crear tecnología útil para la sociedad.",
  },
  {
    icon: <Users size={32} />,
    title: "Liderazgo y Gestión",
    desc: "Organización de eventos tecnológicos, liderazgo en comunidades juveniles y conferencias.",
  },
  {
    icon: <PenTool size={32} />,
    title: "Diseño de experiencia",
    desc: "Interfaces que conectan visualmente con el usuario y fortalecen la identidad de marca.",
  },
];

const Servicios = () => {
  return (
    <section className="servicios-section">
      <h2 className="servicios-title">Servicios y enfoques</h2>
      <div className="servicios-grid">
        {servicios.map((servicio, index) => (
          <motion.div
            className="servicio-card"
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="icon">{servicio.icon}</div>
            <h3>{servicio.title}</h3>
            <p>{servicio.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Servicios;
