// Contacto.js
import React, { useRef, useState } from "react";
import "./Contacto.css";
import { motion } from "framer-motion";
import { FiUser, FiMail, FiMessageCircle, FiPaperclip, FiCheckCircle } from "react-icons/fi";
import emailjs from "@emailjs/browser";

const Contacto = () => {
  const formRef = useRef();
  const [archivo, setArchivo] = useState(null);
  const [enviado, setEnviado] = useState(false);
  const [enviando, setEnviando] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "application/pdf") {
      setArchivo(file);
    } else {
      alert("Solo se permite subir archivos PDF.");
      e.target.value = null;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviando(true);

    emailjs
      .sendForm(
        "portafolio",
        "TU_TEMPLATE_ID",
        formRef.current,
        "GlxJlxBCc5uFfxXaP"
      )
      .then(
        () => {
          setEnviado(true);
          setEnviando(false);
          formRef.current.reset();
          setArchivo(null);
        },
        (error) => {
          console.error("Error al enviar:", error.text);
          setEnviando(false);
        }
      );
  };

  return (
    <section className="contact-section">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        📬 ¿Tienes un proyecto en mente, una idea loca o una propuesta interesante?
      </motion.h2>

      <form
        ref={formRef}
        className="contact-form"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <label>
          <FiUser className="form-icon" />
          <input type="text" name="user_name" placeholder="Tu nombre" required />
        </label>

        <label>
          <FiMail className="form-icon" />
          <input type="email" name="user_email" placeholder="Tu correo" required />
        </label>

        <label>
          <FiMessageCircle className="form-icon" />
          <textarea name="message" placeholder="Tu mensaje" rows="5" required />
        </label>

        <label className="file-label">
          <FiPaperclip className="form-icon" />
          <input
            type="file"
            name="attachment"
            accept=".pdf"
            onChange={handleFileChange}
          />
          {archivo && <span className="file-name">{archivo.name}</span>}
        </label>

        <motion.button
          type="submit"
          className="submit-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          disabled={enviando}
        >
          {enviando ? "Enviando..." : "Enviar mensaje"}
        </motion.button>

        {enviado && (
          <motion.div
            className="success-message"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <FiCheckCircle /> ¡Gracias por tu mensaje!
          </motion.div>
        )}
      </form>

      <div className="contact-alt">
        <p>¿Prefieres escribir un correo más extenso?</p>
        <motion.a
          href="mailto:eduardo081001n@gmail.com"
          className="contact-link"
          whileHover={{ scale: 1.05 }}
        >
          ✉️ Envíame un correo directo
        </motion.a>
      </div>
    </section>
  );
};

export default Contacto;

