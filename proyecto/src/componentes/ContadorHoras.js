import React, { useState, useEffect } from 'react';


function ContadorHoras({ incremento }) {
  const [imagen, setImagen] = useState(null);
  const [horaActual, setHoraActual] = useState(new Date());
  const horaInicio = new Date('2023-01-15T08:00:00'); // Hora de inicio (ejemplo)

  useEffect(() => {
    const obtenerImagenSegunHora = () => {
      let imagenURL;

      if (horaActual.getHours() >= 8 && horaActual.getHours() < 12) {
        // Mañana
        imagenURL = 'https://cdn.icon-icons.com/icons2/1370/PNG/512/if-weather-3-2682848_90785.png'; // URL de la imagen de la mañana
      } else if (horaActual.getHours() >= 12 && horaActual.getHours() < 19) {
        // Tarde
        imagenURL = 'https://cdn.icon-icons.com/icons2/1370/PNG/512/if-weather-26-2682825_90789.png'; // URL de la imagen de la tarde
      } else {
        // Noche
        imagenURL = 'https://cdn.icon-icons.com/icons2/1370/PNG/512/if-weather-4-2682847_90799.png'; // URL de la imagen de la noche
      }

      setImagen(imagenURL);
    };

    obtenerImagenSegunHora();
  }, [horaActual]);

  const avanzar = () => {
    const nuevaHora = new Date(horaActual);
    nuevaHora.setTime(nuevaHora.getTime() + incremento * 60 * 60 * 1000);
    setHoraActual(nuevaHora);
  };

  const retroceder = () => {
    const nuevaHora = new Date(horaActual);
    nuevaHora.setTime(nuevaHora.getTime() - incremento * 60 * 60 * 1000);
    setHoraActual(nuevaHora);
  };

  return (
    <div>
      <p>Hora Actual: {horaActual.toLocaleTimeString()}</p>
      <div className="botones-container">
        <button className="buttonretroceder" onClick={retroceder}></button>
        <button className="buttonavanzar" onClick={avanzar}></button>
      </div>
      {imagen && <img src={imagen} alt="Imagen según la hora" className="imagen-clase" />}
    </div>
  );
}

export default ContadorHoras;
