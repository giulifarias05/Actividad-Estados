import React, { useState } from 'react';
import { format } from 'date-fns'; // función de date-fns para formatear una fecha en un formato específico
import { es } from 'date-fns/locale'; //proporciona el formato de fecha en español

function Contador({ incremento }) {
  const [fechaActual, setFechaActual] = useState(new Date());
  const fechaInicio = new Date('2023-03-15');

  const calcularDiferencia = () => {
    const diferencia = Math.abs(fechaActual - fechaInicio);
    const diasDiferencia = Math.ceil(diferencia / (1000 * 60 * 60 * 24));
    return diasDiferencia;
  };

  const avanzar = () => {
    const nuevaFecha = new Date(fechaActual);
    nuevaFecha.setDate(nuevaFecha.getDate() + incremento);
    setFechaActual(nuevaFecha);
  };

  const retroceder = () => {
    const nuevaFecha = new Date(fechaActual);
    nuevaFecha.setDate(nuevaFecha.getDate() - incremento);
    setFechaActual(nuevaFecha);
  };

  const fechaFormateada = format(fechaActual, "dd 'de' MMMM 'de' yyyy", { locale: es });

  const diasDiferencia = calcularDiferencia();

  return (
    <div>
      <p>Fecha Actual: {fechaFormateada}</p>
      <div className="botones-container">
      <button className="buttonretroceder" onClick={retroceder}></button>
      <button className="buttonavanzar" onClick={avanzar}></button>
    </div>
    </div>
  );
}

export default Contador;
