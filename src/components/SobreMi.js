import React from "react";
import "./SobreMi.css";
import { useNavigate } from "react-router-dom";
import tuFoto from "./imgs/eduardo.jpg";

function AboutCard() {
  const navigate = useNavigate();

  return (
    <div className="about-card-container">
      <div className="about-card">
        <img src={tuFoto} alt="Eduardo Campos" className="about-photo" />
        <div className="about-content">
          <h3>Eduardo Campos</h3>
          <p>
            Ingeniero en desarrollo de software, apasionado por la innovación,
            la creatividad y el impacto social a través de la tecnología.
          </p>
          <button className="know-more-button" onClick={() => navigate("./cv")}>
            Conoce más...
          </button>
        </div>
      </div>
    </div>
  );
}

export default AboutCard;
