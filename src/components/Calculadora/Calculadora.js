import React, { useState } from "react";
import logo from "../../assets/logo.png";
import resultImage from "../../assets/hoja.png"; // Asegúrate de que el nombre y la ubicación del archivo sean correctos
import "./Calculadora.css";

function Calculadora() {
  const [tipoGas, setTipoGas] = useState("NOx");
  const [coeficiente, setCoeficiente] = useState("");
  const [dias, setDias] = useState("");
  const [area, setArea] = useState("");
  const [emisionesTotales, setEmisionesTotales] = useState("");
  const [resultado, setResultado] = useState(null);
  const [error, setError] = useState("");
  const [generalError, setGeneralError] = useState("");

  const coeficientes = {
    NOx: [0.1, 0.3],
    SO2: [0.05, 0.15],
    CO: [0.05, 0.1],
    CO2: [0.01, 0.05],
    COVs: [0.01, 0.03],
  };

  const calcular = () => {
    if (!tipoGas || !coeficiente || !dias || !area || !emisionesTotales) {
        setGeneralError("Por favor complete todos los campos antes de calcular.");
        return;
      }
    const absorcionDiaria = parseFloat(coeficiente) * parseFloat(area);
    const absorcionTotal = absorcionDiaria * parseInt(dias);
    const reduccionEmisiones = (absorcionTotal / parseFloat(emisionesTotales)) * 100;

    setResultado({
      absorcionDiaria: absorcionDiaria.toFixed(2),
      absorcionTotal: absorcionTotal.toFixed(2),
      reduccionEmisiones: reduccionEmisiones.toFixed(2),
    });
    setGeneralError("");
  };

  const handleCoeficienteChange = (e) => {
    const value = parseFloat(e.target.value);
    setCoeficiente(value);

    if (tipoGas && coeficientes[tipoGas]) {
      const [min, max] = coeficientes[tipoGas];
      if (value < min || value > max) {
        setError(
          `El coeficiente debe estar entre ${min} y ${max} g/m²/día para ${tipoGas}`
        );
      } else {
        setError("");
      }
    }
  };

  return (
    <div className="app">
      <header className="header">
        <div className="welcome-section">
          <div className="welcome-text">
            <h1>
              Calculadora <br />{" "}
              <strong>Beneficios Asfalto fotocatalítico</strong>
            </h1>
            <p>
              Esta aplicación calcula la capacidad de absorción de gases
              contaminantes por el asfalto fotocatalítico, ayudando a reducir la
              contaminación en áreas urbanas.
            </p>
          </div>
          <img src={logo} alt="Purify Road" className="welcome-logo" />
        </div>
      </header>

      <section className="table-section">
        <h2>Coeficientes promedio de absorción de gases</h2>
        <p className="table-description">
          La siguiente tabla muestra los coeficientes promedio de absorción de
          diferentes gases contaminantes. Estos valores son aproximados y se
          utilizan para calcular la capacidad de absorción del asfalto
          fotocatalítico bajo condiciones ideales de luz solar y ventilación.
        </p>
        <table className="coefficients-table">
          <thead>
            <tr>
              <th>Tipo de gas contaminante</th>
              <th>Coeficiente</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                Óxidos de nitrógeno (NO<sub>x</sub>)
              </td>
              <td>
                0.1 - 0.3 <span className="unit"></span>
              </td>
            </tr>
            <tr>
              <td>
                Dióxido de Azufre (SO<sub>2</sub>)
              </td>
              <td>
                0.05 - 0.15 <span className="unit"></span>
              </td>
            </tr>
            <tr>
              <td>Monóxido de Carbono (CO)</td>
              <td>
                0.05 - 0.1 <span className="unit"></span>
              </td>
            </tr>
            <tr>
              <td>
                Dióxido de Carbono (CO<sub>2</sub>)
              </td>
              <td>
                0.01 - 0.05 <span className="unit"></span>
              </td>
            </tr>
            <tr>
              <td>Compuestos Orgánicos Volátiles (COVs)</td>
              <td>
                0.01 - 0.03 <span className="unit"></span>
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <div className="calculation-section">
        <div className="calculator">
          <label>
            Tipo de gas:
            <select
              value={tipoGas}
              onChange={(e) => setTipoGas(e.target.value)}
            >
              <option value="NOx">Óxidos de nitrógeno (NOx)</option>
              <option value="SO2">Dióxido de Azufre (SO2)</option>
              <option value="CO">Monóxido de Carbono (CO)</option>
              <option value="CO2">Dióxido de Carbono (CO2)</option>
              <option value="COVs">
                Compuestos Orgánicos Volátiles (COVs)
              </option>
            </select>
          </label>
          <label>
            Coeficiente de absorción de gas:
            <input
              type="number"
              value={coeficiente}
              onChange={handleCoeficienteChange}
              placeholder="Ej: 0.1 - 0.3"
            />
          </label>
          {error && <p className="error-message">{error}</p>}
          <label>
            Tiempo en días:
            <input
              type="number"
              value={dias}
              onChange={(e) => setDias(e.target.value)}
              placeholder="Ej: 365"
            />
          </label>
          <label>
            Área en m²:
            <input
              type="number"
              value={area}
              onChange={(e) => setArea(e.target.value)}
              placeholder="Ej: 10000"
            />
          </label>
          <label>
            Emisiones totales (g):
            <input
              type="number"
              value={emisionesTotales}
              onChange={(e) => setEmisionesTotales(e.target.value)}
              placeholder="Ej: 1000000"
            />
          </label>
          {generalError && <p className="general-error-message">{generalError}</p>}
          <button onClick={calcular}>Calcular</button>
        </div>

        {resultado && (
          <div className="result">
            <img src={resultImage} alt="Resultado" className="result-image" />
            <h2>Resultados</h2>
            <p>
              <strong>Absorción Diaria Total:</strong>{" "}
              {resultado.absorcionDiaria} g/día
            </p>
            <p>
              <strong>Absorción Total en el Período:</strong>{" "}
              {resultado.absorcionTotal} g
            </p>
            <p>
              <strong>Reducción de Emisiones:</strong>{" "}
              <span className="percentage">
                {resultado.reduccionEmisiones}%
              </span>
            </p>
          </div>
        )}
      </div>
      <footer className="footer">
        <p className="footer-text">Purify Road - Creado por Sofía Yúnez</p>
      </footer>
    </div>
  );
}

export default Calculadora;
