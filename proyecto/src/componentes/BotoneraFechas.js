import React, { useState } from 'react';
import { format, addDays } from 'date-fns';
import { es } from 'date-fns/locale';


function BotonesGrid() {
  const [contador, setContador] = useState(0);
  const [incremento, setIncremento] = useState(1);
  const [fechaActual, setFechaActual] = useState(new Date());


  const avanzar = () => {
    setContador(contador + incremento);
    const nuevaFecha = addDays(fechaActual, incremento);
    setFechaActual(nuevaFecha);
  };

  const retroceder = () => {
    setContador(contador - incremento);
    const nuevaFecha = addDays(fechaActual, -incremento);
    setFechaActual(nuevaFecha);
  };

  const incrementar = () => {
    setIncremento(incremento + 1);
  };

  const decrementar = () => {
    if (incremento > 1) {
      setIncremento(incremento - 1);
    }
  };

  const horaActual = new Date().getHours();
  let imagenURL = '';

  if (horaActual >= 6 && horaActual < 12) {
    imagenURL = 'https://cdn.icon-icons.com/icons2/1370/PNG/512/if-weather-3-2682848_90785.png';
  } else if (horaActual >= 12 && horaActual < 19) {
    imagenURL = 'https://cdn.icon-icons.com/icons2/1370/PNG/512/if-weather-26-2682825_90789.png';
  } else {
    imagenURL = 'https://cdn.icon-icons.com/icons2/1370/PNG/512/if-weather-4-2682847_90799.png';
  }
 
  return (
    <div className="botones-grid">
     <h1>Bienvenidos</h1>
     <div className="card">
      <div className="fila">
        <button className="buttonretroceder" onClick={decrementar}></button>
        <span className="texto-grande">{incremento}</span>
        <button className='buttonavanzar' onClick={incrementar}></button>
        <br />
      </div>
      <div className="fila">
      <br />
        <button className="buttonretroceder" onClick={retroceder}></button>
        <span className="texto-grande">{contador}</span>
        <button className='buttonavanzar' onClick={avanzar}></button>
      </div>
      <br />
     <button className="btn btn-link mi-clase">
       {format(fechaActual, "dd 'de' MMMM 'del' yyyy", { locale: es })}</button>       <br/>  <br />
      {format(fechaActual, 'HH:mm:ss')}
      <br />     
        {imagenURL && <img src={imagenURL} className='imagen-clase' />}
    </div>
    </div>
  );
}

export default BotonesGrid;
