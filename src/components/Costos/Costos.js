import React from "react";
import asfaltoConvencional from "../../assets/asfaltoConvencional.png";
import asfaltoFotocatalitico from "../../assets/asfaltoFotocatalitico.png";
import "./Costos.css";

function Costos() {
  return (
    <div>
    <div className="costos-container">
      {/* Título de la sección */}
      <h1 className="costos-title">Comparación de Costos</h1>
      
      {/* Contenedor de imágenes lado a lado */}
      <div className="costos-images">
        <div className="cost-image">
          <img src={asfaltoConvencional} alt="Asfalto Convencional" />
          <p>Asfalto Convencional</p>
        </div>
        <div className="cost-image">
          <img src={asfaltoFotocatalitico} alt="Asfalto Fotocatalítico" />
          <p>Asfalto Fotocatalítico</p>
        </div>
      </div>

      {/* Texto descriptivo */}
      <p className="costos-description">
        El asfalto fotocatalítico presenta un costo aproximadamente un 20% mayor en comparación 
        con el asfalto convencional. Este aumento de precio se debe a la incorporación de materiales 
        avanzados, como el dióxido de titanio, que le confieren propiedades autolimpiantes y de reducción 
        de contaminantes. Sin embargo, su impacto positivo en la calidad del aire y su contribución a ciudades 
        más sostenibles justifican su implementación en proyectos estratégicos.
      </p>
    </div>
      <footer className="footer">
        <p className="footer-text">Purify Road - Creado por Sofía Yúnez</p>
      </footer>
      </div>
  );
}

export default Costos;
