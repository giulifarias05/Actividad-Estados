import React, { useState } from 'react';
import Contador from './componentes/contadorybotones';
import ContadorHoras from './componentes/ContadorHoras';
import './App.css';


function App() {
  const [incremento, setIncremento] = useState(1);

  const handleIncrementoChange = (e) => {
    const nuevoIncremento = parseInt(e.target.value);
    setIncremento(nuevoIncremento);
  };

  return (
    <div className="App">
      <h1>Fecha</h1>
      <div>
        <p>Elige la cantidad de dias que deseas avanzar o retroceder:</p>
        <input
          type="number"
          value={incremento}
          onChange={handleIncrementoChange}
        />
      </div>
      <div>
        <Contador incremento={incremento} />
      </div>
      <h1>Hora</h1>
       <ContadorHoras incremento={1} />
    
    </div>
  );
}

export default App;
