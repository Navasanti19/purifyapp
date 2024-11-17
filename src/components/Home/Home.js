import React from "react";
import logo from "../../assets/logo.png";
import "./Home.css";

function Home() {
  return (
    <div>
    <div className="home-container">
      {/* Logo en la parte superior */}
      <div className="home-logo">
        <img src={logo} alt="Purify Road Logo" />
      </div>

      {/* Sección de información */}
      <section className="info-section">
        <h1>¿Quiénes somos?</h1>
        <p>
          Somos un grupo que se encarga del estudio de la implementación del asfalto fotocatalítico en Bogotá, 
          principalmente en las vías del metro en construcción en esta ciudad. Tomamos esta decisión debido a la 
          creciente problemática de la contaminación, la cual es particularmente concentrada en ciudades industriales. 
          Esto genera problemas ambientales y de salud para los habitantes. Nos comprometimos a encontrar una solución y 
          decidimos implementar asfalto fotocatalítico en zonas de alto tránsito, tanto peatonal como vehicular. Por ello, 
          seleccionamos la estación 16 del metro, una de las zonas más transitadas, con el objetivo de reducir la tasa de 
          contaminación local y estudiar su impacto para futuras implementaciones en la ciudad.
        </p>
      </section>

      <section className="info-section">
        <h1>¿Qué es el asfalto fotocatalítico?</h1>
        <p>
          El asfalto fotocatalítico es un tipo de material desarrollado para pavimentos que incorpora compuestos fotocatalíticos, 
          como el dióxido de titanio (TiO₂). Estos compuestos activan reacciones químicas en presencia de luz solar u otras 
          fuentes de radiación ultravioleta, permitiendo descomponer contaminantes del aire como óxidos de nitrógeno (NOx) y 
          compuestos orgánicos volátiles (COV). El dióxido de titanio actúa como un catalizador en un proceso conocido como 
          fotocatálisis, el cual implica una serie de reacciones químicas que ayudan a limpiar el aire de contaminantes.
        </p>
      </section>

      <section className="info-section">
        <h1>Contaminación cercana a la estación Calle 76</h1>
        <p>
          En la estación de TransMilenio de la Calle 76 y sus alrededores, los niveles de contaminación del aire son monitoreados 
          principalmente en función del material particulado (PM2.5 y PM10), el principal contaminante en Bogotá debido al tránsito 
          de vehículos y la actividad industrial. Según datos recientes, el promedio de PM2.5 en corredores de transporte público 
          como este puede variar entre 30 y 50 µg/m³ en días normales, superando ocasionalmente los límites recomendados por la 
          Organización Mundial de la Salud (15 µg/m³ para PM2.5 en promedio diario).
        </p>
      </section>
    </div>
      <footer className="footer">
        <p className="footer-text">Purify Road - Creado por Sofía Yúnez</p>
      </footer>
      </div>
  );
}

export default Home;
