// src/Plano.js
import React, { useState } from "react";
import planta1 from "../../assets/Planta1.pdf";
import planta2 from "../../assets/Planta2.pdf";
import perfil from "../../assets/Perfil.pdf";
import planta1img from "../../assets/planta1.png";
import planta2img from "../../assets/planta2.png";
import perfilimg from "../../assets/perfil.png";
import logo from "../../assets/logo.png";
import "./Plano.css";

function Plano() {
  const [modalImage, setModalImage] = useState(null);

  const openModal = (image) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  const cardsData = [
    { title: "Planta Estación 16", image: planta2img, downloadLink: planta2 },
    {
      title: "Área de Asfalto Fotocatalítico",
      image: planta1img,
      downloadLink: planta1,
    },
    { title: "Perfil Vial", image: perfilimg, downloadLink: perfil },
  ];

  return (
    <div>
      <div className="plano-section">
        <div className="header-with-logo">
          <div>
          <h1 className="section-title">Visualización de Planos</h1>
            <h1 className="section-title-1">Metro de Bogotá</h1>
            <p className="section-description">
              La siguiente sección presenta planos relacionados con la
              implementación de tecnologías innovadoras en áreas urbanas. Estos
              planos muestran la disposición de infraestructuras que buscan
              mejorar la calidad del aire y contribuir a la sostenibilidad
              ambiental en espacios de alta densidad de personas y vehículos.
            </p>
          </div>
          <img src={logo} alt="Purify Road" className="logo-image" />
        </div>

        <div className="cards-container">
          {cardsData.map((card, index) => (
            <div key={index} className="card">
              <img
                src={card.image}
                alt={card.title}
                className="card-image"
                onClick={() => openModal(card.image)}
              />
              <h3>{card.title}</h3>
              <div className="card-buttons">
                <button onClick={() => openModal(card.image)}>
                  Ver más grande
                </button>
                <a href={card.downloadLink} download>
                  <button>Descargar Plano</button>
                </a>
              </div>
            </div>
          ))}
        </div>

        {modalImage && (
          <div className="modal" onClick={closeModal}>
            <span className="close">&times;</span>
            <img
              className="modal-content"
              src={modalImage}
              alt="Plano ampliado"
            />
          </div>
        )}

        <div className="why-section">
          <h2>¿Por qué escogimos esta estación?</h2>
          <p>
            La implementación del asfalto fotocatalítico se llevará acabo en la
            Estación 16 del Metro, ya que es una zona con alta incidencia
            comercial, universidades y un elevado flujo de personas. Este tipo
            de asfalto, al reducir emisiones de CO₂ y NOx mediante procesos
            catalíticos, contribuiría a:
            <ul>
              <li>
                Reducción de contaminantes en áreas de alta densidad de personas
                y vehículos.
              </li>
              <li>
                Mejora en la salud pública, disminuyendo el riesgo de
                enfermedades respiratorias.
              </li>
              <li>
                Promoción del desarrollo sostenible, posicionando la estación
                como un modelo de innovación ambiental.
              </li>
            </ul>
            Este se implementará en:
            <ul>
              <li>
                Accesos principales y andenes para maximizar su impacto en zonas
                de tránsito peatonal.
              </li>
              <li>
                Zonas de parada de buses, donde las emisiones son más altas.
              </li>
              <li>
                Alrededores comerciales y universitarios, creando un corredor
                sostenible en áreas críticas de emisión.
              </li>
            </ul>
          </p>
        </div>
      </div>
      <footer className="footer">
        <p className="footer-text">Purify Road - Creado por Sofía Yúnez</p>
      </footer>
    </div>
  );
}

export default Plano;
